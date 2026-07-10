import { Icons } from '../components/Icons';
import { WHO_Its_FOR } from '../constants/content';
import './WhoItsFor.css';

const audienceIconMap = {
  epc: Icons.epc,
  owner: Icons.owner,
  fabricator: Icons.fabricator,
  government: Icons.government,
};

export function WhoItsFor() {
  return (
    <section className="who-its-for section" aria-labelledby="who-its-for-heading">
      <div className="container">
        <header className="section-header">
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhoItsFor;