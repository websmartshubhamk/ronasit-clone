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
        {/* CTA */}
        <div className={styles.ctaRow}>
          <h2 className={styles.ctaTitle}>Contacts</h2>
          <Link href="/contact" className="btn btn--primary">Get in Touch</Link>
        </div>

        {/* Service links */}
        <div className={styles.linksGrid}>
          <div className={styles.linkCol}>
            <h6>AI Services</h6>
            <ul>
              <li><Link href="/services">AI Agent Development</Link></li>
              <li><Link href="/services">AI Integration</Link></li>
              <li><Link href="/services">AI Consulting</Link></li>
              <li><Link href="/services">Custom MCP Servers</Link></li>
            </ul>
          </div>
          <div className={styles.linkCol}>
            <h6>Development</h6>
            <ul>
              <li><Link href="/services">Web Development</Link></li>
              <li><Link href="/services">Mobile Development</Link></li>
              <li><Link href="/services">React Native</Link></li>
              <li><Link href="/services">E-commerce</Link></li>
            </ul>
          </div>
          <div className={styles.linkCol}>
            <h6>Design</h6>
            <ul>
              <li><Link href="/services">UI/UX Design</Link></li>
              <li><Link href="/services">Web Design</Link></li>
              <li><Link href="/services">Branding</Link></li>
              <li><Link href="/services">Mobile App Design</Link></li>
            </ul>
          </div>
          <div className={styles.linkCol}>
            <h6>For Startups</h6>
            <ul>
              <li><Link href="/services">MVP Development</Link></li>
              <li><Link href="/services">CTO Services</Link></li>
              <li><Link href="/services">App Development</Link></li>
              <li><Link href="/services">Analytics</Link></li>
            </ul>
          </div>
          <div className={styles.linkCol}>
            <h6>Company</h6>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/cases">Cases</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className={styles.contactRow}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Phone</div>
              <a href="tel:+37253999974">+372 5399 9974</a>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Email</div>
              <a href="mailto:hello@ronasit.com">hello@ronasit.com</a>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactLabel}>Address</div>
              <span style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: 500 }}>
                Ahtri 12, Tallinn, Estonia
              </span>
            </div>
          </div>
          <div className={styles.social}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>&copy; 2026 Ronas IT - Software development company</span>
          <div className={styles.legal}>
            <Link href="/offer">Public Offer Agreement</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
