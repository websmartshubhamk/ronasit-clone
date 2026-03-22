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
        <div className={styles.row}>
          {/* Left: Number + Title */}
          <div className={styles.colLeft}>
            <h2 className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>{number}</span> {title}
            </h2>
          </div>

          {/* Right: Description + Button + Items */}
          <div className={styles.colRight}>
            <p className={styles.sectionDesc}>{description}</p>
            <div className={styles.btnWrap}>
              <Link href={ctaLink} className="btn btn--primary">View More</Link>
            </div>

            <div className={styles.servicesList}>
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
        </div>
      </div>
    </section>
  );
}
