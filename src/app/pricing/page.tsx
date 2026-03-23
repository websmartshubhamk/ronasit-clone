'use client';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

interface PricingCard {
  title: string;
  price: string;
  timeline: string;
  features: string[];
}

interface PricingCategory {
  id: string;
  label: string;
  cards: PricingCard[];
}

const categories: PricingCategory[] = [
  {
    id: 'mobile',
    label: 'Mobile',
    cards: [
      { title: 'Native Mobile App', price: '$25,000+', timeline: '3-6 months', features: ['iOS or Android', 'Custom UI/UX design', 'API integration', 'App Store submission'] },
      { title: 'Cross-platform App', price: '$30,000+', timeline: '3-5 months', features: ['React Native / Flutter', 'Single codebase for iOS & Android', 'Native performance', 'Push notifications'] },
      { title: 'Mobile MVP', price: '$15,000+', timeline: '6-10 weeks', features: ['Core feature set', 'Essential screens', 'Backend integration', 'Launch-ready'] },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    cards: [
      { title: 'Landing Page', price: '$2,000+', timeline: '1-2 weeks', features: ['Responsive design', 'SEO optimised', 'Contact form', 'Analytics setup'] },
      { title: 'Corporate Website', price: '$5,000+', timeline: '2-4 weeks', features: ['Multi-page design', 'CMS integration', 'Blog section', 'SEO & performance'] },
      { title: 'Basic Web Application', price: '$30,000+', timeline: '2-4 months', features: ['User authentication', 'Dashboard & admin panel', 'Database design', 'API development'] },
      { title: 'Advanced Web Application', price: '$60,000+', timeline: '4-8 months', features: ['Complex business logic', 'Third-party integrations', 'Real-time features', 'Scalable architecture'] },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    cards: [
      { title: 'UI/UX Design', price: '$50/hr', timeline: 'Ongoing', features: ['User research', 'Wireframing & prototyping', 'Visual design', 'Usability testing'] },
      { title: 'Mobile App Design', price: '$8,000+', timeline: '3-6 weeks', features: ['iOS & Android guidelines', 'Interactive prototype', 'Design system', 'Developer handoff'] },
      { title: 'Web Design', price: '$10,000+', timeline: '3-6 weeks', features: ['Responsive layouts', 'UI kit & components', 'Interactive prototype', 'Brand consistency'] },
      { title: 'Redesign', price: '$6,000+', timeline: '2-4 weeks', features: ['UX audit', 'Updated visual language', 'Improved usability', 'Migration support'] },
      { title: 'Logo Design', price: '$1,200+', timeline: '1-2 weeks', features: ['Concept exploration', 'Multiple variations', 'File formats', 'Usage guidelines'] },
      { title: 'Branding Package', price: '$3,000+', timeline: '2-4 weeks', features: ['Logo & identity', 'Colour palette & typography', 'Brand guidelines', 'Collateral templates'] },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    cards: [
      { title: 'API Development', price: '$10,000+', timeline: '4-8 weeks', features: ['RESTful or GraphQL', 'Authentication & authorization', 'Documentation', 'Testing & monitoring'] },
      { title: 'Microservices Architecture', price: '$50/hr', timeline: 'Ongoing', features: ['Service decomposition', 'Message queues', 'Container orchestration', 'Monitoring & logging'] },
      { title: 'Third-party Integration', price: '$3,000+', timeline: '1-3 weeks', features: ['Payment gateways', 'CRM & ERP systems', 'Social media APIs', 'Custom connectors'] },
      { title: 'DevOps & CI/CD', price: '$50/hr', timeline: 'Ongoing', features: ['Pipeline setup', 'Infrastructure as code', 'Automated deployments', 'Monitoring & alerts'] },
      { title: 'Cloud Infrastructure', price: '$12,000+', timeline: '2-4 weeks', features: ['AWS / GCP / Azure', 'Auto-scaling', 'Security hardening', 'Cost optimisation'] },
    ],
  },
  {
    id: 'startups',
    label: 'Startups',
    cards: [
      { title: 'Basic MVP', price: '$15,000+', timeline: '6-10 weeks', features: ['Core features only', 'Essential design', 'Basic backend', 'Launch support'] },
      { title: 'Full MVP', price: '$25,000+', timeline: '2-4 months', features: ['Complete feature set', 'Professional design', 'Scalable backend', 'Analytics integration'] },
      { title: 'Urgent MVP', price: '$45,000+', timeline: '4-6 weeks', features: ['Accelerated timeline', 'Dedicated team', 'Priority support', 'Rapid iterations'] },
      { title: 'CTO as a Service', price: '$1,500/mo', timeline: 'Monthly', features: ['Technical strategy', 'Architecture decisions', 'Team hiring support', 'Investor prep'] },
      { title: 'Technical Advice', price: '$50/hr', timeline: 'As needed', features: ['Architecture review', 'Tech stack consultation', 'Code audit', 'Scaling strategy'] },
      { title: 'Proof of Concept', price: '$8,000+', timeline: '2-4 weeks', features: ['Feasibility validation', 'Technical prototype', 'Risk assessment', 'Recommendation report'] },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    cards: [
      { title: 'AI Integration', price: '$20,000+', timeline: '4-8 weeks', features: ['LLM integration', 'Custom AI features', 'Data pipeline setup', 'Performance tuning'] },
      { title: 'Chatbot Development', price: '$8,000+', timeline: '3-6 weeks', features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics dashboard'] },
      { title: 'Machine Learning', price: '$30,000+', timeline: '2-4 months', features: ['Custom ML models', 'Data preprocessing', 'Model training & evaluation', 'Production deployment'] },
      { title: 'AI Discovery Workshop', price: '$2,500+', timeline: '1-2 weeks', features: ['Use case identification', 'Feasibility analysis', 'ROI estimation', 'Implementation roadmap'] },
      { title: 'AI-powered Analytics', price: '$10,000+', timeline: '3-6 weeks', features: ['Predictive analytics', 'Data visualisation', 'Automated reporting', 'Anomaly detection'] },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    cards: [
      { title: 'CRM System', price: '$75,000+', timeline: '4-8 months', features: ['Custom workflows', 'Contact management', 'Sales pipeline', 'Reporting & analytics'] },
      { title: 'ERP System', price: '$150,000+', timeline: '6-12 months', features: ['Business process automation', 'Multi-department integration', 'Inventory management', 'Financial reporting'] },
      { title: 'HRM System', price: '$50,000+', timeline: '3-6 months', features: ['Employee management', 'Payroll integration', 'Performance tracking', 'Recruitment tools'] },
      { title: 'Document Management', price: '$35,000+', timeline: '2-4 months', features: ['Version control', 'Access permissions', 'Search & indexing', 'Workflow automation'] },
      { title: 'LMS Platform', price: '$40,000+', timeline: '3-5 months', features: ['Course management', 'Progress tracking', 'Assessment tools', 'Certificate generation'] },
      { title: 'Enterprise Pilot', price: '$75,000+', timeline: '3-4 months', features: ['Proof of value', 'Limited scope deployment', 'Integration testing', 'Stakeholder reporting'] },
    ],
  },
  {
    id: 'teams',
    label: 'Teams',
    cards: [
      { title: 'Dedicated Team', price: '$12,000/mo', timeline: 'Monthly', features: ['Full-time developers', 'Project manager included', 'Flexible scaling', 'Direct communication'] },
      { title: 'Staff Augmentation', price: '$60/hr', timeline: 'Ongoing', features: ['Skilled developers', 'Quick onboarding', 'Your management', 'NDA & IP protection'] },
      { title: 'Project Management', price: '$400/wk', timeline: 'Weekly', features: ['Sprint planning', 'Progress reporting', 'Risk management', 'Stakeholder communication'] },
      { title: 'Support & Maintenance', price: '$5,000/mo', timeline: 'Monthly', features: ['Bug fixes', 'Performance monitoring', 'Security updates', 'Feature enhancements'] },
      { title: 'Enterprise Support', price: '$15,000/mo', timeline: 'Monthly', features: ['24/7 availability', 'Dedicated account manager', 'SLA guarantees', 'Priority response'] },
    ],
  },
  {
    id: 'industry',
    label: 'Industry',
    cards: [
      { title: 'Fintech Solution', price: '$75,000+', timeline: '4-8 months', features: ['Compliance & security', 'Payment processing', 'KYC/AML integration', 'Real-time transactions'] },
      { title: 'Healthcare App', price: '$60,000+', timeline: '4-7 months', features: ['HIPAA compliance', 'EHR integration', 'Telemedicine features', 'Patient portal'] },
      { title: 'E-commerce Platform', price: '$35,000+', timeline: '2-5 months', features: ['Product catalogue', 'Payment gateway', 'Order management', 'Inventory tracking'] },
      { title: 'Marketplace Platform', price: '$75,000+', timeline: '4-8 months', features: ['Multi-vendor support', 'Payment splitting', 'Review system', 'Search & discovery'] },
      { title: 'Travel & Booking', price: '$40,000+', timeline: '3-6 months', features: ['Booking engine', 'Calendar management', 'Payment processing', 'Notifications system'] },
      { title: 'Education Platform', price: '$30,000+', timeline: '2-4 months', features: ['Course builder', 'Student dashboard', 'Video hosting', 'Progress tracking'] },
      { title: 'Logistics Solution', price: '$50,000+', timeline: '3-6 months', features: ['Route optimisation', 'Fleet tracking', 'Delivery management', 'Analytics dashboard'] },
    ],
  },
];

export default function PricingPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">Pricing</p>
          <h1 className={`${styles.heroTitle} fadeIn`}>
            Transparent pricing for every need
          </h1>
          <p className={`${styles.heroSubtitle} fadeIn`}>
            Explore our pricing across services. All estimates are starting points and
            vary based on project complexity, timeline, and specific requirements.
          </p>
        </div>
      </section>

      <nav className={styles.anchorNav}>
        <div className="container">
          <ul className={styles.anchorList}>
            {categories.map((cat) => (
              <li key={cat.id}>
                <a href={`#${cat.id}`} className={styles.anchorLink}>{cat.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className={styles.categorySection}>
          <div className="container">
            <h2 className={`${styles.categoryTitle} fadeIn`}>{cat.label}</h2>
            <div className={styles.pricingGrid}>
              {cat.cards.map((card) => (
                <div key={card.title} className={`${styles.pricingCard} fadeIn`}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <div className={styles.cardPrice}>Starting at {card.price}</div>
                  <div className={styles.cardTimeline}>{card.timeline}</div>
                  <ul className={styles.cardFeatures}>
                    {card.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={`${styles.ctaTitle} fadeIn`}>Need a custom estimate?</h2>
          <p className={`${styles.ctaDesc} fadeIn`}>
            Every project is unique. Fill out our form and we will provide a detailed proposal.
          </p>
          <Link href="/contact" className="btn fadeIn">
            Fill Out Form
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
