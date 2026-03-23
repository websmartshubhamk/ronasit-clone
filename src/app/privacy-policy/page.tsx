'use client';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">Legal</p>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.legalText}>
            <h2>1. Introduction</h2>
            <p>
              Ronas IT OU (&quot;we&quot;, &quot;our&quot;, or &quot;the Company&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website ronasit.com or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and job title</li>
              <li>Project details and requirements submitted through our contact forms</li>
              <li>Communication records between you and our team</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To respond to your enquiries and provide requested services</li>
              <li>To communicate about projects, proposals, and updates</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To send occasional marketing communications (with your consent)</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share your data with trusted
              third-party service providers who assist us in operating our website and conducting
              our business, subject to confidentiality agreements.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfil the purposes
              outlined in this policy, unless a longer retention period is required by law.
            </p>

            <h2>6. Your Rights (GDPR)</h2>
            <p>Under the General Data Protection Regulation, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Restrict processing of your personal data</li>
              <li>Data portability</li>
              <li>Object to processing of your personal data</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at hello@ronasit.com.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small text
              files stored on your device. You can control cookie preferences through your browser
              settings.
            </p>

            <h2>8. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:<br />
              Ronas IT OU<br />
              Address: Ahtri 12, 10151 Tallinn, Estonia<br />
              Email: hello@ronasit.com<br />
              Phone: +372 5399 9974
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
