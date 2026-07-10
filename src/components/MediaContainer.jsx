import { useState, useRef } from 'react';
import './MediaContainer.css';

export function MediaContainer({
  src,
  alt = '',
  videoSrc,
  poster,
  aspectRatio = '16/9',
  className = '',
  overlay = false,
  overlayOpacity = 0.4,
  hover = false,
  rounded = true,
  children,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const isVideo = videoSrc && !videoError;

  return (
    <div
      className={`media-container ${rounded ? 'media-container--rounded' : ''} ${hover ? 'media-container--hover' : ''} ${className}`}
      style={{ aspectRatio }}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          className={`media-container__media ${isLoaded ? 'media-container__media--loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          poster={poster || src}
          onLoadStart={() => setIsLoaded(false)}
          onCanPlay={() => setIsLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          className={`media-container__media ${isLoaded ? 'media-container__media--loaded' : ''}`}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      )}

      {!isLoaded && (
        <div className="media-container__skeleton" aria-hidden="true">
          <div className="media-container__pulse" />
        </div>
      )}

      {overlay && (
        <div
          className="media-container__overlay"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {children && <div className="media-container__children">{children}</div>}
    </div>
  );
}

export function ImageGrid({ images, columns = 3, gap = 'md', className = '' }) {
  return (
    <div
      className={`image-grid image-grid--${columns} image-grid--gap-${gap} ${className}`}
      role="list"
    >
      {images.map((image, index) => (
        <div key={index} className="image-grid__item" role="listitem">
          <MediaContainer
            src={image.src}
            alt={image.alt || ''}
            aspectRatio={image.aspectRatio || '4/3'}
            hover
            rounded
          />
          {image.caption && (
            <p className="image-grid__caption">{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default MediaContainer;
