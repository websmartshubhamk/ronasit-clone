'use client';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

const stats = [
  { number: '50+', label: 'Developers in the team' },
  { number: '19+', label: 'Years of experience' },
  { number: '1,500+', label: 'Completed projects' },
  { number: '60%', label: 'Repeat customers' },
];

const awards = [
  {
    name: 'Awwwards',
    desc: 'Recognised for outstanding web design and development, showcasing our commitment to digital excellence and innovation.',
  },
  {
    name: 'Behance',
    desc: 'Featured projects highlighting our creative approach to UI/UX design and visual storytelling across platforms.',
  },
  {
    name: 'GoodFirms',
    desc: 'Top-rated software development company with consistently high reviews from clients worldwide.',
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">About</p>
          <h1 className={`${styles.heroTitle} fadeIn`}>
            We design and develop web and mobile apps for startups, small and medium businesses
          </h1>
          <p className={`${styles.heroSubtitle} fadeIn`}>
            Since 2007, we have been helping businesses bring their ideas to life through thoughtful design and reliable engineering.
          </p>
        </div>
      </section>

      <section className={styles.goalSection}>
        <div className="container">
          <div className={styles.goalGrid}>
            <div className={`${styles.goalLeft} fadeIn`}>
              <h2 className={styles.goalTitle}>Our Goal</h2>
            </div>
            <div className={`${styles.goalRight} fadeIn`}>
              <div className={styles.goalText}>
                <p>
                  Our goal is to be a trusted technology partner for our clients. We believe in building
                  long-term relationships based on transparency, quality, and mutual respect.
                </p>
                <p>
                  Every project we take on is treated as our own. We invest our expertise and passion
                  into creating digital products that solve real problems and deliver measurable results.
                </p>
                <p>
                  We continuously invest in our team&apos;s professional growth and stay at the forefront
                  of technology to deliver cutting-edge solutions that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <p className="headline">Numbers</p>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={`${styles.statCard} fadeIn`}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.awardsSection}>
        <div className="container">
          <p className="headline">Publications &amp; Awards</p>
          <div className={styles.awardsGrid}>
            {awards.map((award) => (
              <div key={award.name} className={`${styles.awardCard} fadeIn`}>
                <h3 className={styles.awardName}>{award.name}</h3>
                <p className={styles.awardDesc}>{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
