import { Icons } from '../components/Icons';
import { TRUST_INDICATORS } from '../constants/content';
import './TrustIndicators.css';

export function TrustIndicators() {
  return (
    <section className="trust-indicators section" aria-labelledby="trust-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="trust-heading" className="section-title">
            Trusted Across West Africa
          </h2>
          <p className="section-subtitle">
            Our track record speaks for itself — 15+ years, 500+ projects,
            and a commitment to quality that's earned industry certifications.
          </p>
        </header>

        <div className="trust-indicators__stats" role="list" aria-label="Key statistics">
          {TRUST_INDICATORS.stats.map((stat) => (
            <div key={stat.label} className="trust-indicators__stat" role="listitem">
              <span className="trust-indicators__value">{stat.value}</span>
              <span className="trust-indicators__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="trust-indicators__divider" aria-hidden="true" />

        <div className="trust-indicators__certifications" aria-label="Certifications">
          <h3 className="trust-indicators__cert-title">Certifications & Compliance</h3>
          <div className="trust-indicators__cert-grid">
            {TRUST_INDICATORS.certifications.map((cert) => (
              <div key={cert.name} className="trust-indicators__cert">
                <div className="trust-indicators__cert-icon">
                  <Icons.shield />
                </div>
                <div className="trust-indicators__cert-info">
                  <h4 className="trust-indicators__cert-name">{cert.name}</h4>
                  <p className="trust-indicators__cert-issuer">{cert.issuer}</p>
                  <p className="trust-indicators__cert-valid">
                    <Icons.clock />
                    Valid until {new Date(cert.validUntil).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trust-indicators__divider" aria-hidden="true" />

        <div className="trust-indicators__clients" aria-label="Key clients">
          <h3 className="trust-indicators__clients-title">Selected Clients & Partners</h3>
          <div className="trust-indicators__clients-list">
            {TRUST_INDICATORS.clients.map((client) => (
              <span key={client} className="trust-indicators__client">
                {client}
              </span>
            ))}
          </div>
        </div>

        <div className="trust-indicators__affiliations" aria-label="Industry affiliations">
          <h3 className="trust-indicators__affiliations-title">Industry Affiliations</h3>
          <ul className="trust-indicators__affiliations-list">
            {TRUST_INDICATORS.affiliations.map((aff) => (
              <li key={aff} className="trust-indicators__affiliation">
                <Icons.check />
                <span>{aff}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;