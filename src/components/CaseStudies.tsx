'use client';
import Image from 'next/image';
import styles from './CaseStudies.module.css';

const cases = [
  {
    title: 'Bank of America',
    description: "A redesign concept of the Bank of America's mobile app",
    tags: ['mobile', 'design'],
    dark: '/img/home/home-bankofamerica-dark.webp',
    light: '/img/home/home-bankofamerica-light.webp',
    link: 'https://www.behance.net/gallery/107105993/Bank-of-America-Online-Banking-App-Redesign-Concept',
  },
  {
    title: 'Facta',
    description: 'An employee engagement and training web app',
    tags: ['web', 'design', 'development'],
    dark: '/img/home/home-facta-dark.webp',
    light: '/img/home/home-facta-light.webp',
    link: 'https://www.behance.net/gallery/103472575/HR-Management-Software-UIUX-Website-for-Facta',
  },
  {
    title: 'Self-care',
    description: 'A self-care app that offers a personalized selection of guides and mentors',
    tags: ['mobile', 'design'],
    dark: '/img/home/home-selfcare-dark.webp',
    light: '/img/home/home-selfcare-light.webp',
    link: 'https://www.behance.net/gallery/102596433/Self-care-Mobile-App-Design-Concept-UI-UX',
  },
  {
    title: 'Food Delivery',
    description: 'An on-demand food delivery app',
    tags: ['mobile', 'design'],
    dark: '/img/home/home-delivery-dark.webp',
    light: '/img/home/home-delivery-light.webp',
    link: 'https://www.behance.net/gallery/104723621/Food-Delivery-Mobile-App-UIUX-Design',
  },
];

export default function CaseStudies({ theme }: { theme: string }) {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div className="container">
          <div className={styles.headerRow}>
            <div className={styles.headerCol}>
              <h2>Explore Our Success Stories and Expertise in Software Development</h2>
              <p>
                As a software development company, we are not only releasing successful
                projects but also constantly sharing our experience. Take a look at some
                projects that we have implemented.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Individual project sections */}
      {cases.map((c, i) => (
        <div
          key={c.title}
          className={`${styles.project} ${i % 2 === 1 ? styles.projectEven : ''}`}
        >
          <div className={styles.projectDetails}>
            <div className="container">
              <div className={styles.projectRow}>
                <div className={styles.projectText}>
                  <div className={styles.projectLabel}>{c.title}</div>
                  <h4 className={styles.projectTitle}>{c.description}</h4>
                  <div className={styles.projectTags}>
                    {c.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    View More
                  </a>
                </div>
                <div className={styles.projectImage}>
                  <Image
                    src={theme === 'dark' ? c.dark : c.light}
                    alt={c.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
