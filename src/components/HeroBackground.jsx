import { useState, useEffect, useRef, useCallback } from 'react';
import './HeroBackground.css';

const HERO_MEDIA = [
  {
    type: 'video',
    src: '/videos/hero-1.mp4',
    alt: 'Engineers pointing to blueprints on site',
    transition: 'fade',
  },
  {
    type: 'video',
    src: '/videos/hero-2.mp4',
    alt: 'Aerial view of buildings under construction',
    transition: 'slide-left',
  },
  {
    type: 'video',
    src: '/videos/hero-3.mp4',
    alt: 'Building frames at a construction site',
    transition: 'zoom',
  },
  {
    type: 'video',
    src: '/videos/hero-4.mp4',
    alt: 'Workers checking blueprints at construction site',
    transition: 'slide-right',
  },
  {
    type: 'video',
    src: '/videos/hero-5.mp4',
    alt: 'Workers pouring concrete on site',
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
  const videoRefs = useRef({});

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

  useEffect(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        if (video.dataset.index === String(currentIndex)) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  const currentMedia = HERO_MEDIA[currentIndex];

  return (
    <div className="hero-background" role="img" aria-label="PES project showcase">
      {prevIndex !== null && (
        <div className={`hero-background__slide hero-background__slide--out hero-background__slide--${HERO_MEDIA[prevIndex].transition}`} key={`prev-${prevIndex}`}>
          <video
            className="hero-background__video"
            src={HERO_MEDIA[prevIndex].src}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
      )}

      <div className={`hero-background__slide hero-background__slide--in hero-background__slide--${currentMedia.transition} ${isLoaded ? 'hero-background__slide--visible' : ''}`} key={`current-${currentIndex}`}>
        <video
          className="hero-background__video"
          ref={(el) => { videoRefs.current[currentIndex] = el; if (el) el.dataset.index = currentIndex; }}
          src={currentMedia.src}
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setIsLoaded(true)}
          aria-hidden="true"
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
