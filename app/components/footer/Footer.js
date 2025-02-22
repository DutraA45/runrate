import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Primeiro Bloco: 3 Colunas */}
      <div className={styles.topFooter}>
        <div className={styles.column}>
          <h3>Sobre</h3>
          <ul>
            <li>
              <Link href="/sobre">Quem Somos</Link>
            </li>
            <li>
              <Link href="/carreira">Carreira</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contato</h3>
          <ul>
            <li>
              <Link href="/suporte">Suporte</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contato">Fale Conosco</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Recursos</h3>
          <ul>
            <li>
              <Link href="/guias">Guias</Link>
            </li>
            <li>
              <Link href="/tutoriais">Tutoriais</Link>
            </li>
            <li>
              <Link href="/comunidade">Comunidade</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Segundo Bloco: 3 Colunas */}
      <div className={styles.bottomFooter}>
        <div className={styles.social}>
          <Link href="https://facebook.com">
            <Image
              src="/images/facebook-icon.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://twitter.com">
            <Image
              src="/images/x-twitter-icon.svg"
              alt="Twitter"
              width={24}
              height={24}
            />
          </Link>
          <Link href="https://instagram.com">
            <Image
              src="/images/instagram-icon.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
        </div>

        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="RunRate Logo"
            width={100}
            height={40}
          />
        </div>

        <div className={styles.links}>
          <Link href="/termos-de-uso">Termos de Uso</Link>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}