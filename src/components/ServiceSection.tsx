'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceSection.module.css';

interface SubService {
  title: string;
  description: string;
  imageDark?: string;
  imageLight?: string;
  image?: string;
}

interface ServiceSectionProps {
  number: string;
  title: string;
  description: string;
  services: SubService[];
  ctaLink: string;
  alt?: boolean;
  theme: string;
}

export default function ServiceSection({
  number, title, description, services, ctaLink, alt, theme
}: ServiceSectionProps) {
  return (
    <section className={alt ? styles.sectionAlt : styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>{number}</span>
          <div>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <p className={styles.sectionDesc}>{description}</p>
          </div>
        </div>
        <div className={styles.grid}>
          {services.map((s) => {
            const imgSrc = s.imageDark && s.imageLight
              ? (theme === 'dark' ? s.imageDark : s.imageLight)
              : s.image || s.imageDark || '';
            return (
              <div key={s.title} className={styles.card}>
                {imgSrc && (
                  <div className={styles.cardImage}>
                    <Image src={imgSrc} alt={s.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                )}
                <div className={styles.cardBody}>
                  <h5>{s.title}</h5>
                  <p>{s.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.cta}>
          <Link href={ctaLink} className="btn btn--secondary">View More</Link>
        </div>
      </div>
    </section>
  );
}
