'use client';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

const projects = [
  {
    title: 'Wellness Dashboard',
    desc: 'A clean, data-rich dashboard design for a health and wellness platform. Focused on clear data visualisation and calming colour palette.',
    tags: ['UI/UX', 'Dashboard', 'Healthcare'],
    colour: '#00b894',
  },
  {
    title: 'Fintech Mobile App',
    desc: 'A modern banking app interface with dark theme, featuring transaction management, budgeting tools, and investment tracking.',
    tags: ['Mobile Design', 'Fintech', 'Dark Theme'],
    colour: '#0984e3',
  },
  {
    title: 'E-learning Platform',
    desc: 'Engaging educational platform design with video player, progress tracking, interactive quizzes, and community features.',
    tags: ['Web Design', 'Education', 'UX Research'],
    colour: '#6c5ce7',
  },
  {
    title: 'Travel Booking Interface',
    desc: 'Immersive travel booking experience with rich imagery, smart search, and a streamlined checkout flow designed for conversion.',
    tags: ['UI/UX', 'Travel', 'Web Design'],
    colour: '#e17055',
  },
  {
    title: 'SaaS Admin Panel',
    desc: 'Complex admin panel design for a B2B SaaS product with data tables, charts, user management, and role-based permissions.',
    tags: ['Dashboard', 'SaaS', 'Enterprise'],
    colour: '#636e72',
  },
  {
    title: 'Food Delivery App',
    desc: 'Bright, appetite-inspiring mobile app design with intuitive navigation, real-time order tracking, and restaurant discovery.',
    tags: ['Mobile Design', 'Food', 'Branding'],
    colour: '#e84393',
  },
  {
    title: 'Real Estate Website',
    desc: 'Premium property listing website with immersive property galleries, map-based search, and virtual tour integration.',
    tags: ['Web Design', 'Real Estate', 'UI/UX'],
    colour: '#fdcb6e',
  },
  {
    title: 'Fitness Tracker',
    desc: 'Energetic fitness app design featuring workout logs, progress charts, social challenges, and wearable device integration.',
    tags: ['Mobile Design', 'Health', 'Wearables'],
    colour: '#1a73e8',
  },
];

export default function DesignProjectsPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">Design Projects</p>
          <h1 className={`${styles.heroTitle} fadeIn`}>
            Crafted with care and precision
          </h1>
          <p className={`${styles.heroSubtitle} fadeIn`}>
            A curated collection of our design work across industries. Each project reflects our
            commitment to creating interfaces that are both beautiful and functional.
          </p>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <div key={p.title} className={`${styles.projectCard} fadeIn`}>
                <div
                  className={styles.projectImage}
                  style={{ backgroundColor: p.colour }}
                >
                  <div className={styles.projectIcon} />
                </div>
                <div className={styles.projectBody}>
                  <h3 className={styles.projectTitle}>{p.title}</h3>
                  <p className={styles.projectDesc}>{p.desc}</p>
                  <div className={styles.projectTags}>
                    {p.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
