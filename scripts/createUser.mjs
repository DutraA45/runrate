// scripts/createUser.mjs
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const prisma = new PrismaClient();

async function createUser() {
  const hashedPassword = await bcrypt.hash('123456', 10); // Criptografa a senha

  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: hashedPassword,
    },
  });

  console.log('Usuário criado:', user);
}

createUser()
  .catch((error) => {
    console.error('Erro ao criar usuário:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });