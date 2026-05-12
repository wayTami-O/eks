import { cors } from "@elysiajs/cors";
import { jwt } from "@elysiajs/jwt";
import { bearer } from "@elysiajs/bearer";
import { PrismaClient, type ApplicationStatus, type Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Elysia, t } from "elysia";
import {
  adminStatusSchema,
  COURSE_TITLES,
  createApplicationSchema,
  loginSchemaBody,
  parseRuDate,
  registerSchema,
  reviewSchema,
} from "./validation";

/** API «Корочки.есть»: JWT, регистрация/вход, заявки, отзывы, админка. */
const prisma = new PrismaClient();
const PORT = Number(process.env.PORT ?? 5252);
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-change-me";

type JwtPayload = { sub: string; role: Role };

const app = new Elysia()
  .use(
    cors({
      origin: true,
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }),
  )
  .use(
    jwt({
      name: "jwt",
      secret: JWT_SECRET,
      exp: "7d",
    }),
  )
  .use(bearer())
  .derive(async ({ jwt, bearer: token }) => {
    let userId: string | null = null;
    let role: Role | null = null;
    if (token) {
      const payload = (await jwt.verify(token)) as JwtPayload | false;
      if (payload && typeof payload.sub === "string") {
        userId = payload.sub;
        role = payload.role ?? null;
      }
    }
    return { authUserId: userId, authRole: role };
  })
  .get("/api/health", () => ({ ok: true }))

  // --- Регистрация: пароль только bcrypt-хэш в БД ---
  .post(
    "/api/auth/register",
    async ({ body, set }) => {
      const parsed = registerSchema.safeParse(body);
      if (!parsed.success) {
        set.status = 400;
        return {
          ok: false,
          errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
        };
      }
      const data = parsed.data;
      const passwordHash = await bcrypt.hash(data.password, 12);
      try {
        const user = await prisma.user.create({
          data: {
            login: data.login,
            passwordHash,
            fullName: data.fullName.trim(),
            phone: data.phone,
            email: data.email,
          },
          select: { id: true, login: true, role: true },
        });
        return { ok: true, user };
      } catch (e: unknown) {
        const code = e && typeof e === "object" && "code" in e ? (e as { code: string }).code : "";
        if (code === "P2002") {
          set.status = 409;
          return { ok: false, message: "Логин уже занят" };
        }
        throw e;
      }
    },
    {
      body: t.Object({
        login: t.String(),
        password: t.String(),
        fullName: t.String(),
        phone: t.String(),
        email: t.String(),
      }),
    },
  )

  // --- Авторизация: JWT с user id и ролью ---
  .post(
    "/api/auth/login",
    async ({ body, jwt, set }) => {
      const parsed = loginSchemaBody.safeParse(body);
      if (!parsed.success) {
        set.status = 400;
        return {
          ok: false,
          errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
        };
      }
      const { login, password } = parsed.data;
      const user = await prisma.user.findUnique({ where: { login } });
      if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        set.status = 401;
        return { ok: false, message: "Неверный логин или пароль" };
      }
      const token = await jwt.sign({ sub: user.id, role: user.role } satisfies JwtPayload);
      return {
        ok: true,
        token,
        user: {
          id: user.id,
          login: user.login,
          role: user.role,
          fullName: user.fullName,
        },
      };
    },
    {
      body: t.Object({
        login: t.String(),
        password: t.String(),
      }),
    },
  )
  // --- Текущий пользователь по Bearer ---
  .get("/api/me", async ({ authUserId, set }) => {
    if (!authUserId) {
      set.status = 401;
      return { ok: false, message: "Требуется авторизация" };
    }
    const user = await prisma.user.findUnique({
      where: { id: authUserId },
      select: {
        id: true,
        login: true,
        role: true,
        fullName: true,
        email: true,
        phone: true,
      },
    });
    if (!user) {
      set.status = 401;
      return { ok: false, message: "Пользователь не найден" };
    }
    return { ok: true, user };
  })
  // --- Справочник названий курсов для формы заявки ---
  .get("/api/courses", () => ({
    ok: true,
    courses: [...COURSE_TITLES],
  }))
  // --- Заявки только текущего пользователя ---
  .get("/api/applications", async ({ authUserId, set }) => {
    if (!authUserId) {
      set.status = 401;
      return { ok: false, message: "Требуется авторизация" };
    }
    const rows = await prisma.courseApplication.findMany({
      where: { userId: authUserId },
      orderBy: { createdAt: "desc" },
      include: { review: true },
    });
    return {
      ok: true,
      applications: rows.map(mapApplication),
    };
  })
  // --- Новая заявка: статус NEW по умолчанию ---
  .post(
    "/api/applications",
    async ({ body, authUserId, set }) => {
      if (!authUserId) {
        set.status = 401;
        return { ok: false, message: "Требуется авторизация" };
      }
      const parsed = createApplicationSchema.safeParse(body);
      if (!parsed.success) {
        set.status = 400;
        return {
          ok: false,
          errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
        };
      }
      const { courseTitle, paymentMethod } = parsed.data;
      const startDate = parseRuDate(parsed.data.startDate)!;
      const created = await prisma.courseApplication.create({
        data: {
          userId: authUserId,
          courseTitle,
          startDate,
          paymentMethod,
          status: "NEW",
        },
      });
      return { ok: true, application: mapApplication({ ...created, review: null }) };
    },
    {
      body: t.Object({
        courseTitle: t.String(),
        startDate: t.String(),
        paymentMethod: t.Union([t.Literal("CASH"), t.Literal("PHONE_TRANSFER")]),
      }),
    },
  )
  // --- Отзыв к своей заявке (один отзыв на заявку) ---
  .post(
    "/api/applications/:id/review",
    async ({ params, body, authUserId, set }) => {
      if (!authUserId) {
        set.status = 401;
        return { ok: false, message: "Требуется авторизация" };
      }
      const parsed = reviewSchema.safeParse(body);
      if (!parsed.success) {
        set.status = 400;
        return {
          ok: false,
          errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
        };
      }
      const appRow = await prisma.courseApplication.findFirst({
        where: { id: params.id, userId: authUserId },
      });
      if (!appRow) {
        set.status = 404;
        return { ok: false, message: "Заявка не найдена" };
      }
      const existing = await prisma.review.findUnique({
        where: { applicationId: appRow.id },
      });
      if (existing) {
        set.status = 409;
        return { ok: false, message: "Отзыв уже оставлен" };
      }
      const review = await prisma.review.create({
        data: {
          applicationId: appRow.id,
          userId: authUserId,
          content: parsed.data.content.trim(),
        },
      });
      return { ok: true, review };
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({ content: t.String() }),
    },
  )
  // --- Админ: все заявки с пагинацией ---
  .get("/api/admin/applications", async ({ query, authUserId, authRole, set }) => {
    if (!authUserId || authRole !== "ADMIN") {
      set.status = 403;
      return { ok: false, message: "Доступ запрещён" };
    }
    const page = Math.max(1, Number(query.page ?? 1));
    const limit = Math.min(50, Math.max(1, Number(query.limit ?? 10)));
    const statusRaw = query.status as string | undefined;
    const statusFilter =
      statusRaw &&
      ["NEW", "IN_PROGRESS", "COMPLETED"].includes(statusRaw)
        ? (statusRaw as ApplicationStatus)
        : undefined;
    const where = statusFilter ? { status: statusFilter } : {};
    const [total, rows] = await prisma.$transaction([
      prisma.courseApplication.count({ where }),
      prisma.courseApplication.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: { select: { login: true, fullName: true, email: true, phone: true } },
          review: true,
        },
      }),
    ]);
    return {
      ok: true,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      applications: rows.map((r) => ({
        ...mapApplication(r),
        user: r.user,
      })),
    };
  })
  // --- Админ: смена статуса заявки ---
  .patch(
    "/api/admin/applications/:id/status",
    async ({ params, body, authUserId, authRole, set }) => {
      if (!authUserId || authRole !== "ADMIN") {
        set.status = 403;
        return { ok: false, message: "Доступ запрещён" };
      }
      const parsed = adminStatusSchema.safeParse(body);
      if (!parsed.success) {
        set.status = 400;
        return {
          ok: false,
          errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
        };
      }
      try {
        const updated = await prisma.courseApplication.update({
          where: { id: params.id },
          data: { status: parsed.data.status },
          include: {
            user: { select: { login: true, fullName: true, email: true, phone: true } },
            review: true,
          },
        });
        return {
          ok: true,
          application: {
            ...mapApplication(updated),
            user: updated.user,
          },
        };
      } catch {
        set.status = 404;
        return { ok: false, message: "Заявка не найдена" };
      }
    },
    {
      params: t.Object({ id: t.String() }),
      body: t.Object({
        status: t.Union([t.Literal("IN_PROGRESS"), t.Literal("COMPLETED")]),
      }),
    },
  )
  .listen(PORT);

/** Ответ API: даты заявки в привычном для форм виде. */
function mapApplication(
  row: {
    id: string;
    courseTitle: string;
    startDate: Date;
    paymentMethod: string;
    status: ApplicationStatus;
    createdAt: Date;
    review: { id: string; content: string; createdAt: Date } | null;
  },
) {
  return {
    id: row.id,
    courseTitle: row.courseTitle,
    startDate: formatRuDate(row.startDate),
    paymentMethod: row.paymentMethod,
    status: row.status,
    createdAt: row.createdAt.toISOString(),
    review: row.review
      ? {
          id: row.review.id,
          content: row.review.content,
          createdAt: row.review.createdAt.toISOString(),
        }
      : null,
  };
}

function formatRuDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

console.log(`🎓 API «Корочки.есть» — http://localhost:${PORT}`);

export type App = typeof app;
