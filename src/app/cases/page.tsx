'use client';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

const cases = [
  {
    title: 'Docky',
    desc: 'A comprehensive travel platform that helps users discover destinations, plan itineraries, and book experiences seamlessly across devices.',
    tags: ['Travel', 'Mobile App', 'React Native'],
    colour: '#1a73e8',
    initial: 'D',
  },
  {
    title: 'Mind Easy',
    desc: 'A mental health and meditation app providing guided sessions, mood tracking, and personalised wellness programmes for everyday users.',
    tags: ['Healthcare', 'iOS', 'Android'],
    colour: '#6c5ce7',
    initial: 'M',
  },
  {
    title: 'Lainappi',
    desc: 'A fintech lending platform connecting borrowers with lenders, featuring automated credit scoring and seamless loan management.',
    tags: ['Fintech', 'Web App', 'API'],
    colour: '#00b894',
    initial: 'L',
  },
  {
    title: 'ShopFlow',
    desc: 'A modern e-commerce platform with AI-powered product recommendations, real-time inventory management, and multi-channel selling capabilities.',
    tags: ['E-commerce', 'Web App', 'AI'],
    colour: '#e17055',
    initial: 'S',
  },
  {
    title: 'EduSync',
    desc: 'An online education platform offering live classes, interactive assessments, and progress tracking for students and educators alike.',
    tags: ['Education', 'Web App', 'Video'],
    colour: '#fdcb6e',
    initial: 'E',
  },
  {
    title: 'TrackLine',
    desc: 'A logistics management system with real-time fleet tracking, route optimisation, and automated delivery notifications for enterprise clients.',
    tags: ['Logistics', 'Enterprise', 'IoT'],
    colour: '#0984e3',
    initial: 'T',
  },
  {
    title: 'FitPulse',
    desc: 'A fitness and wellness app combining workout tracking, nutrition planning, and community challenges to keep users motivated and healthy.',
    tags: ['Health', 'Mobile App', 'Wearables'],
    colour: '#e84393',
    initial: 'F',
  },
  {
    title: 'PropView',
    desc: 'A real estate platform with virtual property tours, smart search filters, and integrated mortgage calculators for buyers and agents.',
    tags: ['Real Estate', 'Web App', 'VR'],
    colour: '#636e72',
    initial: 'P',
  },
];

export default function CasesPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">Cases</p>
          <h1 className={`${styles.heroTitle} fadeIn`}>
            Our work speaks for itself
          </h1>
          <p className={`${styles.heroSubtitle} fadeIn`}>
            Explore a selection of projects we have delivered across industries.
            Each case represents a unique challenge solved through design and engineering.
          </p>
        </div>
      </section>

      <section className={styles.casesSection}>
        <div className="container">
          <div className={styles.casesGrid}>
            {cases.map((c) => (
              <div key={c.title} className={`${styles.caseCard} fadeIn`}>
                <div
                  className={styles.caseImage}
                  style={{ backgroundColor: c.colour }}
                >
                  {c.initial}
                </div>
                <div className={styles.caseBody}>
                  <h3 className={styles.caseTitle}>{c.title}</h3>
                  <p className={styles.caseDesc}>{c.desc}</p>
                  <div className={styles.caseTags}>
                    {c.tags.map((tag) => (
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
