import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { CookieConsent } from '../components/CookieConsent';
import { Hero } from '../sections/Hero';
import { WhatWeDo } from '../sections/WhatWeDo';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import { WhoItsFor } from '../sections/WhoItsFor';
import { Projects } from '../sections/Projects';
import { TrustIndicators } from '../sections/TrustIndicators';
import { FAQ } from '../sections/FAQ';
import { CTA } from '../sections/CTA';
import './Home.css';

export function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <WhatWeDo />
        <WhyChooseUs />
        <WhoItsFor />
        <Projects />
        <TrustIndicators />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </>
  );
}

export default Home;