'use client';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">Contact</p>
          <h1 className={`${styles.heroTitle} fadeIn`}>
            Interested? Let&apos;s talk!
          </h1>
          <p className={`${styles.heroSubtitle} fadeIn`}>
            Hate forms? Drop us a line at{' '}
            <a href="mailto:hello@ronasit.com">hello@ronasit.com</a>
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.formCol}>
              <form className={`${styles.form} fadeIn`} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="name">Your name</label>
                  <input
                    id="name"
                    type="text"
                    className={styles.input}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className={styles.input}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="message">Tell us about your project</label>
                  <textarea
                    id="message"
                    className={styles.textarea}
                    placeholder="Describe your project, goals, and timeline..."
                    required
                  />
                </div>

                <div className={styles.checkboxGroup}>
                  <input
                    id="nda"
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  <label htmlFor="nda" className={styles.checkboxLabel}>
                    I want to protect my data by signing an NDA
                  </label>
                </div>

                <div className={styles.submitRow}>
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className={`${styles.contactCol} fadeIn`}>
              <div className={styles.directContact}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Phone</span>
                  <a href="tel:+37253999974" className={styles.contactValue}>
                    +372 5399 9974
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:hello@ronasit.com" className={styles.contactValue}>
                    hello@ronasit.com
                  </a>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Messengers</span>
                  <div className={styles.messengerLinks}>
                    <a
                      href="https://t.me/ronasit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.messengerLink}
                    >
                      Telegram
                    </a>
                    <a
                      href="https://wa.me/37253999974"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.messengerLink}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Address</span>
                  <span className={styles.contactValue}>
                    Ahtri 12, Tallinn, Estonia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
