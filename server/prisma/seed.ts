import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("KorokNET", 12);
  await prisma.user.upsert({
    where: { login: "Admin" },
    update: { passwordHash },
    create: {
      login: "Admin",
      passwordHash,
      fullName: "Администратор",
      phone: "8(999)000-00-00",
      email: "admin@korochki.local",
      role: Role.ADMIN,
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
