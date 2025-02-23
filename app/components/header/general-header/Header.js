// app/components/Header.js
import Link from 'next/link';
import Image from 'next/image'; 
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Componente Image para carregar a logo */}
          <Image
            src="/images/logo.png" 
            alt="Run Rate Logo" 
            width={150} 
            height={50}           
          />
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
        <Link href="/login">
          <button className={styles.buttonEntrar}>Entrar</button>
        </Link>
        <Link href="/cadastro">
          <button className={styles.buttonCadastrar}>Cadastrar</button>
        </Link>
      </div>
    </header>
  );
}