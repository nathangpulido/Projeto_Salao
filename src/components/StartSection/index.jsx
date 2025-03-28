import React from 'react';
import styles from './style.module.css';
import image from '../../assets/start-image.webp';
import GradientLine from '../GradientLine';

export default function StartSection() {
  return (
    <section id="start" className={styles.section}>
      <img
        src={image}
        loading="lazy"
        className={styles.image}
        alt="Mulheres em um salão. Uma está atendendo com uma escova e um secador de cabelo na mão"
      />
      <div className={styles.text_content}>
        <h1 className={styles.title}>Saúde natural para a sua autoestima</h1>
        <p className={styles.paragraph}>
          Um salão exclusivo em São Paulo, especializado em tratamentos
          estéticos.
        </p>
        <a href="#contact" className={styles.ancor}>
          Agendar um horário
        </a>
      </div>
      <GradientLine />
    </section>
  );
}
