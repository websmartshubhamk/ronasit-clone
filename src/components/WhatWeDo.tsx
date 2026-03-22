import Link from 'next/link';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2>What We Do</h2>
            <p>
              Ronas IT is a software development company that provides professional
              IT services for entrepreneurs and companies around the world.
            </p>
            <p>
              We have been designing, developing, and maintaining apps since 2007.
              Our goal is to create software solutions that match our clients&apos; needs
              and expectations.
            </p>
            <p>
              Ronas IT workflow is based on analytics and agile methodology that help
              us to provide high-quality IT services.
            </p>
            <div className={styles.cta}>
              <Link href="/services" className="btn btn--primary">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
