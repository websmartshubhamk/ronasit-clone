import Link from 'next/link';
import styles from './Footer.module.css';

const socials = [
  { label: 'IG', href: 'https://www.instagram.com/ronas_it' },
  { label: 'FB', href: 'https://www.facebook.com/RonasITSoftware/' },
  { label: 'DR', href: 'https://dribbble.com/ronasit' },
  { label: 'BE', href: 'https://www.behance.net/RonasIT' },
  { label: 'LI', href: 'https://www.linkedin.com/company/ronas-it/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h4>Ronas IT</h4>
            <p>
              Software development company providing professional IT services since 2007.
              Based in Tallinn, Estonia.
            </p>
            <div className={styles.social}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h6>Services</h6>
            <ul>
              <li><Link href="/services">AI Services</Link></li>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">Mobile Development</Link></li>
              <li><Link href="/services">UI/UX Design</Link></li>
              <li><Link href="/services">DevOps</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h6>Company</h6>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/cases">Cases</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/how-we-work">How We Work</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h6>Contact</h6>
            <ul>
              <li><a href="tel:+37253999974">+372 5399 9974</a></li>
              <li><a href="mailto:hello@ronasit.com">hello@ronasit.com</a></li>
              <li><a href="https://t.me/ronas_it" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><span style={{ color: 'var(--text-opaque)', fontSize: '0.875rem' }}>Ahtri 12, Tallinn, Estonia</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>&copy; 2026 Ronas IT - Software development company</span>
          <div className={styles.legal}>
            <Link href="/offer">Public Offer</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
