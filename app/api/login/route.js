// app/api/login/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Verifica se o corpo da requisição está vazio
    const body = await request.text();
    if (!body) {
      return NextResponse.json(
        { message: 'Corpo da requisição vazio' },
        { status: 400 }
      );
    }

    // Converte o corpo da requisição para JSON
    const { email, password } = JSON.parse(body);

    // Verifica se os campos obrigatórios estão presentes
    if (!email || !password) {
      return NextResponse.json(
        { message: 'E-mail e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Busca o usuário no banco de dados
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Verifica se o usuário existe e se a senha está correta
    if (user && (await bcrypt.compare(password, user.password))) {
      // Gera um token JWT (simulado)
      const token = 'fake-jwt-token';

      // Configura o cookie com as flags de segurança
      const response = NextResponse.json({ token }, { status: 200 });
      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Secure apenas em produção
        sameSite: 'strict',
        maxAge: 3600, // Expira em 1 hora
        path: '/', // Disponível em toda a aplicação
      });

      return response;
    }

    // Retorna erro se as credenciais forem inválidas
    return NextResponse.json(
      { message: 'Credenciais inválidas' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Erro no login:', error);
    return NextResponse.json(
      { message: 'Erro interno no servidor' },
      { status: 500 }
    );
  }
}