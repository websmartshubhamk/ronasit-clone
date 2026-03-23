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
  theme: string;
}

export default function ServiceSection({
  number, title, description, services, ctaLink, theme
}: ServiceSectionProps) {
  return (
    <section className={`${styles.section} fadeIn`}>
      <div className="container">
        <p className="headline">Services</p>
        <div className={styles.row}>
          {/* Left: Number + Title (sticky) */}
          <div className={styles.colLeft}>
            <div className={styles.stickyWrap}>
              <span className={styles.serviceNumber}>{number}</span>
              <h2 className={styles.serviceTitle}>{title}</h2>
            </div>
          </div>

          {/* Right: Description + Button + Items */}
          <div className={styles.colRight}>
            <p className={styles.serviceDesc}>{description}</p>
            <div className={styles.btnWrap}>
              <Link href={ctaLink} className="btn">View More</Link>
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
                    <h3 className={styles.serviceItemTitle}>{s.title}</h3>
                    <p className={styles.serviceItemDesc}>{s.description}</p>
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
