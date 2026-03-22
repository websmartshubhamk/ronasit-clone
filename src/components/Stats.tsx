import styles from './Stats.module.css';

const platforms = [
  { name: 'Upwork', rating: 4.9, reviews: 1813 },
  { name: 'Clutch', rating: 4.9, reviews: 27 },
  { name: 'GoodFirms', rating: 4.9, reviews: 9 },
  { name: 'DesignRush', rating: 5.0, reviews: 13 },
];

const badges = [
  'Champion Fall 2023',
  'Global Fall 2023',
  'Honorable Mention 2024',
  'Google Cloud Partner',
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.topStats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>1870</div>
            <div className={styles.statLabel}>reviews across 5 platforms</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>Top 50</div>
            <div className={styles.statLabel}>app development companies</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4.9</div>
            <div className={styles.statLabel}>average rate</div>
          </div>
        </div>
        <div className={styles.platforms}>
          {platforms.map((p) => (
            <div key={p.name} className={styles.platform}>
              <span className={styles.platformName}>{p.name}</span>
              <span className={styles.platformRating}>
                ★ {p.rating} ({p.reviews} reviews)
              </span>
            </div>
          ))}
        </div>
        <div className={styles.badges}>
          {badges.map((b) => (
            <div key={b} className={styles.badge}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
