import { Icons } from '../components/Icons';
import { WHO_Its_FOR } from '../constants/content';
import { MediaContainer } from '../components/MediaContainer';
import './WhoItsFor.css';

const audienceIconMap = {
  epc: Icons.epc,
  owner: Icons.owner,
  fabricator: Icons.fabricator,
  government: Icons.government,
};

const audienceImages = {
  'epc-contractors': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80',
  'owner-operators': 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&q=80',
  'fabricators': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80',
  'government': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
};

export function WhoItsFor() {
  return (
    <section className="who-its-for section" aria-labelledby="who-its-for-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Who We Serve</span>
          <h2 id="who-its-for-heading" className="section-title">
            Built for Your Role in the Value Chain
          </h2>
          <p className="section-subtitle">
            We tailor our services to the specific challenges and objectives of each stakeholder type.
          </p>
        </header>

        <div className="who-its-for__grid">
          {WHO_Its_FOR.map((item) => {
            const IconComponent = audienceIconMap[item.id] || Icons.building;
            return (
              <article key={item.id} className="who-its-for__card">
                <div className="who-its-for__card-image">
                  <MediaContainer
                    src={audienceImages[item.id]}
                    alt={item.title}
                    aspectRatio="16/9"
                    hover
                    rounded
                  />
                </div>
                <div className="who-its-for__card-content">
                  <div className="who-its-for__icon" aria-hidden="true">
                    <IconComponent />
                  </div>
                  <h3 className="who-its-for__title">{item.title}</h3>
                  <p className="who-its-for__description">{item.description}</p>
                  <ul className="who-its-for__outcomes" aria-label="Key outcomes">
                    {item.outcomes.map((outcome, i) => (
                      <li key={i} className="who-its-for__outcome">
                        <Icons.check />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhoItsFor;
