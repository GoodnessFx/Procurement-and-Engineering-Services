import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { SITE_CONFIG } from '../constants/content';
import './CTA.css';

export function CTA() {
  return (
    <section className="cta section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta__card">
          <div className="cta__icon" aria-hidden="true">
            <Icons.quote />
          </div>
          <h2 id="cta-heading" className="cta__title">
            Ready to Start Your Project?
          </h2>
          <p className="cta__description">
            Let's discuss your procurement or engineering requirements.
            Our team is ready to provide a detailed proposal within 24 hours.
          </p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn-primary btn-lg cta__btn">
              Request a Quote
              <Icons.chevronRight />
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
              className="btn btn-secondary btn-lg cta__btn cta__btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.whatsapp />
              Chat on WhatsApp
            </a>
          </div>
          <p className="cta__note">
            Or call us directly: <a href={`tel:${SITE_CONFIG.phoneClean}`} className="cta__phone">{SITE_CONFIG.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;