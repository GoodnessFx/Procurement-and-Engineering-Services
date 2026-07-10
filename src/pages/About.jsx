import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { CookieConsent } from '../components/CookieConsent';
import { Icons } from '../components/Icons';
import { SITE_CONFIG, TRUST_INDICATORS } from '../constants/content';
import './About.css';

const valueIconMap = {
  shield: Icons.shield,
  award: Icons.award,
  users: Icons.users,
  globe: Icons.globe,
};

export function About() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <header className="page-hero">
          <div className="page-hero__bg" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb__item">Home</Link>
              <Icons.chevronRight className="breadcrumb__separator" />
              <span className="breadcrumb__item breadcrumb__item--current">About Us</span>
            </nav>
            <h1 className="page-hero__title">About PES</h1>
            <p className="page-hero__subtitle">
              15+ years of procurement and engineering excellence across West Africa's energy sector.
            </p>
          </div>
        </header>

        <section className="about-mission section" aria-labelledby="mission-heading">
          <div className="container">
            <div className="about-mission__grid">
              <div className="about-mission__content">
                <h2 id="mission-heading" className="about-mission__title">
                  Our Mission
                </h2>
                <p className="about-mission__text">
                  To be the most trusted procurement and engineering partner for capital projects
                  across West Africa — delivering equipment, materials, and technical services that
                  keep projects on schedule and on budget.
                </p>
                <p className="about-mission__text">
                  We bridge the gap between global OEM supply chains and local project execution.
                  Our team combines international procurement expertise with deep knowledge of
                  West African regulatory environments, port operations, and vendor ecosystems.
                </p>
                <Link to="/services" className="btn btn-primary">
                  Explore Our Services
                  <Icons.arrowRight />
                </Link>
              </div>
              <div className="about-mission__image" aria-hidden="true">
                <div className="about-mission__placeholder">
                  <Icons.building />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-values section" aria-labelledby="values-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="values-heading" className="section-title">Our Values</h2>
              <p className="section-subtitle">
                The principles that guide every decision and interaction.
              </p>
            </header>

            <div className="about-values__grid">
              {[
                { icon: 'shield', title: 'Integrity', desc: 'Transparent pricing, honest timelines, and ethical conduct in every engagement.' },
                { icon: 'award', title: 'Excellence', desc: 'ISO-certified processes, certified personnel, and continuous improvement.' },
                { icon: 'users', title: 'Partnership', desc: 'Long-term relationships built on reliability, accountability, and shared success.' },
                { icon: 'globe', title: 'Local Expertise', desc: 'Deep understanding of West African regulations, ports, and vendor landscapes.' },
              ].map((value) => {
                const IconComponent = valueIconMap[value.icon] || Icons.building;
                return (
                  <article key={value.title} className="value-card">
                    <div className="value-card__icon">
                      <IconComponent />
                    </div>
                    <h3 className="value-card__title">{value.title}</h3>
                    <p className="value-card__description">{value.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about-leadership section" aria-labelledby="leadership-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="leadership-heading" className="section-title">Leadership Team</h2>
              <p className="section-subtitle">
                Experienced professionals with decades of combined industry experience.
              </p>
            </header>

            <div className="about-leadership__grid">
              {[
                { name: 'Adebayo Olufemi', role: 'Managing Director', bio: '20+ years in oil & gas procurement across West Africa. Former Shell and Total supply chain lead.', avatar: 'AO' },
                { name: 'Kwame Asante', role: 'Technical Director', bio: 'Chartered Engineer with 18 years in FEED, detailed design, and project execution for LNG and power projects.', avatar: 'KA' },
                { name: 'Fatou Diop', role: 'Operations Director (CI/SN)', bio: 'Regional operations expert fluent in French/English. 15 years managing cross-border logistics and customs.', avatar: 'FD' },
                { name: 'Chinedu Okonkwo', role: 'QA/QC Manager', bio: 'CSWIP Senior Welding Inspector & API 510/570/653 certified. Leads inspection programs for major turnarounds.', avatar: 'CO' },
              ].map((leader) => (
                <article key={leader.name} className="leader-card">
                  <div className="leader-card__avatar" aria-hidden="true">
                    {leader.avatar}
                  </div>
                  <h3 className="leader-card__name">{leader.name}</h3>
                  <p className="leader-card__role">{leader.role}</p>
                  <p className="leader-card__bio">{leader.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-certifications section" aria-labelledby="cert-heading">
          <div className="container">
            <header className="section-header">
              <h2 id="cert-heading" className="section-title">Certifications & Compliance</h2>
              <p className="section-subtitle">
                Independently verified quality, safety, and environmental management systems.
              </p>
            </header>

            <div className="about-certifications__grid">
              {TRUST_INDICATORS.certifications.map((cert) => (
                <article key={cert.name} className="cert-card">
                  <div className="cert-card__icon">
                    <Icons.shield />
                  </div>
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <p className="cert-card__valid">
                    <Icons.clock />
                    Valid until {new Date(cert.validUntil).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta section" aria-labelledby="about-cta-heading">
          <div className="container">
            <div className="about-cta__card">
              <h2 id="about-cta-heading" className="about-cta__title">
                Let's Work Together
              </h2>
              <p className="about-cta__description">
                Whether you're planning a major capital project or need ongoing procurement support,
                our team is ready to discuss how we can add value.
              </p>
              <div className="about-cta__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get in Touch
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

export default About;