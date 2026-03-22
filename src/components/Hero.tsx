import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>
        <span>Design.</span> Development. Maintenance.
      </h1>
      <div className={styles.showreel}>
        <Image
          src="/img/home/showreel.webp"
          alt="Showreel"
          fill
          className={styles.showreelImage}
          priority
        />
        <div className={styles.playBtn} />
      </div>
    </section>
  );
}
