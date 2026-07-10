import { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '../components/Icons';
import './HeroBackground.css';

const HERO_MEDIA = [
  { type: 'image', src: '/images/hero-1.svg', alt: 'PES team at oil & gas facility' },
  { type: 'image', src: '/images/hero-2.svg', alt: 'Engineering design review meeting' },
  { type: 'image', src: '/images/hero-3.svg', alt: 'Pipeline construction site' },
  { type: 'image', src: '/images/hero-4.svg', alt: 'Procurement logistics warehouse' },
];

export function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_MEDIA.length);
    }, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else if (!prefersReducedMotion) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % HERO_MEDIA.length);
        }, 8000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [prefersReducedMotion]);

  const currentMedia = HERO_MEDIA[currentIndex];

  return (
    <div className="hero-background" role="img" aria-label="PES project showcase">
      <div className="hero-background__media">
        <img
          className={`hero-background__image ${isLoaded ? 'loaded' : ''}`}
          src={currentMedia.src}
          alt={currentMedia.alt}
          loading="eager"
          onLoad={() => setIsLoaded(true)}
          onLoadStart={() => setIsLoaded(false)}
        />
      </div>

      <div className="hero-background__overlay" aria-hidden="true" />

      {!isLoaded && (
        <div className="hero-background__loader" aria-hidden="true">
          <div className="hero-background__spinner" />
        </div>
      )}

      <div className="hero-background__indicators" aria-label="Slide indicator" aria-live="off">
        {HERO_MEDIA.map((_, index) => (
          <button
            key={index}
            className={`hero-background__indicator ${index === currentIndex ? 'hero-background__indicator--active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBackground;