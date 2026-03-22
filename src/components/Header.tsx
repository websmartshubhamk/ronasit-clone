'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <Image src="/img/logo.png" alt="Ronas IT" width={120} height={28} priority />
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
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link href="/contact" className={`btn btn--primary ${styles.ctaBtn}`}>
            Estimate Project
          </Link>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <Link href="/services" className={styles.navLink} onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="/design-projects" className={styles.navLink} onClick={() => setMenuOpen(false)}>Design Projects</Link>
        <Link href="/cases" className={styles.navLink} onClick={() => setMenuOpen(false)}>Cases</Link>
        <Link href="/pricing" className={styles.navLink} onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link href="/how-we-work" className={styles.navLink} onClick={() => setMenuOpen(false)}>How we work</Link>
        <Link href="/blog" className={styles.navLink} onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link href="/contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
          Estimate Project
        </Link>
      </div>
    </header>
  );
}
