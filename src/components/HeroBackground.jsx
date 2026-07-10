import { useState, useEffect, useRef, useCallback } from 'react';
import './HeroBackground.css';

const HERO_MEDIA = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    alt: 'Engineers reviewing technical drawings on site',
    transition: 'fade',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80',
    alt: 'Industrial equipment inspection at a processing facility',
    transition: 'slide-left',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80',
    alt: 'Procurement warehouse with organized industrial materials',
    transition: 'zoom',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80',
    alt: 'On-site consultation at an oil and gas facility',
    transition: 'slide-right',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1920&q=80',
    alt: 'Pipeline construction and maintenance',
    transition: 'fade',
  },
];

const TRANSITION_DURATION = 1200;
const SLIDE_INTERVAL = 7000;

export function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const goToSlide = useCallback((nextIndex) => {
    if (nextIndex === currentIndex || isTransitioning) return;
    setPrevIndex(currentIndex);
    setCurrentIndex(nextIndex);
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(null);
    }, TRANSITION_DURATION);
  }, [currentIndex, isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % HERO_MEDIA.length);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide, prefersReducedMotion]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else if (!prefersReducedMotion) {
        intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [nextSlide, prefersReducedMotion]);

  const currentMedia = HERO_MEDIA[currentIndex];

  return (
    <div className="hero-background" role="img" aria-label="PES project showcase">
      {prevIndex !== null && (
        <div className={`hero-background__slide hero-background__slide--out hero-background__slide--${HERO_MEDIA[prevIndex].transition}`} key={`prev-${prevIndex}`}>
          <img
            className="hero-background__image"
            src={HERO_MEDIA[prevIndex].src}
            alt={HERO_MEDIA[prevIndex].alt}
          />
        </div>
      )}

      <div className={`hero-background__slide hero-background__slide--in hero-background__slide--${currentMedia.transition} ${isLoaded ? 'hero-background__slide--visible' : ''}`} key={`current-${currentIndex}`}>
        <img
          className="hero-background__image"
          src={currentMedia.src}
          alt={currentMedia.alt}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className="hero-background__scrim" aria-hidden="true" />
      <div className="hero-background__vignette" aria-hidden="true" />

      {!isLoaded && (
        <div className="hero-background__loader" aria-hidden="true">
          <div className="hero-background__spinner" />
        </div>
      )}

      <div className="hero-background__indicators" aria-label="Slide indicators" aria-live="off">
        {HERO_MEDIA.map((media, index) => (
          <button
            key={index}
            className={`hero-background__indicator ${index === currentIndex ? 'hero-background__indicator--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`View slide ${index + 1}: ${media.alt}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBackground;
