'use client';
import Image from 'next/image';
import styles from './CaseStudies.module.css';

const cases = [
  {
    title: 'Bank of America',
    description: "A redesign concept of the Bank of America's mobile app",
    dark: '/img/home/home-bankofamerica-dark.webp',
    light: '/img/home/home-bankofamerica-light.webp',
    link: 'https://www.behance.net/gallery/107105993/Bank-of-America-Online-Banking-App-Redesign-Concept',
  },
  {
    title: 'Facta',
    description: 'An employee engagement and training web app',
    dark: '/img/home/home-facta-dark.webp',
    light: '/img/home/home-facta-light.webp',
    link: 'https://www.behance.net/gallery/103472575/HR-Management-Software-UIUX-Website-for-Facta',
  },
  {
    title: 'Self-care',
    description: 'A self-care app that offers a personalized selection of guides and mentors',
    dark: '/img/home/home-selfcare-dark.webp',
    light: '/img/home/home-selfcare-light.webp',
    link: 'https://www.behance.net/gallery/102596433/Self-care-Mobile-App-Design-Concept-UI-UX',
  },
  {
    title: 'Food Delivery',
    description: 'An on-demand food delivery app',
    dark: '/img/home/home-delivery-dark.webp',
    light: '/img/home/home-delivery-light.webp',
    link: 'https://www.behance.net/gallery/104723621/Food-Delivery-Mobile-App-UIUX-Design',
  },
];

export default function CaseStudies({ theme }: { theme: string }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className="headline">Explore Our Success Stories</p>
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <div className={styles.title}>
              Explore Our Success Stories and Expertise in Software Development
            </div>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>
              As a software development company, we are not only releasing successful
              projects but also constantly sharing our experience.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {cases.map((c) => (
            <a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <Image
                  src={theme === 'dark' ? c.dark : c.light}
                  alt={c.title}
                  width={670}
                  height={420}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardTitle}>{c.title}</div>
              <p className={styles.cardDesc}>{c.description}</p>
              <span className={styles.viewMore}>View More</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
