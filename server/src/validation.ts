import { z } from "zod";

/** Правила валидации совпадают с клиентом (`web/utils/validation.ts`). */
/** Примеры курсов для подсказок на форме заявки (название может быть любым). */
export const COURSE_TITLES = [
  "Основы алгоритмизации и программирования",
  "Основы веб-дизайна",
  "Основы проектирования баз данных",
] as const;

const loginSchema = z
  .string()
  .min(6, "Логин: минимум 6 символов")
  .regex(/^[a-zA-Z0-9]+$/, "Логин: только латиница и цифры");

const passwordSchema = z.string().min(8, "Пароль: минимум 8 символов");

const fullNameSchema = z
  .string()
  .min(1, "Укажите ФИО")
  .regex(/^[а-яА-ЯёЁ\s]+$/, "ФИО: только кириллица и пробелы");

const phoneSchema = z
  .string()
  .regex(
    /^8\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
    "Телефон: формат 8(XXX)XXX-XX-XX",
  );

const emailSchema = z.string().email("Некорректный email");

export const registerSchema = z.object({
  login: loginSchema,
  password: passwordSchema,
  fullName: fullNameSchema,
  phone: phoneSchema,
  email: emailSchema,
});

export const loginSchemaBody = z.object({
  login: z.string().min(1, "Введите логин"),
  password: z.string().min(1, "Введите пароль"),
});

export function parseRuDate(value: string): Date | null {
  const s = value.trim();
  const m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(s);
  if (!m) return null;
  const d = Number(m[1]);
  const mo = Number(m[2]);
  const y = Number(m[3]);
  const dt = new Date(y, mo - 1, d);
  if (
    dt.getFullYear() !== y ||
    dt.getMonth() !== mo - 1 ||
    dt.getDate() !== d
  ) {
    return null;
  }
  return dt;
}

/** Название курса — произвольная строка (ТЗ: поле ввода), не только справочник. */
export const createApplicationSchema = z.object({
  courseTitle: z
    .string()
    .transform((s) => s.trim())
    .pipe(
      z
        .string()
        .min(3, "Название курса: минимум 3 символа")
        .max(200, "Название курса: не более 200 символов"),
    ),
  startDate: z.string().refine((v) => parseRuDate(v) !== null, {
    message: "Дата в формате ДД.ММ.ГГГГ",
  }),
  paymentMethod: z.enum(["CASH", "PHONE_TRANSFER"]),
});

export const reviewSchema = z.object({
  content: z.string().min(3, "Отзыв слишком короткий").max(2000),
});

/** ТЗ п. 6.3: админ переводит заявку в «Идёт обучение» или «Обучение завершено». */
export const adminStatusSchema = z.object({
  status: z.enum(["IN_PROGRESS", "COMPLETED"]),
});
