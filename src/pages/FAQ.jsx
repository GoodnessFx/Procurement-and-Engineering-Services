import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { CookieConsent } from '../components/CookieConsent';
import { FAQ } from '../sections/FAQ';
import './FAQ.css';

export function FAQPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <header className="page-hero">
          <div className="page-hero__bg" aria-hidden="true" />
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="breadcrumb__item">Home</a>
              <span className="breadcrumb__separator" aria-hidden="true">›</span>
              <span className="breadcrumb__item breadcrumb__item--current">FAQ</span>
            </nav>
            <h1 className="page-hero__title">Frequently Asked Questions</h1>
            <p className="page-hero__subtitle">
              Quick answers to common questions about our services, processes, and capabilities.
            </p>
          </div>
        </header>

        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </>
  );
}

export default FAQPage;