'use client';
import PageWrapper from '@/components/PageWrapper';
import styles from './page.module.css';

export default function OfferPage() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        <div className="container">
          <p className="headline">Legal</p>
          <h1 className={styles.heroTitle}>Public Offer Agreement</h1>
          <p className={styles.lastUpdated}>Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.legalText}>
            <h2>1. General Provisions</h2>
            <p>
              This Public Offer Agreement (hereinafter referred to as the &quot;Agreement&quot;) defines the terms and conditions
              under which Ronas IT OU (hereinafter referred to as the &quot;Company&quot;), registered in Estonia, registration
              number 14538042, provides software development and related services to individuals and legal entities
              (hereinafter referred to as the &quot;Client&quot;).
            </p>
            <p>
              By accepting this offer, the Client agrees to all terms and conditions set forth in this Agreement.
              Acceptance of the offer is the payment for services or signing a separate service agreement.
            </p>

            <h2>2. Subject of the Agreement</h2>
            <p>
              The Company provides the following types of services:
            </p>
            <ul>
              <li>UI/UX design and web design services</li>
              <li>Software development (web and mobile applications)</li>
              <li>Quality assurance and testing</li>
              <li>Technical support and maintenance</li>
              <li>IT consulting and project management</li>
            </ul>

            <h2>3. Terms of Service</h2>
            <p>
              The scope, timeline, and cost of services are determined individually for each project
              and specified in the project estimate or separate service agreement signed by both parties.
            </p>
            <p>
              The Company reserves the right to engage subcontractors to fulfil its obligations under
              this Agreement, while remaining responsible for the quality of services rendered.
            </p>

            <h2>4. Payment Terms</h2>
            <p>
              Payment for services is made according to the terms specified in the project estimate
              or service agreement. The Company accepts bank transfers and other payment methods
              as agreed between the parties.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All intellectual property rights to the deliverables created under this Agreement
              are transferred to the Client upon full payment, unless otherwise specified in the
              project agreement.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of any proprietary information
              exchanged during the course of cooperation. A separate Non-Disclosure Agreement
              may be signed upon the Client&apos;s request.
            </p>

            <h2>7. Liability</h2>
            <p>
              The Company shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of delivered services or products. The Company&apos;s
              total liability shall not exceed the amount paid by the Client for the specific
              services in question.
            </p>

            <h2>8. Dispute Resolution</h2>
            <p>
              Any disputes arising from this Agreement shall be resolved through negotiation.
              If the parties cannot reach an agreement, disputes shall be resolved in accordance
              with the laws of the Republic of Estonia in the Harju County Court.
            </p>

            <h2>9. Contact Information</h2>
            <p>
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
