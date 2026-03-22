import styles from './Reasons.module.css';

const reasons = [
  {
    icon: '💡',
    title: 'Create an MVP',
    description: 'Create an MVP to attract investors and test your business idea with real users.',
  },
  {
    icon: '⚙️',
    title: 'Automate Processes',
    description: 'Automate the internal processes of your business to increase efficiency and reduce costs.',
  },
  {
    icon: '📱',
    title: 'Attract Customers',
    description: 'Create a web or mobile app to attract new customers and make your service more convenient.',
  },
];

export default function Reasons() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h3 className={styles.heading}>You may need our services if you want to:</h3>
        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <div className={styles.cardIcon}>{r.icon}</div>
              <h5>{r.title}</h5>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
