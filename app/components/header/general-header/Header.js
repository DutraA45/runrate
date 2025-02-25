'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useAuth } from '../../../context/AuthContext';

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Contêiner pai com tamanho proporcional à logo */}
          <div style={{ width: '150px', height: '30px', position: 'relative' }}>
            {/* Componente Image com fill={true} e style={{ objectFit: 'contain' }} */}
            <Image
              src="/images/logo-run-rate-scaled.png"
              alt="Run Rate Logo"
              fill={true} // Preenche o contêiner pai
              style={{ objectFit: 'contain' }} // Mantém a proporção da imagem
              priority // Prioriza o carregamento da imagem
              quality={75} // Reduz a qualidade para melhorar o desempenho
              sizes="(max-width: 768px) 100vw, 150px"
            />
          </div>
        </Link>
      </div>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Buscar tênis..."
          className={styles.searchInput}
        />
      </div>

      <div className={styles.buttons}>
        {isAuthenticated ? (
          <div className={styles.userInfo}>
            <span>{user?.name}</span> {/* Exibe o nome do usuário */}
            <button onClick={logout} className={styles.buttonLogout}>
              Sair
            </button>
          </div>
        ) : (
          <>
            <Link href="/login">
              <button className={styles.buttonEntrar}>Entrar</button>
            </Link>
            <Link href="/cadastro">
              <button className={styles.buttonCadastrar}>Cadastrar</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}