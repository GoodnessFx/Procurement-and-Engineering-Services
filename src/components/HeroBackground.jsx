import { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '../components/Icons';
import './HeroBackground.css';

const HERO_MEDIA = [
  { type: 'video', src: '/videos/hero-1.mp4', poster: '/images/hero-1.jpg', alt: 'PES team at oil & gas facility' },
  { type: 'image', src: '/images/hero-2.jpg', alt: 'Engineering design review meeting' },
  { type: 'video', src: '/videos/hero-3.mp4', poster: '/images/hero-3.jpg', alt: 'Pipeline construction site' },
  { type: 'image', src: '/images/hero-4.jpg', alt: 'Procurement logistics warehouse' },
];

export function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const playVideo = useCallback((index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const pauseAllVideos = useCallback(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    intervalRef.current = setInterval(() => {
      pauseAllVideos();
      setCurrentIndex((prev) => (prev + 1) % HERO_MEDIA.length);
    }, 8000);

    playVideo(currentIndex);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      pauseAllVideos();
    };
  }, [currentIndex, prefersReducedMotion, playVideo, pauseAllVideos]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAllVideos();
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else if (!prefersReducedMotion) {
        playVideo(currentIndex);
        intervalRef.current = setInterval(() => {
          pauseAllVideos();
          setCurrentIndex((prev) => (prev + 1) % HERO_MEDIA.length);
        }, 8000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [currentIndex, prefersReducedMotion, playVideo, pauseAllVideos]);

  const currentMedia = HERO_MEDIA[currentIndex];

  return (
    <div className="hero-background" role="img" aria-label="PES project showcase">
      <div className="hero-background__media">
        {currentMedia.type === 'video' ? (
          <video
            ref={(el) => (videoRefs.current[currentIndex] = el)}
            className="hero-background__video"
            autoPlay
            muted
            loop
            playsInline
            poster={currentMedia.poster}
            aria-hidden="true"
            onLoadStart={() => setIsLoaded(false)}
            onCanPlay={() => setIsLoaded(true)}
          >
            <source src={currentMedia.src} type="video/mp4" />
          </video>
        ) : (
          <img
            className="hero-background__image"
            src={currentMedia.src}
            alt={currentMedia.alt}
            loading="eager"
            onLoad={() => setIsLoaded(true)}
          />
        )}
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
            onClick={() => {
              pauseAllVideos();
              setCurrentIndex(index);
            }}
            aria-label={`View slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBackground;