import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { CookieConsent } from '../components/CookieConsent';
import { Icons } from '../components/Icons';
import { SERVICES, SITE_CONFIG } from '../constants/content';
import './Services.css';

const serviceIconMap = {
  procurement: Icons.procurement,
  engineering: Icons.engineering,
  'project-management': Icons['project-management'],
  inspection: Icons.inspection,
  expediting: Icons.expediting,
  manpower: Icons.manpower,
};

export function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <section className="page-hero" aria-labelledby="page-title">
          <div className="page-hero__bg" aria-hidden="true" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb__item">Home</Link>
              <Icons.chevronRight className="breadcrumb__separator" />
              <span className="breadcrumb__item breadcrumb__item--current">Services</span>
            </nav>
            <h1 id="page-title" className="page-hero__title">Our Services</h1>
            <p className="page-hero__subtitle">
              End-to-end procurement, engineering, and project support services
              delivered through a single point of accountability.
            </p>
          </div>
        </section>

        <section className="services-overview section" aria-labelledby="services-overview-heading">
          <div className="container">
            <div className="services-overview__tabs" role="tablist" aria-label="Service categories">
              {SERVICES.map((service) => {
                const TabIcon = serviceIconMap[service.id] || Icons.building;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    id={`tab-${service.id}`}
                    aria-selected={activeTab === service.id}
                    aria-controls={`panel-${service.id}`}
                    className={`services-overview__tab ${activeTab === service.id ? 'services-overview__tab--active' : ''}`}
                    onClick={() => setActiveTab(service.id)}
                  >
                    <TabIcon className="services-overview__tab-icon" />
                    <span className="services-overview__tab-label">{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="service-detail section" aria-labelledby="service-detail-heading">
          <div className="container">
            {SERVICES.map((service) => {
              const IconComponent = serviceIconMap[service.id] || Icons.building;
              return (
                <article
                key={service.id}
                id={`panel-${service.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${service.id}`}
                className={`service-detail ${activeTab !== service.id ? 'service-detail--hidden' : ''}`}
                hidden={activeTab !== service.id}
              >
                <header className="service-detail__header">
                  <div className="service-detail__icon" aria-hidden="true">
                    <IconComponent />
                  </div>
                  <div>
                    <h2 id="service-detail-heading" className="service-detail__title">{service.title}</h2>
                    <p className="service-detail__description">{service.description}</p>
                  </div>
                </header>

                <div className="service-detail__content">
                  <div className="service-detail__features">
                    <h3 className="service-detail__section-title">Key Capabilities</h3>
                    <ul className="service-detail__features-list">
                      {service.features.map((feature, i) => (
                        <li key={i} className="service-detail__feature">
                          <Icons.check className="service-detail__feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail__industries">
                    <h3 className="service-detail__section-title">Industries Served</h3>
                    <div className="service-detail__industries-list">
                      {service.industries.map((industry) => (
                        <span key={industry} className="badge badge-primary">{industry}</span>
                      ))}
                    </div>
                  </div>

                  <div className="service-detail__cta">
                    <Link to="/contact" className="btn btn-primary btn-lg service-detail__cta-btn">
                      {service.ctaText}
                      <Icons.arrowRight />
                    </Link>
                    <a
                      href={"https://wa.me/" + SITE_CONFIG.whatsappNumber + "?text=" + encodeURIComponent("Hello PES Services - " + service.title)}
                      className="btn btn-whatsapp btn-lg service-detail__cta-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icons.whatsapp />
                      Discuss on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            )})}
          </div>
        </section>

        <section className="services-cta section" aria-labelledby="services-cta-heading">
          <div className="container">
            <div className="services-cta__card">
              <h2 id="services-cta-heading" className="services-cta__title">
                Need a Custom Solution?
              </h2>
              <p className="services-cta__description">
                Our services are modular — combine procurement, engineering, inspection, and logistics
                into a single integrated package tailored to your project.
              </p>
              <div className="services-cta__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Request a Proposal
                  <Icons.arrowRight />
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  className="btn btn-secondary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.whatsapp />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </>
  );
}

export default Services;