const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

let consentGiven = false;
let queue = [];

export function initAnalytics() {
  if (typeof window === 'undefined') return;

  const storedConsent = localStorage.getItem('analytics-consent');
  if (storedConsent === 'granted') {
    consentGiven = true;
    loadGA();
    processQueue();
  }
}

export function grantAnalyticsConsent() {
  consentGiven = true;
  localStorage.setItem('analytics-consent', 'granted');
  loadGA();
  processQueue();
}

export function revokeAnalyticsConsent() {
  consentGiven = false;
  localStorage.setItem('analytics-consent', 'denied');
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }
}

function loadGA() {
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
}

function processQueue() {
  while (queue.length > 0) {
    const [event, params] = queue.shift();
    trackEvent(event, params);
  }
}

export function trackEvent(eventName, parameters = {}) {
  if (!consentGiven) {
    queue.push([eventName, parameters]);
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

export function trackPageView(url, title) {
  trackEvent('page_view', {
    page_location: url,
    page_title: title,
  });
}

export function trackWhatsAppClick(source) {
  trackEvent('whatsapp_click', { source });
}

export function trackFormSubmit(formName) {
  trackEvent('form_submit', { form_name: formName });
}

export function trackCTAClick(ctaName, location) {
  trackEvent('cta_click', { cta_name: ctaName, location });
}

export function trackServiceInquiry(serviceId) {
  trackEvent('service_inquiry', { service_id: serviceId });
}

export function hasConsent() {
  return consentGiven;
}

export function getConsentStatus() {
  return localStorage.getItem('analytics-consent') || 'pending';
}