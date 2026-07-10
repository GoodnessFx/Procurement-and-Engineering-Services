import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { MediaContainer } from '../components/MediaContainer';
import { SERVICES } from '../constants/content';
import './WhatWeDo.css';

const serviceIconMap = {
  procurement: Icons.procurement,
  engineering: Icons.engineering,
  'project-management': Icons['project-management'],
  inspection: Icons.inspection,
  expediting: Icons.expediting,
  manpower: Icons.manpower,
};

const serviceImages = {
  procurement: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  engineering: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'project-management': 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80',
  inspection: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  expediting: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
  manpower: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
};

export function WhatWeDo() {
  return (
    <section className="what-we-do section" id="what-we-do" aria-labelledby="what-we-do-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Our Expertise</span>
          <h2 id="what-we-do-heading" className="section-title">
            What We Do
          </h2>
          <p className="section-subtitle">
            End-to-end procurement, engineering, and project support services
            delivered through a single point of accountability.
          </p>
        </header>

        <div className="what-we-do__grid">
          {SERVICES.map((service, index) => {
            const IconComponent = serviceIconMap[service.id] || Icons.building;
            const isReversed = index % 2 !== 0;
            return (
              <article
                key={service.id}
                className={`what-we-do__card ${isReversed ? 'what-we-do__card--reversed' : ''}`}
                id={service.id}
              >
                <div className="what-we-do__card-media">
                  <MediaContainer
                    src={serviceImages[service.id]}
                    alt={`${service.title} service`}
                    aspectRatio="4/3"
                    hover
                    rounded
                  />
                </div>
                <div className="what-we-do__card-content">
                  <div className="what-we-do__icon" aria-hidden="true">
                    <IconComponent />
                  </div>
                  <h3 className="what-we-do__title">{service.title}</h3>
                  <p className="what-we-do__description">{service.shortDesc}</p>
                  <ul className="what-we-do__features" aria-label="Key capabilities">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="what-we-do__feature">
                        <Icons.check />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="what-we-do__industries" aria-label="Industries served">
                    {service.industries.map((industry) => (
                      <span key={industry} className="badge badge-accent">
                        {industry}
                      </span>
                    ))}
                  </div>
                  <Link to={`/services/${service.id}`} className="what-we-do__link">
                    {service.ctaText}
                    <Icons.chevronRight />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="what-we-do__cta">
          <Link to="/services" className="btn btn-primary btn-lg">
            View All Services
            <Icons.chevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
