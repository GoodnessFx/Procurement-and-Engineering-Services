import { Link } from 'react-router-dom';
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
    <section className="projects section" aria-labelledby="projects-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Our Work</span>
          <h2 id="projects-heading" className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A selection of our recent work across West Africa's energy and infrastructure sectors.
          </p>
        </header>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="projects__card">
              <div className="projects__image">
                <MediaContainer
                  src={projectImages[project.id]}
                  alt={project.title}
                  aspectRatio="16/10"
                  hover
                  rounded={false}
                />
                <div className="projects__image-overlay">
                  <Link to={`/projects/${project.id}`} className="projects__link">
                    <Icons.arrowRight />
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
              <div className="projects__content">
                <div className="projects__meta">
                  <span className="projects__location">
                    <Icons.mapPin />
                    {project.location}
                  </span>
                  <span className="projects__year">{project.year}</span>
                </div>
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                <div className="projects__services" aria-label="Services provided">
                  {project.services.map((service) => (
                    <span key={service} className="badge badge-primary">
                      {service}
                    </span>
                  ))}
                </div>
                <ul className="projects__outcomes" aria-label="Key outcomes">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="projects__outcome">
                      <Icons.check />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__cta">
          <Link to="/projects" className="btn btn-primary btn-lg">
            View All Projects
            <Icons.chevronRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
