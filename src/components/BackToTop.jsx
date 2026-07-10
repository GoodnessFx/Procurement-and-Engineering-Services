import { useState, useEffect } from 'react';
import { Icon } from './Icons';
import './BackToTop.css';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      type="button"
    >
      <Icon name="chevronUp" className="back-to-top__icon" />
    </button>
  );
}

export default BackToTop;