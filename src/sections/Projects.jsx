import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { PROJECTS } from '../constants/content';
import './Projects.css';

export function Projects() {
  return (
    <section className="projects section" aria-labelledby="projects-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="projects-heading" className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A selection of our recent work across West Africa's energy and infrastructure sectors.
          </p>
        </header>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__image" aria-hidden="true">
                <div className="project-card__placeholder">
                  <Icons.building />
                </div>
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
  );
}

export default Projects;