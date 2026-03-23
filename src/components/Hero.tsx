import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1 className={styles.heading}>
          <Link href="/services#design" className={styles.underlined}>
            Design.
          </Link>{' '}
          <Link href="/services#development" className={styles.underlined}>
            Development.
          </Link>{' '}
          <Link href="/services#maintenance" className={styles.underlined}>
            Maintenance.
          </Link>
        </h1>
      </div>

      {/* Showreel: absolute bottom of viewport */}
      <div className={styles.showreelWrapper}>
        <div className={styles.showreel}>
          <div className={styles.showreelAction}>
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              className={styles.showreelText}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 70,70 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                />
              </defs>
              <text fill="var(--text)" fontSize="11.5" fontWeight="500" letterSpacing="3.5">
                <textPath href="#circlePath">
                  WATCH SHOWREEL &#x2022; WATCH SHOWREEL &#x2022;
                </textPath>
              </text>
            </svg>
            <div className={styles.showreelPreview}>
              <Image
                src="/img/home/showreel.webp"
                alt="Showreel"
                width={96}
                height={96}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
