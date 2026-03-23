'use client';
import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

const STORAGE_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const preference = localStorage.getItem(STORAGE_KEY);
    if (!preference) {
      // Delay showing so it slides up after page loads
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'all');
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, 'necessary');
    setShow(false);
  };

  // Don't render on server or if already decided
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const preference = localStorage.getItem(STORAGE_KEY);
  if (preference) return null;

  return (
    <div
      className={`${styles.banner} ${show ? styles.visible : ''}`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.title}>We use cookies to improve your experience</p>
          <p className={styles.text}>
            We use cookies to analyse site traffic and personalise content. You can choose which categories to allow.
          </p>
          <div className={styles.categories}>
            <span className={styles.category}>
              <span className={styles.categoryDot} />
              Necessary (always active)
            </span>
            <span className={styles.category}>
              <span className={styles.categoryDotGrey} />
              Analytics
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.rejectBtn}
            onClick={handleReject}
          >
            Reject Analytics
          </button>
          <button
            type="button"
            className={styles.acceptBtn}
            onClick={handleAccept}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
