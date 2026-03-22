import styles from './Reasons.module.css';

const reasons = [
  {
    icon: '💡',
    text: 'Create an MVP to attract investors and test your business idea',
  },
  {
    icon: '⚙️',
    text: 'Automate the internal processes of your business',
  },
  {
    icon: '📱',
    text: 'Create a web or mobile app to attract new customers and make your service more convenient',
  },
];

export default function Reasons() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.colLeft}>
            <div className={styles.title}>
              You may need our services if you want to:
            </div>
          </div>
          <div className={styles.colRight}>
            <ul className={styles.list}>
              {reasons.map((r, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.itemIcon}>{r.icon}</span>
                  <h5>{r.text}</h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
