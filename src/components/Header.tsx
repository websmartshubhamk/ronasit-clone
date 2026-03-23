'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <Image src="/img/logo.png" alt="Ronas IT" width={40} height={40} priority className={styles.logoIcon} />
          <span className={styles.logoText}>Ronas IT</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/design-projects" className={styles.navLink}>Design Projects</Link>
          <Link href="/cases" className={styles.navLink}>Cases</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/how-we-work" className={styles.navLink}>How we work</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <Link href="/contact" className={styles.ctaBtn}>
            Estimate Project
          </Link>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            type="button"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href="/services" className={styles.mobileNavLink} onClick={closeMenu}>Services</Link>
          <Link href="/design-projects" className={styles.mobileNavLink} onClick={closeMenu}>Design Projects</Link>
          <Link href="/cases" className={styles.mobileNavLink} onClick={closeMenu}>Cases</Link>
          <Link href="/pricing" className={styles.mobileNavLink} onClick={closeMenu}>Pricing</Link>
          <Link href="/how-we-work" className={styles.mobileNavLink} onClick={closeMenu}>How we work</Link>
          <Link href="/blog" className={styles.mobileNavLink} onClick={closeMenu}>Blog</Link>
        </nav>
        <Link href="/contact" className={styles.mobileCtaBtn} onClick={closeMenu}>
          Estimate Project
        </Link>
      </div>
    </header>
  );
}
