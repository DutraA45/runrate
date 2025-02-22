// app/components/Header.js
import Link from 'next/link';
import Image from 'next/image'; // Importe o componente Image do Next.js
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Use o componente Image para carregar a logo */}
          <Image
            src="/images/logo.png" // Caminho da imagem
            alt="Run Rate Logo" // Texto alternativo
            width={150} // Largura da imagem
            height={50} // Altura da imagem            
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