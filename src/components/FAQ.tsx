'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Which software development services do you provide?',
    a: 'Our main services include UI/UX design, graphic design, mobile app development, web development, CTO as a service, business analytics, and DevOps services.',
  },
  {
    q: "What is your software development company's pricing policy?",
    a: 'The cost of software development is influenced by various factors, including the type of application, the technologies employed, number and complexity of features, and project timeline.',
  },
  {
    q: 'How long does it take you to develop a digital product?',
    a: 'The software development time depends on the number and complexity of features. MVP development can take 1-3 months.',
  },
  {
    q: 'What is your experience with custom software development?',
    a: 'Our software development company has 17+ years of experience in designing and developing products.',
  },
  {
    q: 'Who is on your dedicated development team?',
    a: 'There are 50+ specialists in our software development company, including UI/UX designers, developers, and DevOps engineers.',
  },
  {
    q: 'Can you sign an NDA?',
    a: 'Sure! Your privacy is our priority.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>FAQ</h2>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.item}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ''}`} />
              </button>
              <div className={`${styles.answer} ${openIndex === i ? styles.answerOpen : ''}`}>
                <div className={styles.answerInner}>{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
