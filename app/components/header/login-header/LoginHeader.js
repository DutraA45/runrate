import Link from 'next/link';
import Image from 'next/image'; 
import styles from './LoginHeader.module.css';

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
    </header>
  );
}