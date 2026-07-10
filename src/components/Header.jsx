import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icons';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} role="banner">
      <div className="header__container container">
        <Link to="/" className="header__logo" aria-label="Procurement & Engineering Services - Home">
          <span className="header__logo-icon" aria-hidden="true">
            <Icon name="building" />
          </span>
          <span className="header__logo-text">PES</span>
          <span className="header__logo-tagline">Procurement & Engineering Services</span>
        </Link>

        <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`} role="navigation" aria-label="Main navigation">
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to} className="header__nav-item">
                <Link
                  to={item.to}
                  className={`header__nav-link ${location.pathname === item.to ? 'header__nav-link--active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a
            href={`https://wa.me/${'2348007370000'}?text=${encodeURIComponent("Hello PES team, I'd like to discuss a procurement or engineering project.")}`}
            className="btn btn-whatsapp header__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <Icon name="whatsapp" className="header__whatsapp-icon" />
            <span className="header__whatsapp-text">WhatsApp</span>
          </a>

          <button
            className="header__mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={isOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="header__overlay" onClick={() => setIsOpen(false)} aria-hidden="true" />
      )}
    </header>
  );
}

export default Header;