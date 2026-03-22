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
  href?: string;
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
          <p className={styles.sectionLabel}>{number} {title}</p>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <div className={styles.sectionTitle}>{description}</div>
            </div>
            <div className={styles.headerRight}>
              <div className={styles.cta}>
                <Link href={ctaLink} className="btn btn--primary">View More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((s) => {
            const imgSrc = s.imageDark && s.imageLight
              ? (theme === 'dark' ? s.imageDark : s.imageLight)
              : s.image || s.imageDark || '';
            return (
              <div key={s.title} className={styles.serviceItem}>
                {imgSrc && (
                  <div className={styles.serviceImage}>
                    <Image
                      src={imgSrc}
                      alt={s.title}
                      width={670}
                      height={732}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
