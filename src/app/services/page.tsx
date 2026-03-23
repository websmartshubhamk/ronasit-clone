'use client';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

const designServices = [
  { title: 'UI/UX Design', desc: 'Research-driven interface design focused on usability, accessibility, and visual appeal for web and mobile platforms.' },
  { title: 'Web Design', desc: 'Custom website designs from landing pages to complex platforms, built with conversion and brand identity in mind.' },
  { title: 'Mobile App Design', desc: 'Native-feeling mobile interfaces that follow iOS and Android platform guidelines while maintaining brand consistency.' },
  { title: 'Branding & Identity', desc: 'Complete visual identity systems including logos, colour palettes, typography, and brand guidelines.' },
];

const devServices = [
  { title: 'Web Development', desc: 'Full-stack web applications using modern frameworks like React, Next.js, Laravel, and Node.js.' },
  { title: 'Mobile Development', desc: 'Native iOS and Android apps using Swift and Kotlin, or cross-platform solutions with React Native.' },
  { title: 'Backend & API', desc: 'Scalable server-side architecture, RESTful and GraphQL APIs, microservices, and database design.' },
  { title: 'Quality Assurance', desc: 'Comprehensive testing strategies including manual, automated, performance, and security testing.' },
  { title: 'DevOps & Cloud', desc: 'CI/CD pipelines, cloud infrastructure on AWS/GCP/Azure, containerisation, and monitoring.' },
  { title: 'AI & Machine Learning', desc: 'AI-powered features, chatbot development, ML model integration, and data analytics solutions.' },
];

const maintServices = [
  { title: 'Post-release Support', desc: 'Ongoing maintenance, bug fixes, performance monitoring, and feature updates after launch.' },
  { title: 'System Administration', desc: '24/7 server monitoring, security patching, backup management, and uptime assurance.' },
  { title: 'Legacy Modernisation', desc: 'Refactoring and migrating legacy systems to modern tech stacks without disrupting operations.' },
  { title: 'Performance Optimisation', desc: 'Code profiling, database tuning, caching strategies, and load balancing improvements.' },
];

const benefits = [
  { title: 'Flexible Terms', desc: 'Choose from fixed-price, time & materials, or dedicated team models tailored to your needs.' },
  { title: 'Full Spectrum', desc: 'End-to-end services from initial concept and design through development, testing, and deployment.' },
  { title: 'In-house Team', desc: 'All work is done by our in-house professionals. No outsourcing, no freelancers, full accountability.' },
  { title: 'Modern Practices', desc: 'Agile methodology, CI/CD, code reviews, automated testing, and industry best practices throughout.' },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">Services</p>
          <h1 className={`${styles.heroTitle} fadeIn`}>
            From PoC and MVP to enterprise-grade systems
          </h1>
          <p className={`${styles.heroSubtitle} fadeIn`}>
            We provide a full cycle of software development services, from initial research and prototyping
            to building complex enterprise solutions and long-term support.
          </p>
        </div>
      </section>

      <section id="design" className={styles.serviceSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionLeft} fadeIn`}>
              <h2 className={styles.sectionTitle}>Design</h2>
            </div>
            <div className={`${styles.sectionRight} fadeIn`}>
              <p className={styles.sectionDesc}>
                We create eye-catching and intuitive interface designs that provide users with an
                enjoyable experience across all devices and platforms.
              </p>
            </div>
          </div>
          <div className={styles.servicesList}>
            {designServices.map((s) => (
              <div key={s.title} className={`${styles.serviceCard} fadeIn`}>
                <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="development" className={styles.serviceSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionLeft} fadeIn`}>
              <h2 className={styles.sectionTitle}>Development</h2>
            </div>
            <div className={`${styles.sectionRight} fadeIn`}>
              <p className={styles.sectionDesc}>
                We build scalable, secure, and high-performance applications using industry-leading
                technologies and architectural best practices.
              </p>
            </div>
          </div>
          <div className={styles.servicesList}>
            {devServices.map((s) => (
              <div key={s.title} className={`${styles.serviceCard} fadeIn`}>
                <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="maintenance" className={styles.serviceSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={`${styles.sectionLeft} fadeIn`}>
              <h2 className={styles.sectionTitle}>Maintenance</h2>
            </div>
            <div className={`${styles.sectionRight} fadeIn`}>
              <p className={styles.sectionDesc}>
                Constant updating, modifying, and re-assessing of software keeps your products
                user-oriented, secure, and up-to-date.
              </p>
            </div>
          </div>
          <div className={styles.servicesList}>
            {maintServices.map((s) => (
              <div key={s.title} className={`${styles.serviceCard} fadeIn`}>
                <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className="container">
          <p className="headline">Why Choose Us</p>
          <div className={styles.benefitsGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={`${styles.benefitCard} fadeIn`}>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={`${styles.ctaTitle} fadeIn`}>Ready to start your project?</h2>
          <Link href="/contact" className="btn fadeIn">
            Get in Touch
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
