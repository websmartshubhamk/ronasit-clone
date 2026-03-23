'use client';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

const stages = [
  {
    number: '01',
    title: 'Analytics',
    desc: 'We start every project by deeply understanding your business, goals, and target audience. This phase establishes the foundation for all design and development decisions.',
    deliverables: [
      { title: 'Requirements Gathering', desc: 'Detailed documentation of functional and non-functional requirements through stakeholder interviews.' },
      { title: 'Goals Definition', desc: 'Clear project objectives, KPIs, and success metrics aligned with your business strategy.' },
      { title: 'Competitor Research', desc: 'Analysis of market competitors, identifying opportunities for differentiation and best practices.' },
      { title: 'Estimates & Planning', desc: 'Detailed time and cost estimates, project roadmap, and resource allocation plan.' },
    ],
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Our design process transforms research insights into intuitive, visually compelling interfaces. We work iteratively, gathering feedback at every step.',
    deliverables: [
      { title: 'Wireframes', desc: 'Low-fidelity layouts establishing information architecture, user flows, and content hierarchy.' },
      { title: 'Design Concepts', desc: 'High-fidelity visual designs exploring colour, typography, and brand expression.' },
      { title: 'Sprint-based Delivery', desc: 'Designs delivered in 2-week sprints with regular reviews and feedback loops.' },
      { title: 'UI Kit & Handoff', desc: 'Complete design system with reusable components, styles, and developer-ready specifications.' },
    ],
  },
  {
    number: '03',
    title: 'Development',
    desc: 'We build robust, scalable applications using modern technologies and agile methodologies. Quality is ensured through rigorous testing and code review practices.',
    deliverables: [
      { title: 'Architecture Design', desc: 'Scalable system architecture with technology stack selection and infrastructure planning.' },
      { title: '2-week Sprints', desc: 'Iterative development with demo sessions, backlog grooming, and sprint retrospectives.' },
      { title: 'Code Reviews', desc: 'Peer code reviews, automated testing, and continuous integration for quality assurance.' },
      { title: 'Launch & Deployment', desc: 'Production deployment, monitoring setup, performance optimisation, and post-launch support.' },
    ],
  },
];

const principles = [
  { title: 'Transparency', desc: 'Regular updates, open communication, and full visibility into project progress at all times.' },
  { title: 'Quality First', desc: 'Automated testing, code reviews, and continuous integration ensure every release meets our standards.' },
  { title: 'Agile Methodology', desc: 'Iterative development with regular demos and feedback ensures we build exactly what you need.' },
  { title: 'Dedicated Team', desc: 'Every project gets a committed team of specialists who understand your vision and goals.' },
  { title: 'Long-term Partnership', desc: 'We build relationships, not just products. Most clients return for ongoing collaboration.' },
  { title: 'Modern Stack', desc: 'We use proven, modern technologies that ensure performance, security, and maintainability.' },
];

export default function HowWeWorkPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">How We Work</p>
          <h1 className={`${styles.heroTitle} fadeIn`}>
            Our proven process delivers results
          </h1>
          <p className={`${styles.heroSubtitle} fadeIn`}>
            From initial discovery to launch and beyond, our structured approach ensures
            predictable timelines, transparent communication, and exceptional quality.
          </p>
        </div>
      </section>

      {stages.map((stage) => (
        <section key={stage.number} className={styles.stageSection}>
          <div className="container">
            <div className={styles.stageHeader}>
              <div className={`${styles.stageLeft} fadeIn`}>
                <div className={styles.stageNumber}>{stage.number}</div>
                <h2 className={styles.stageTitle}>{stage.title}</h2>
              </div>
              <div className={`${styles.stageRight} fadeIn`}>
                <p className={styles.stageDesc}>{stage.desc}</p>
                <div className={styles.deliverables}>
                  {stage.deliverables.map((d) => (
                    <div key={d.title} className={styles.deliverable}>
                      <h3 className={styles.deliverableTitle}>{d.title}</h3>
                      <p className={styles.deliverableDesc}>{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className={styles.principlesSection}>
        <div className="container">
          <p className="headline">Key Principles</p>
          <div className={styles.principlesGrid}>
            {principles.map((p) => (
              <div key={p.title} className={`${styles.principleCard} fadeIn`}>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
