import React from 'react';
import aboutImage from '../../assets/about-image.webp';
import GradientLine from '../GradientLine';
import styles from './style.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <img
        src={aboutImage}
        loading="lazy"
        className={styles.image}
        alt="três mulheres sorrindo e segurando ferramentas de salão"
      />
      <div className={styles.text_content}>
        <h1 className={styles.title}>Sobre nós</h1>
        <p className={styles.paragraph}>
        Bem-vindos, aqui você encontra um espaço dedicado ao cuidado e à beleza de cada pessoa que entra por nossa porta. Nosso salão oferece uma experiência única, onde a estética se encontra com o bem-estar, e cada cliente é tratado com carinho, respeito e atenção personalizada..
        </p>
      </div>
      <GradientLine />
    </section>
  );
}
