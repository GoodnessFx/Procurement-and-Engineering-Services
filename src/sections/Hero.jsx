import { Link } from 'react-router-dom';
import { HeroBackground } from '../components/HeroBackground';
import { Icons } from '../components/Icons';
import { SITE_CONFIG, SERVICES } from '../constants/content';
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
          Procurement & Engineering Excellence<br />
          <span className="hero__title-accent">Across West Africa</span>
        </h1>
        
        <p className="hero__description">
          {SITE_CONFIG.description}
        </p>
        
        <div className="hero__actions">
          <Link to="/services" className="btn btn-primary btn-lg hero__cta">
            Explore Our Services
            <Icons.arrowRight />
          </Link>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
            className="btn btn-secondary btn-lg hero__cta hero__cta--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.whatsapp />
            Chat on WhatsApp
          </a>
        </div>
        
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">15+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">4</span>
            <span className="hero__stat-label">Country Offices</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">500+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-value">98%</span>
            <span className="hero__stat-label">On-Time Delivery</span>
          </div>
        </div>
        
        <div className="hero__regions" aria-label="Regions served">
          <span className="hero__regions-label">Serving:</span>
          {SITE_CONFIG.regions.map((region, i) => (
            <span key={region} className="hero__region-badge">
              {region}
              {i < SITE_CONFIG.regions.length - 1 && <Icons.chevronRight />}
            </span>
          ))}
        </div>
      </div>
      
      <a href="#what-we-do" className="hero__scroll" aria-label="Scroll to services">
        <Icons.chevronDown />
      </a>
    </section>
  );
}

export default Hero;