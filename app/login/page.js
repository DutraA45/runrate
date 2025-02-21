// app/login/page.js
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './page.module.css'; // Importe os estilos
import { useRouter } from 'next/navigation'; // Para redirecionar o usuário

const schema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Login bem-sucedido:', result.token);
                // Armazene o token no localStorage ou em um contexto
                localStorage.setItem('token', result.token);
                // Redirecione o usuário para a página inicial
                router.push('/');
            } else {
                const error = await response.json();
                console.error('Erro no login:', error.message);
            }
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Página de Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div>
                    <label>E-mail:</label>
                    <input
                        {...register('email')}
                        placeholder="Digite seu e-mail"
                        className={styles.input}
                    />
                    {errors.email && (
                        <span className={styles.error}>{errors.email.message}</span>
                    )}
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        {...register('password')}
                        type="password"
                        placeholder="Digite sua senha"
                        className={styles.input}
                    />
                    {errors.password && (
                        <span className={styles.error}>{errors.password.message}</span>
                    )}
                </div>
                <button type="submit" className={styles.button}>
                    Entrar
                </button>
            </form>
        </div>
    );
}