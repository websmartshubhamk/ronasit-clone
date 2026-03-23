'use client';
import Image from 'next/image';
import styles from './Stats.module.css';
import { useCountUp } from '@/hooks/useCountUp';

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

function CountUpStat({ end, suffix, label }: { end: number; suffix?: string; label: string }) {
  const { ref, display } = useCountUp({ end, duration: 2000, decimals: end % 1 !== 0 ? 1 : 0 });

  return (
    <div className={styles.stat}>
      <div className={styles.statNumber} ref={ref}>
        {display}{suffix || ''}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function Stats({ theme }: { theme: string }) {
  return (
    <section className={`${styles.section} fadeIn`}>
      <div className="container">
        <p className="headline">Numbers</p>

        <div className={styles.topStats}>
          <CountUpStat end={1870} label="reviews across 5 platforms" />
          <div className={styles.stat}>
            <div className={styles.statNumber}>Top 50</div>
            <div className={styles.statLabel}>app development companies on Upwork</div>
          </div>
          <CountUpStat end={4.9} suffix=" / 5" label="average rate" />
        </div>

        <div className={styles.divider} />

        <div className={styles.platforms}>
          {platforms.map((p) => (
            <div key={p.name} className={styles.platform}>
              <span className={styles.platformName}>{p.name}</span>
              <span className={styles.platformRating}>
                <span className={styles.starSmall}>&#9733;</span> {p.rating} ({p.reviews} reviews)
              </span>
            </div>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.badgesRow}>
          <div className={styles.upworkBadge}>
            <Image
              src={theme === 'dark' ? '/img/upwork.svg' : '/img/upwork-light.svg'}
              alt="Upwork"
              width={80}
              height={24}
            />
          </div>
          <div className={styles.designBadge}>
            <Image
              src="/img/ui-design-agency.svg"
              alt="UI Design Agency"
              width={80}
              height={24}
            />
          </div>
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
