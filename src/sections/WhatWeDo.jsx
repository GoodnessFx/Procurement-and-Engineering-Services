import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
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

export function WhatWeDo() {
  return (
    <section className="what-we-do section" id="what-we-do" aria-labelledby="what-we-do-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="what-we-do-heading" className="section-title">
            What We Do
          </h2>
          <p className="section-subtitle">
            End-to-end procurement, engineering, and project support services
            delivered through a single point of accountability.
          </p>
        </header>

        <div className="what-we-do__grid">
          {SERVICES.map((service) => {
            const IconComponent = serviceIconMap[service.id] || Icons.building;
            return (
              <article key={service.id} className="what-we-do__card" id={service.id}>
                <div className="what-we-do__icon" aria-hidden="true">
                  <IconComponent />
                </div>
                <h3 className="what-we-do__title">{service.title}</h3>
                <p className="what-we-do__description">{service.shortDesc}</p>
                <ul className="what-we-do__features" aria-label="Key capabilities">
                  {service.features.map((feature, i) => (
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
              </article>
            );
          })}
        </div>

        <div className="what-we-do__cta">
          <Link to="/services" className="btn btn-outline btn-lg">
            View All Services
            <Icons.chevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;