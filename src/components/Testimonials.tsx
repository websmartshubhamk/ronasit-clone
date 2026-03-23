'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Bob Glazebrook',
    role: 'Principal, Visual Engineering Inc.',
    rating: 5.0,
    avatar: '/img/avatar-1.webp',
    quote: 'Ronas IT demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They\u2019re very well thought out and have an excellent response to feedback.',
  },
  {
    name: 'Craig Barber',
    role: 'Founder, Logobly',
    rating: 5.0,
    avatar: '/img/avatar-2.webp',
    quote: 'Fantastic service. The guys went above and beyond. They also suggested improvements to my app which I really appreciated \u2014 as opposed to doing exactly what I asked, it resulted in a better product.',
  },
  {
    name: 'Rivget Raut',
    role: 'Founder, Machine E-Commerce Platform',
    rating: 5.0,
    avatar: '/img/avatar-3.webp',
    quote: 'A technically skilled team, Ronas IT goes the extra mile to deliver high-quality solutions. Their communication and professionalism are outstanding.',
  },
  {
    name: 'Adrian Lunga',
    role: 'Founder, 365daybookings',
    rating: 4.9,
    avatar: '/img/avatar-4.webp',
    quote: 'The quality of their work stands out the most. They\u2019re knowledgeable and provide useful feedback on how to improve the product.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className={`${styles.section} fadeIn`}>
      <div className="container">
        <p className="headline">Feedback</p>
        <p className={styles.sectionSubhead}>
          What clients think about our software development company:
        </p>
        <div className={styles.row}>
          {/* Left: 25% - tab navigation */}
          <div className={styles.colLeft}>
            <div className={styles.tabs}>
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
                  onClick={() => setActive(i)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: 75% - feedback content */}
          <div className={styles.colRight}>
            <div className={styles.feedbackItem}>
              <div className={styles.rating}>
                <span className={styles.ratingValue}>{t.rating}</span>
                <span className={styles.ratingSep} />
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className={styles.star}>&#9733;</span>
                  ))}
                </div>
              </div>
              <a
                href="https://clutch.co/profile/ronas-it#highlights"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quoteText}
              >
                {t.quote}
              </a>
              <div className={styles.authorMeta}>
                <div className={styles.authorAvatar}>
                  <Image src={t.avatar} alt={t.name} width={48} height={48} />
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
