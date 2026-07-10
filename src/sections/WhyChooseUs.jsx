import { Icons } from '../components/Icons';
import { WHY_CHOOSE_US } from '../constants/content';
import './WhyChooseUs.css';

const reasonIconMap = {
  regional: Icons.regional,
  certified: Icons.certified,
  network: Icons.network,
  digital: Icons.digital,
  compliance: Icons.compliance,
  accountability: Icons.accountability,
};

export function WhyChooseUs() {
  return (
    <section className="why-choose-us section" aria-labelledby="why-choose-us-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Why PES</span>
          <h2 id="why-choose-us-heading" className="section-title">
            Why Choose PES
          </h2>
          <p className="section-subtitle">
            Six reasons clients across West Africa trust us as their long-term partner.
          </p>
        </header>

        <div className="why-choose-us__grid">
          {WHY_CHOOSE_US.map((reason) => {
            const IconComponent = reasonIconMap[reason.icon] || Icons.shield;
            return (
              <article key={reason.id} className="why-choose-us__card">
                <div className="why-choose-us__icon" aria-hidden="true">
                  <IconComponent />
                </div>
                <h3 className="why-choose-us__title">{reason.title}</h3>
                <p className="why-choose-us__description">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
