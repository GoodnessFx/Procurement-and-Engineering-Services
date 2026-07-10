import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { CookieConsent } from '../components/CookieConsent';
import { Icons } from '../components/Icons';
import { SITE_CONFIG } from '../constants/content';
import './Insights.css';

const INSIGHTS = [
  {
    id: 'nigerian-content-compliance',
    category: 'Regulatory',
    title: 'Navigating Nigerian Content Compliance in 2024',
    excerpt: 'The NOGICD Act continues to evolve. Here\'s what EPC contractors and owner-operators need to know about local content targets, personnel quotas, and in-country fabrication requirements.',
    date: '2024-03-15',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    author: 'Adebayo Olufemi',
  },
  {
    id: 'ndt-technologies',
    category: 'Technical',
    title: 'Advanced NDT Methods: PAUT & TOFD vs Traditional Radiography',
    excerpt: 'Phased Array Ultrasonic Testing and Time-of-Flight Diffraction are replacing conventional RT in many applications. We compare detection capabilities, speed, and cost implications.',
    date: '2024-02-28',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    author: 'Chinedu Okonkwo',
  },
  {
    id: 'procurement-least-africa',
    category: 'Industry',
    title: 'Procurement Lead Times Across West Africa: A 2024 Benchmark',
    excerpt: 'We analyzed 200+ purchase orders across Nigeria, Ghana, Côte d\'Ivoire, and Senegal to benchmark lead times by equipment category. The results may surprise you.',
    date: '2024-02-10',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
    author: 'Kwame Asante',
  },
  {
    id: 'ghana-local-content',
    category: 'Regulatory',
    title: 'Ghana Local Content Requirements: What International Contractors Need to Know',
    excerpt: 'Ghana\'s petroleum sector local content framework differs significantly from Nigeria\'s. We break down the key requirements, compliance strategies, and common pitfalls.',
    date: '2024-01-22',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80',
    author: 'Fatou Diop',
  },
  {
    id: 'safety-turnaround',
    category: 'Best Practices',
    title: 'Zero-Incident Turnarounds: Lessons from 180,000 Man-Hours',
    excerpt: 'Our refinery turnaround in Abidjan achieved zero safety incidents across 180,000 man-hours. Here are the systems, culture, and processes that made it possible.',
    date: '2024-01-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    author: 'Chinedu Okonkwo',
  },
  {
    id: 'digital-procurement',
    category: 'Technology',
    title: 'Digital Procurement Portals: Why Real-Time Visibility Matters',
    excerpt: 'Email chains and spreadsheets don\'t scale. We built a client portal for PO tracking, expediting reports, and inspection certificates — here\'s how it changed client relationships.',
    date: '2023-12-18',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    author: 'Adebayo Olufemi',
  },
];

const CATEGORY_COLORS = {
  Regulatory: '#C8962E',
  Technical: '#1B3A4B',
  Industry: '#2D6A4F',
  'Best Practices': '#7B2D8E',
  Technology: '#2563EB',
};

export function Insights() {
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
              <span className="breadcrumb__item breadcrumb__item--current">Insights</span>
            </nav>
            <h1 className="page-hero__title page-hero__title--light">News & Insights</h1>
            <p className="page-hero__subtitle page-hero__subtitle--light">
              Industry analysis, technical guides, and company updates from the PES team.
            </p>
          </div>
        </header>

        <section className="insights-listing section" aria-labelledby="insights-heading">
          <div className="container">
            <h2 id="insights-heading" className="sr-only">All Insights</h2>

            <div className="insights-grid">
              {INSIGHTS.map((article, index) => (
                <article key={article.id} className={`insight-card ${index === 0 ? 'insight-card--featured' : ''}`}>
                  <div className="insight-card__image-wrapper">
                    <img
                      className="insight-card__image"
                      src={article.image}
                      alt=""
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <span
                      className="insight-card__category"
                      style={{ background: CATEGORY_COLORS[article.category] || '#1B3A4B' }}
                    >
                      {article.category}
                    </span>
                  </div>
                  <div className="insight-card__content">
                    <div className="insight-card__meta">
                      <time className="insight-card__date" dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                      <span className="insight-card__read-time">{article.readTime}</span>
                    </div>
                    <h3 className="insight-card__title">{article.title}</h3>
                    <p className="insight-card__excerpt">{article.excerpt}</p>
                    <div className="insight-card__footer">
                      <span className="insight-card__author">By {article.author}</span>
                      <span className="insight-card__link">
                        Read More
                        <Icons.arrowRight />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="insights-cta section" aria-labelledby="insights-cta-heading">
          <div className="container">
            <div className="insights-cta__card">
              <h2 id="insights-cta-heading" className="insights-cta__title">Stay Informed</h2>
              <p className="insights-cta__description">
                Get the latest procurement insights, regulatory updates, and technical guides
                delivered to your inbox.
              </p>
              <div className="insights-cta__actions">
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Subscribe%20to%20PES%20Insights`}
                  className="btn btn-primary btn-lg"
                >
                  <Icons.mail />
                  Subscribe via Email
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to receive PES industry insights.")}`}
                  className="btn btn-whatsapp btn-lg"
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

export default Insights;
