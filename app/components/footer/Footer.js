import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

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
            <FaFacebookF size={24} color="#000" />
          </Link>
          <Link href="https://twitter.com">            
            <FaXTwitter size={24} color="#000" />
          </Link>
          <Link href="https://instagram.com">            
            <FaInstagram size={24} color="#000" />
          </Link>
        </div>

        <div className={styles.logo}>
          {/* Logo com tamanho fixo e proporção mantida */}
          <div style={{ width: '100px', height: '40px', position: 'relative' }}>
            <Image
              src="/images/logo-run-rate-scaled.png"
              alt="RunRate Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>

        <div className={styles.links}>
          <Link href="/termos-de-uso">Termos de Uso</Link>
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}