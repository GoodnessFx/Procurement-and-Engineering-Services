import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initAnalytics } from './utils/analytics';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQPage } from './pages/FAQ';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

function App() {
  initAnalytics();

  console.log('[App] Rendering...');

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div style={{ background: 'red', color: 'white', padding: '20px', textAlign: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
          APP IS RENDERING - If you see this, React is working!
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;