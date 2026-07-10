import { useState, useEffect } from 'react';
import { Icon } from './Icons';
import { SITE_CONFIG } from '../constants/content';
import { trackWhatsAppClick } from '../utils/analytics';
import './WhatsAppButton.css';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulse, setIsPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsPulse(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e) => {
    trackWhatsAppClick('floating_button');
  };

  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
      className={`whatsapp-button ${isVisible ? 'whatsapp-button--visible' : ''} ${isPulse ? 'whatsapp-button--pulse' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={handleClick}
      onMouseEnter={() => setIsPulse(false)}
    >
      <span className="whatsapp-button__icon" aria-hidden="true">
        <Icon name="whatsapp" size={28} />
      </span>
      <span className="whatsapp-button__text">Chat with us</span>
      <span className="whatsapp-button__badge" aria-hidden="true">
        <Icon name="chevronRight" size={16} />
      </span>
    </a>
  );
}

export default WhatsAppButton;