import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { SITE_CONFIG } from '../constants/content';
import './CTA.css';

export function CTA() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="cta__background" aria-hidden="true">
        <img
          className="cta__bg-image"
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt=""
        />
        <div className="cta__bg-overlay" />
      </div>

      <div className="container cta__container">
        <div className="cta__content">
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
              Get a Quote
              <Icons.arrowRight />
            </Link>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
              className="btn btn-whatsapp btn-lg cta__btn cta__btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.whatsapp />
              WhatsApp Us
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
