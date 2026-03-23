'use client';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

const articles = [
  {
    title: 'How Much Does a Website Redesign Cost in 2026?',
    date: 'Mar 10, 2026',
    readTime: '8 min read',
    excerpt: 'A comprehensive breakdown of website redesign costs, factors that influence pricing, and how to plan your budget effectively.',
    colour: '#1a73e8',
  },
  {
    title: 'Building a Social Media App: Complete Development Guide',
    date: 'Feb 25, 2026',
    readTime: '12 min read',
    excerpt: 'From feature planning to launch, everything you need to know about developing a social media platform in today\'s market.',
    colour: '#6c5ce7',
  },
  {
    title: 'React Native Chat App: Architecture and Implementation',
    date: 'Feb 12, 2026',
    readTime: '10 min read',
    excerpt: 'A technical deep-dive into building a real-time chat application with React Native, WebSockets, and end-to-end encryption.',
    colour: '#00b894',
  },
  {
    title: 'Outsourcing Software Development: Pros, Cons, and Best Practices',
    date: 'Jan 28, 2026',
    readTime: '7 min read',
    excerpt: 'When does outsourcing make sense? We explore the advantages, risks, and strategies for successful outsourced development.',
    colour: '#e17055',
  },
  {
    title: 'How to Build a Music Streaming App Like Spotify',
    date: 'Jan 15, 2026',
    readTime: '11 min read',
    excerpt: 'Technical requirements, feature set, infrastructure costs, and development timeline for building a music streaming platform.',
    colour: '#e84393',
  },
  {
    title: 'Mobile Banking App Development: Features, Security, and Compliance',
    date: 'Dec 20, 2025',
    readTime: '9 min read',
    excerpt: 'Essential features, security requirements, and regulatory compliance considerations for fintech mobile banking applications.',
    colour: '#fdcb6e',
  },
  {
    title: 'How Long Does It Take to Develop a Mobile App?',
    date: 'Dec 5, 2025',
    readTime: '6 min read',
    excerpt: 'Realistic timelines for mobile app development across different complexity levels, from simple MVPs to enterprise applications.',
    colour: '#0984e3',
  },
  {
    title: 'AI in Software Development: Practical Applications for 2026',
    date: 'Nov 18, 2025',
    readTime: '8 min read',
    excerpt: 'How AI tools are transforming the software development lifecycle, from code generation to testing and deployment.',
    colour: '#636e72',
  },
];

export default function BlogPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">Blog</p>
          <h1 className={`${styles.heroTitle} fadeIn`}>
            Insights &amp; articles
          </h1>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className="container">
          <div className={styles.blogGrid}>
            {articles.map((article) => (
              <article key={article.title} className={`${styles.blogCard} fadeIn`}>
                <div
                  className={styles.blogImage}
                  style={{ backgroundColor: article.colour }}
                >
                  <div className={styles.blogImageInner} />
                </div>
                <div className={styles.blogBody}>
                  <div className={styles.blogMeta}>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className={styles.blogTitle}>{article.title}</h2>
                  <p className={styles.blogExcerpt}>{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
