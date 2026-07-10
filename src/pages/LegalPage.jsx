import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import './Legal.css';

const legalPages = {
  terms: {
    title: 'Terms of Service',
    lastUpdated: '2024-01-15',
    sections: [
      { title: '1. Acceptance of Terms', content: 'By accessing and using the Procurement & Engineering Services (PES) website and services, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.' },
      { title: '2. Services Description', content: 'PES provides procurement, engineering, project management, inspection, expediting, and manpower supply services to clients in the energy, infrastructure, and industrial sectors across West Africa. Specific service terms are governed by separate agreements.' },
      { title: '3. Client Obligations', content: 'Clients must provide accurate information, timely approvals, and access necessary for service delivery. Clients are responsible for compliance with applicable laws in their jurisdiction.' },
      { title: '4. Intellectual Property', content: 'All content on this website, including text, graphics, logos, and software, is the property of PES or its licensors. Unauthorized use is prohibited. Client data and project information remain the property of the client.' },
      { title: '5. Confidentiality', content: 'Both parties agree to maintain confidentiality of proprietary information exchanged during engagements, in accordance with signed NDAs and applicable law.' },
      { title: '6. Limitation of Liability', content: 'PES liability is limited to the fees paid for the specific service giving rise to the claim, except for gross negligence, willful misconduct, or as otherwise required by law.' },
      { title: '7. Indemnification', content: 'Each party shall indemnify the other against claims arising from breach of these terms or applicable law.' },
      { title: '8. Governing Law', content: 'These terms are governed by the laws of the Federal Republic of Nigeria. Disputes shall be resolved through arbitration in Lagos under the Arbitration and Conciliation Act.' },
      { title: '9. Changes', content: 'We may update these terms periodically. Continued use after changes constitutes acceptance. Material changes will be communicated via email or website notice.' },
      { title: '10. Contact', content: 'Questions about these terms? Contact us at legal@pes-ng.com or visit our Contact page.' },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: '2024-01-15',
    sections: [
      { title: '1. What Are Cookies', content: 'Cookies are small text files stored on your device when you visit a website. They help the site function, remember preferences, and provide analytics.' },
      { title: '2. Types We Use', content: '<strong>Necessary:</strong> Essential for site functionality (session, security). Cannot be disabled.<br><strong>Analytics:</strong> Google Analytics to understand visitor behavior (anonymized IP).<br><strong>Marketing:</strong> Not currently used.' },
      { title: '3. Consent', content: 'We request consent for non-essential cookies via our cookie banner. You can change preferences anytime via the "Cookie Settings" link in the footer.' },
      { title: '4. Specific Cookies', content: '<strong>_ga, _ga_*:</strong> Google Analytics (2 years).<br><strong>cookie-consent:</strong> Stores your preferences (1 year).<br><strong>session:</strong> Temporary session ID (session).' },
      { title: '5. Managing Cookies', content: 'Most browsers allow you to block or delete cookies. Blocking necessary cookies may break site functionality. See your browser help for instructions.' },
      { title: '6. Third-Party', content: 'Google Analytics is our only third-party cookie provider. Their privacy policy applies to data they collect.' },
      { title: '7. Changes', content: 'We may update this policy. Changes posted here with updated date.' },
      { title: '8. Contact', content: 'Questions? Email dpo@pes-ng.com' },
    ],
  },
  accessibility: {
    title: 'Accessibility Statement',
    lastUpdated: '2024-01-15',
    sections: [
      { title: '1. Commitment', content: 'PES is committed to making our website accessible to everyone, including people with disabilities. We aim to meet WCAG 2.1 Level AA.' },
      { title: '2. Features', content: 'Semantic HTML, keyboard navigation, focus indicators, alt text, sufficient contrast, scalable text, skip links, ARIA labels.' },
      { title: '3. Known Limitations', content: 'Some third-party content (maps, portals) may not fully meet standards. We work with vendors to improve.' },
      { title: '4. Feedback', content: 'If you encounter barriers, email accessibility@pes-ng.com or call +234 800 737 0000. We respond within 5 business days.' },
      { title: '5. Testing', content: 'We test with NVDA, VoiceOver, axe-core, and manual keyboard testing quarterly.' },
      { title: '6. Contact', content: 'Accessibility Coordinator: accessibility@pes-ng.com' },
    ],
  },
  modernSlavery: {
    title: 'Modern Slavery Statement',
    lastUpdated: '2024-01-15',
    sections: [
      { title: '1. Introduction', content: 'PES operates in Nigeria, Ghana, Côte d\'Ivoire, and Senegal. We are committed to preventing modern slavery and human trafficking in our operations and supply chains.' },
      { title: '2. Policies', content: 'We maintain a Supplier Code of Conduct prohibiting forced labor, child labor, and human trafficking. All vendors must acknowledge compliance.' },
      { title: '3. Due Diligence', content: 'We assess modern slavery risk during vendor qualification, including geographic and sector risk factors. High-risk vendors undergo enhanced screening.' },
      { title: '4. Training', content: 'Our procurement and compliance teams receive annual training on identifying modern slavery indicators.' },
      { title: '5. Reporting', content: 'Concerns can be reported confidentially via ethics@pes-ng.com or our whistleblower hotline. No retaliation for good-faith reports.' },
      { title: '6. Review', content: 'This statement is reviewed annually and approved by the Board.' },
    ],
  },
  antiBribery: {
    title: 'Anti-Bribery & Corruption Policy',
    lastUpdated: '2024-01-15',
    sections: [
      { title: '1. Zero Tolerance', content: 'PES prohibits all forms of bribery and corruption. We comply with Nigerian Corrupt Practices Act, UK Bribery Act, US FCPA, and applicable local laws.' },
      { title: '2. Scope', content: 'Applies to all employees, directors, agents, contractors, and third parties acting on our behalf.' },
      { title: '3. Prohibited Conduct', content: 'Offering, promising, giving, or accepting bribes; facilitation payments; kickbacks; improper gifts/hospitality; bid rigging; money laundering.' },
      { title: '4. Gifts & Hospitality', content: 'Modest, transparent, and business-appropriate only. Pre-approval required for items over $100. All recorded in the Gifts Register.' },
      { title: '5. Third Parties', content: 'Agents and intermediaries undergo enhanced due diligence. Contracts include anti-bribery clauses and audit rights.' },
      { title: '6. Reporting', content: 'Report concerns via ethics@pes-ng.com or anonymous hotline. Whistleblowers protected from retaliation.' },
      { title: '7. Training', content: 'Mandatory annual training for all staff. Enhanced training for procurement, sales, and leadership.' },
      { title: '8. Enforcement', content: 'Violations result in disciplinary action up to termination, and may be reported to authorities.' },
    ],
  },
};

export function LegalPage({ page }) {
  const config = legalPages[page];
  if (!config) return null;

  return (
    <>
      <header className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb__item">Home</Link>
            <Icons.chevronRight className="breadcrumb__separator" />
            <span className="breadcrumb__item breadcrumb__item--current">{config.title}</span>
          </nav>
          <h1 className="page-hero__title">{config.title}</h1>
          <p className="page-hero__subtitle">
            Last updated: {new Date(config.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </header>

      <main>
        <section className="legal section" aria-labelledby="legal-heading">
          <div className="container">
            <div className="legal__content">
              {config.sections.map((section, index) => (
                <article key={index} className="legal__section">
                  <h2 className="legal__section-title">{section.title}</h2>
                  <div className="legal__text" dangerouslySetInnerHTML={{ __html: section.content }} />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LegalPage;