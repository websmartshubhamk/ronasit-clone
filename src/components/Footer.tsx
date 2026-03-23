'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterProps {
  theme?: string;
  toggleTheme?: () => void;
}

const socials = [
  { label: 'IG', href: 'https://www.instagram.com/ronas_it' },
  { label: 'FB', href: 'https://www.facebook.com/RonasITSoftware/' },
  { label: 'DR', href: 'https://dribbble.com/ronasit' },
  { label: 'BE', href: 'https://www.behance.net/RonasIT' },
  { label: 'LI', href: 'https://www.linkedin.com/company/ronas-it/' },
];

const linkColumns = [
  {
    title: 'AI Services',
    links: [
      { label: 'AI Agent Development', href: '/services' },
      { label: 'AI Integration', href: '/services' },
      { label: 'AI Consulting', href: '/services' },
      { label: 'Custom MCP Servers', href: '/services' },
      { label: 'AI Chatbots', href: '/services' },
    ],
  },
  {
    title: 'Development',
    links: [
      { label: 'Web Development', href: '/services' },
      { label: 'Mobile Development', href: '/services' },
      { label: 'React Native', href: '/services' },
      { label: 'E-commerce', href: '/services' },
      { label: 'Enterprise Software', href: '/services' },
    ],
  },
  {
    title: 'Design',
    links: [
      { label: 'UI/UX Design', href: '/services' },
      { label: 'Web Design', href: '/services' },
      { label: 'Branding', href: '/services' },
      { label: 'Mobile App Design', href: '/services' },
      { label: 'Graphic Design', href: '/services' },
    ],
  },
  {
    title: 'For Startups',
    links: [
      { label: 'MVP Development', href: '/services' },
      { label: 'CTO Services', href: '/services' },
      { label: 'App Development', href: '/services' },
      { label: 'Design Services', href: '/services' },
      { label: 'Analytics', href: '/services' },
    ],
  },
  {
    title: 'DevOps',
    links: [
      { label: 'DevOps Services', href: '/services' },
      { label: 'Google Cloud', href: '/services' },
    ],
  },
  {
    title: 'How We Work',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Approach', href: '/how-we-work' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Expertise',
    links: [
      { label: 'Fintech', href: '/cases' },
      { label: 'Healthcare', href: '/cases' },
      { label: 'E-commerce', href: '/cases' },
      { label: 'Real Estate', href: '/cases' },
      { label: 'Education', href: '/cases' },
    ],
  },
  {
    title: 'Technologies',
    links: [
      { label: 'PHP / Laravel', href: '/services' },
      { label: 'React', href: '/services' },
      { label: 'React Native', href: '/services' },
      { label: 'Node.js', href: '/services' },
      { label: 'Swift / Kotlin', href: '/services' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { label: 'All Articles', href: '/blog' },
    ],
  },
];

export default function Footer({ theme, toggleTheme }: FooterProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  const toggleAccordion = (idx: number) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          {/* Get in Touch CTA */}
          <div
            ref={ctaRef}
            className={`${styles.getInTouch} ${ctaVisible ? styles.getInTouchVisible : ''}`}
          >
            <h2 className={styles.ctaTitle}>Get in Touch</h2>
            <Link href="/contact" className="btn">
              Estimate Project
            </Link>
          </div>

          {/* Multi-column link grid */}
          <div className={styles.linksGrid}>
            {linkColumns.map((col, idx) => (
              <div key={col.title} className={styles.linkCol}>
                <button
                  type="button"
                  className={styles.linkColHeader}
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={openAccordion === idx}
                >
                  <h6>{col.title}</h6>
                  <svg
                    className={`${styles.accordionIcon} ${openAccordion === idx ? styles.accordionIconOpen : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <polyline points="2 4 6 8 10 4" />
                  </svg>
                </button>
                <ul className={`${styles.linkList} ${openAccordion === idx ? styles.linkListOpen : ''}`}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact row */}
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
                <span className={styles.contactAddress}>Ahtri 12, Tallinn, Estonia</span>
              </div>
            </div>
            <div className={styles.contactRight}>
              {toggleTheme && (
                <button
                  className={styles.footerThemeToggle}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  type="button"
                >
                  {theme === 'dark' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                  <span className={styles.footerThemeLabel}>
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                  </span>
                </button>
              )}
              <div className={styles.social}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
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
      </div>
    </footer>
  );
}
