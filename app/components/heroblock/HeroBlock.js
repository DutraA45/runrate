import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroBlock.module.css';

export default function HeroBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.heroBlock}>

        {/* Bloco de Texto e Botões */}
        <div className={styles.content}>
          <h1 className={styles.title}>Encontre o <b>equipamento perfeito</b> para suas corridas!</h1>
          <p className={styles.subtitle}>
            Descubra avaliações de tênis, roupas e acessórios para corrida de asfalto e trail. Deixe
            sua opinião e ajude outros corredores a fazerem a melhor escolha.
          </p>
          <div className={styles.buttons}>
            <Link href="/avaliar-produto">
              <button className={styles.button}>Avaliar Produto</button>
            </Link>
            <Link href="/minhas-avaliacoes">
              <button className={styles.button}>Minhas Avaliações</button>
            </Link>
          </div>
        </div>

        {/* Bloco da Imagem */}
        <div className={styles.image}>
          <Image
            src="/images/hero-character.jpg"
            alt="Personagem correndo"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}