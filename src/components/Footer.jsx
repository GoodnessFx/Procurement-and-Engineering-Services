import { Icons } from './Icons';
import { SITE_CONFIG } from '../constants/content';
import './Footer.css';

export function Footer() {
  const { name, social, companyRegistration } = SITE_CONFIG;

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__main">
          <div className="footer__grid">
            <div className="footer__brand">
              <a href="/" className="footer__logo" aria-label={`${name} - Home`}>
                <span className="footer__logo-icon" aria-hidden="true">
                  <Icons.shield />
                </span>
                <span className="footer__logo-text">PES</span>
              </a>
              <p className="footer__tagline">Procurement & Engineering Services</p>
              <p className="footer__description">
                Trusted procurement and engineering partner across Nigeria, Ghana, Côte d'Ivoire, and Senegal.
                We deliver equipment, materials, and technical services that keep your projects on schedule and on budget.
              </p>
              <div className="footer__social" role="list" aria-label="Social media links">
                <a href={social.linkedin} className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Icons.linkedin />
                </a>
                <a href={social.twitter} className="footer__social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <Icons.twitter />
                </a>
                <a href={social.instagram} className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Icons.instagram />
                </a>
              </div>
            </div>

            <nav className="footer__nav" aria-label="Services">
              <h3 className="footer__heading">Our Services</h3>
              <ul className="footer__list">
                <li><a href="/services#procurement" className="footer__link">Strategic Procurement</a></li>
                <li><a href="/services#engineering" className="footer__link">Engineering Services</a></li>
                <li><a href="/services#project-management" className="footer__link">Project Management & Controls</a></li>
                <li><a href="/services#inspection" className="footer__link">Inspection & QA/QC</a></li>
                <li><a href="/services#expediting" className="footer__link">Expediting & Logistics</a></li>
                <li><a href="/services#manpower" className="footer__link">Technical Manpower Supply</a></li>
              </ul>
            </nav>

            <nav className="footer__nav" aria-label="Company">
              <h3 className="footer__heading">Company</h3>
              <ul className="footer__list">
                <li><a href="/about" className="footer__link">About Us</a></li>
                <li><a href="/projects" className="footer__link">Projects</a></li>
                <li><a href="/insights" className="footer__link">News & Insights</a></li>
                <li><a href="/faq" className="footer__link">FAQ</a></li>
              </ul>
            </nav>

            <nav className="footer__nav" aria-label="Resources">
              <h3 className="footer__heading">Resources</h3>
              <ul className="footer__list">
                <li><a href="/faq" className="footer__link">FAQ</a></li>
                <li><a href="/contact" className="footer__link">Contact Us</a></li>
              </ul>
            </nav>

            <div className="footer__contact">
              <h3 className="footer__heading">Contact Us</h3>
              <address className="footer__address">
                <div className="footer__contact-item">
                  <Icons.locationIcon className="footer__contact-icon" aria-hidden="true" />
                  <div>
                    <span className="footer__contact-label">Lagos Headquarters</span>
                    <p className="footer__contact-value">Plot 14, Block 5, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <Icons.phoneIcon className="footer__contact-icon" aria-hidden="true" />
                  <div>
                    <span className="footer__contact-label">Phone</span>
                    <a href={`tel:${SITE_CONFIG.phoneClean}`} className="footer__contact-value footer__link">{SITE_CONFIG.phone}</a>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <Icons.mail className="footer__contact-icon" aria-hidden="true" />
                  <div>
                    <span className="footer__contact-label">Email</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="footer__contact-value footer__link">{SITE_CONFIG.email}</a>
                  </div>
                </div>
                <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`} className="footer__whatsapp btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                  <Icons.whatsapp className="footer__whatsapp-icon" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
            <ul className="footer__legal-list">
              <li><a href="/privacy" className="footer__legal-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer__legal-link">Terms of Service</a></li>
            </ul>
            <p className="footer__registration">{companyRegistration}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}