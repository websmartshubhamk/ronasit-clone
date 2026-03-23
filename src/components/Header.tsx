'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const megaMenuData = {
  'AI Services': [
    { label: 'Custom MCP Servers', href: '/services' },
    { label: 'AI Agent Development', href: '/services' },
    { label: 'AI Integration', href: '/services' },
    { label: 'AI Marketing', href: '/services' },
    { label: 'AI Business', href: '/services' },
    { label: 'AI Apps', href: '/services' },
    { label: 'AI Consulting', href: '/services' },
    { label: 'AI Chatbots', href: '/services' },
    { label: 'AI Software', href: '/services' },
    { label: 'Vibe Coding Rescue', href: '/services' },
  ],
  'Development': [
    { label: 'Custom Software', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'React Native', href: '/services' },
    { label: 'Web Apps', href: '/services' },
    { label: 'Mobile Apps', href: '/services' },
    { label: 'iOS Development', href: '/services' },
    { label: 'Android Development', href: '/services' },
    { label: 'E-commerce', href: '/services' },
    { label: 'Frontend Development', href: '/services' },
    { label: 'Backend Development', href: '/services' },
    { label: 'Enterprise Software', href: '/services' },
    { label: 'Dedicated Teams', href: '/services' },
  ],
  'Design': [
    { label: 'Graphic Design', href: '/services' },
    { label: 'Logos', href: '/services' },
    { label: 'Branding', href: '/services' },
    { label: 'Illustration', href: '/services' },
    { label: 'Web Design', href: '/services' },
    { label: 'Creative Landing', href: '/services' },
    { label: 'Concept Design', href: '/services' },
    { label: 'Desktop Design', href: '/services' },
    { label: 'Mobile App Design', href: '/services' },
    { label: 'Tablet Design', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
  ],
  'For Startups': [
    { label: 'MVP Development', href: '/services' },
    { label: 'Design Services', href: '/services' },
    { label: 'App Development', href: '/services' },
    { label: 'CTO Services', href: '/services' },
    { label: 'Software Development', href: '/services' },
    { label: 'Analytics', href: '/services' },
  ],
  'DevOps': [
    { label: 'DevOps Services', href: '/services' },
    { label: 'Fast Start with Google Cloud', href: '/services' },
  ],
};

const howWeWorkLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Approach', href: '/how-we-work' },
  { label: 'Contact', href: '/contact' },
  { label: 'Price', href: '/pricing' },
];

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [howDropdownOpen, setHowDropdownOpen] = useState(false);

  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const howDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const howDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setMegaMenuOpen(false);
      }
      if (howDropdownRef.current && !howDropdownRef.current.contains(e.target as Node)) {
        setHowDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleMegaEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };

  const handleMegaLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 200);
  };

  const handleHowEnter = () => {
    if (howDropdownTimeout.current) clearTimeout(howDropdownTimeout.current);
    setHowDropdownOpen(true);
  };

  const handleHowLeave = () => {
    howDropdownTimeout.current = setTimeout(() => setHowDropdownOpen(false), 200);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <Image src="/img/logo.png" alt="Ronas IT" width={40} height={40} priority className={styles.logoIcon} />
          <span className={styles.logoText}>Ronas IT</span>
        </Link>

        <nav className={styles.nav}>
          {/* Services with mega menu */}
          <div
            ref={megaMenuRef}
            className={styles.navItemWithDropdown}
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <Link href="/services" className={`${styles.navLink} ${megaMenuOpen ? styles.navLinkActive : ''}`}>
              Services
              <svg className={styles.navChevron} width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="2 4 5 7 8 4" />
              </svg>
            </Link>
            <div className={`${styles.megaMenu} ${megaMenuOpen ? styles.megaMenuOpen : ''}`}>
              <div className={styles.megaMenuInner}>
                {Object.entries(megaMenuData).map(([group, links]) => (
                  <div key={group} className={styles.megaMenuCol}>
                    <h6 className={styles.megaMenuHeading}>{group}</h6>
                    <ul className={styles.megaMenuList}>
                      {links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} className={styles.megaMenuLink} onClick={() => setMegaMenuOpen(false)}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/design-projects" className={styles.navLink}>Design Projects</Link>
          <Link href="/cases" className={styles.navLink}>Cases</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>

          {/* How we work with simple dropdown */}
          <div
            ref={howDropdownRef}
            className={styles.navItemWithDropdown}
            onMouseEnter={handleHowEnter}
            onMouseLeave={handleHowLeave}
          >
            <Link href="/how-we-work" className={`${styles.navLink} ${howDropdownOpen ? styles.navLinkActive : ''}`}>
              How we work
              <svg className={styles.navChevron} width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="2 4 5 7 8 4" />
              </svg>
            </Link>
            <div className={`${styles.simpleDropdown} ${howDropdownOpen ? styles.simpleDropdownOpen : ''}`}>
              {howWeWorkLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={styles.simpleDropdownLink}
                  onClick={() => setHowDropdownOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

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
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>About Us</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</Link>
          <Link href="/blog" className={styles.mobileNavLink} onClick={closeMenu}>Blog</Link>
        </nav>
        <Link href="/contact" className={styles.mobileCtaBtn} onClick={closeMenu}>
          Estimate Project
        </Link>
      </div>
    </header>
  );
}
