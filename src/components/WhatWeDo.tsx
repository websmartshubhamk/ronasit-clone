import Link from 'next/link';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo() {
  return (
    <section className={`${styles.section} fadeIn`}>
      <div className="container">
        <p className="headline">What We Do</p>
        <div className={styles.row}>
          <div className={styles.colLeft}>
            <p className={styles.title}>
              Ronas IT is a software development company that provides professional
              IT services for entrepreneurs and companies around the world.
            </p>
          </div>
          <div className={styles.colRight}>
            <p className={styles.body}>
              We have been designing, developing, and maintaining apps since 2007.
            </p>
            <p className={styles.body}>
              Our goal is to create software solutions that match our clients&apos; needs
              and expectations. Ronas IT workflow is based on analytics and agile
              methodology that help us to provide high-quality IT services to small
              businesses and startups.
            </p>
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <Link href="/services" className="btn">View More</Link>
        </div>
      </div>
    </section>
  );
}
