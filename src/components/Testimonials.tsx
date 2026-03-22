import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Bob Glazebrook',
    role: 'Principal, Visual Engineering Inc.',
    rating: 5.0,
    avatar: '/img/home/avatar-1.webp',
    quote: 'Ronas IT demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity.',
  },
  {
    name: 'Craig Barber',
    role: 'Founder, Logobly',
    rating: 5.0,
    avatar: '/img/home/avatar-2.webp',
    quote: 'Fantastic service. The guys went above and beyond. They also suggested improvements to my app which I really appreciated.',
  },
  {
    name: 'Rivget Raut',
    role: 'Founder, Machine E-Commerce Platform',
    rating: 5.0,
    avatar: '/img/home/avatar-3.webp',
    quote: 'A technically skilled team, Ronas IT goes the extra mile to deliver high-quality solutions.',
  },
  {
    name: 'Adrian Lunga',
    role: 'Founder, 365daybookings',
    rating: 4.9,
    avatar: '/img/home/avatar-4.webp',
    quote: "The quality of their work stands out the most. They're knowledgeable and provide useful feedback.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.headline}>Testimonials</p>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
                <span className={styles.rating}>{t.rating}/5</span>
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <Image src={t.avatar} alt={t.name} width={52} height={52} />
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
