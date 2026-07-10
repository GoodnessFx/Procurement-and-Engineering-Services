import { Link } from 'react-router-dom';
import { HeroBackground } from '../components/HeroBackground';
import { Icons } from '../components/Icons';
import { SITE_CONFIG } from '../constants/content';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <HeroBackground />

      <div className="hero__content container">
        <div className="hero__badge">
          <Icons.badge />
          <span>Trusted Partner Across West Africa Since 2009</span>
        </div>

        <h1 id="hero-heading" className="hero__title">
          Procurement &<br />
          Engineering Excellence
        </h1>

        <p className="hero__description">
          {SITE_CONFIG.description}
        </p>

        <div className="hero__actions">
          <Link to="/contact" className="btn btn-primary btn-lg hero__cta">
            Get a Quote
            <Icons.arrowRight />
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
            className="btn btn-whatsapp btn-lg hero__cta hero__cta--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.whatsapp />
            WhatsApp Us
          </a>
        </div>
      </div>

      <a href="#what-we-do" className="hero__scroll" aria-label="Scroll to services">
        <Icons.chevronDown />
      </a>
    </section>
  );
}

export default Hero;
