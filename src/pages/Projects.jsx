import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { CookieConsent } from '../components/CookieConsent';
import { Icons } from '../components/Icons';
import { MediaContainer } from '../components/MediaContainer';
import { PROJECTS } from '../constants/content';
import './Projects.css';

const projectImages = {
  'lng-train': 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80',
  'power-plant': 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  'refinery-turnaround': 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
  'pipeline-project': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
};

export function Projects() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <header className="page-hero page-hero--dark">
          <img className="page-hero__bg-image" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="" />
          <div className="page-hero__bg-overlay" />
          <div className="container">
            <nav className="breadcrumb breadcrumb--light" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb__item">Home</Link>
              <Icons.chevronRight className="breadcrumb__separator" />
              <span className="breadcrumb__item breadcrumb__item--current">Projects</span>
            </nav>
            <h1 className="page-hero__title page-hero__title--light">Our Projects</h1>
            <p className="page-hero__subtitle page-hero__subtitle--light">
              A portfolio of successful engagements across West Africa's energy and infrastructure sectors.
            </p>
          </div>
        </header>

        <section className="projects section" aria-labelledby="projects-heading">
          <div className="container">
            <div className="projects__grid">
              {PROJECTS.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="project-card__image">
                    <MediaContainer
                      src={projectImages[project.id]}
                      alt={project.title}
                      aspectRatio="16/10"
                      hover
                      rounded={false}
                    />
                    <div className="project-card__overlay">
                      <Link to={`/projects/${project.id}`} className="project-card__link">
                        <Icons.arrowRight />
                        <span>View Details</span>
                      </Link>
                    </div>
                  </div>
                  <div className="project-card__content">
                    <div className="project-card__meta">
                      <span className="project-card__location">
                        <Icons.mapPin />
                        {project.location}
                      </span>
                      <span className="project-card__year">{project.year}</span>
                    </div>
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>
                    <div className="project-card__services" aria-label="Services provided">
                      {project.services.map((service) => (
                        <span key={service} className="badge badge-primary">
                          {service}
                        </span>
                      ))}
                    </div>
                    <ul className="project-card__outcomes" aria-label="Key outcomes">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="project-card__outcome">
                          <Icons.check />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-section__card">
              <h2 id="cta-heading" className="cta-section__title">
                Have a Similar Project?
              </h2>
              <p className="cta-section__description">
                We'd love to discuss how our experience can add value to your next engagement.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start a Conversation
                <Icons.arrowRight />
              </Link>
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

export default Projects;
