import Link from 'next/link';
import Image from 'next/image';
import styles from './LoginHeader.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Contêiner pai com tamanho proporcional à logo */}
          <div style={{ width: '150px', height: '30px', position: 'relative' }}>
            {/* Componente Image com layout="fill" e objectFit="contain" */}
            <Image
              src="/images/logo-run-rate-scaled.png"
              alt="Run Rate Logo"
              layout="fill" // Preenche o contêiner pai
              objectFit="contain" // Mantém a proporção da imagem
              priority // Prioriza o carregamento da imagem
              quality={75} // Reduz a qualidade para melhorar o desempenho
            />
          </div>
        </Link>
      </div>
    </header>
  );
}