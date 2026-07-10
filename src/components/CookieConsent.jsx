import { useState, useEffect } from 'react';
import { grantAnalyticsConsent, revokeAnalyticsConsent, getConsentStatus } from '../utils/analytics';
import { Icon } from './Icons';
import './CookieConsent.css';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = getConsentStatus();
    if (consent === 'pending') {
      setShowBanner(true);
    } else if (consent === 'granted') {
      setPreferences(prev => ({ ...prev, analytics: true, marketing: true }));
    } else if (consent === 'denied') {
      setPreferences(prev => ({ ...prev, analytics: false, marketing: false }));
    }
  }, []);

  const acceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    grantAnalyticsConsent();
    localStorage.setItem('cookie-preferences', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setShowBanner(false);
  };

  const rejectAll = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    revokeAnalyticsConsent();
    localStorage.setItem('cookie-preferences', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setShowBanner(false);
  };

  const savePreferences = () => {
    const newPrefs = { necessary: true, ...preferences };
    localStorage.setItem('cookie-preferences', JSON.stringify(newPrefs));
    if (preferences.analytics) {
      grantAnalyticsConsent();
    } else {
      revokeAnalyticsConsent();
    }
    setShowBanner(false);
    setShowSettings(false);
  };

  const toggleSetting = (key) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div className="cookie-consent__overlay" onClick={() => setShowBanner(false)} />

      <div className="cookie-consent__panel">
        <div className="cookie-consent__header">
          <h3 id="cookie-title" className="cookie-consent__title">Cookie Preferences</h3>
          <button
            className="cookie-consent__close"
            onClick={() => setShowBanner(false)}
            aria-label="Close cookie preferences"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <p id="cookie-description" className="cookie-consent__description">
          We use cookies to enhance your experience, analyze site traffic, and personalize content.
          By clicking "Accept All", you consent to our use of cookies. You can customize your preferences
          or reject non-essential cookies.
        </p>

        <div className="cookie-consent__actions">
          <button className="btn btn-outline cookie-consent__reject" onClick={rejectAll}>
            Reject All
          </button>
          <button className="btn btn-primary cookie-consent__accept" onClick={acceptAll}>
            Accept All
          </button>
        </div>

        <button
          className="cookie-consent__customize"
          onClick={() => setShowSettings(true)}
          aria-expanded={showSettings}
          aria-controls="cookie-settings"
        >
          Customize Settings
          <Icon name="chevronDown" size={16} />
        </button>

        {showSettings && (
          <div id="cookie-settings" className="cookie-consent__settings" role="region" aria-label="Cookie categories">
            <div className="cookie-consent__category">
              <div className="cookie-consent__category-header">
                <div>
                  <h4 className="cookie-consent__category-title">Necessary Cookies</h4>
                  <p className="cookie-consent__category-desc">Required for the website to function properly. Cannot be disabled.</p>
                </div>
                <label className="cookie-consent__toggle">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                  />
                  <span className="cookie-consent__toggle-slider" />
                </label>
              </div>
            </div>

            <div className="cookie-consent__category">
              <div className="cookie-consent__category-header">
                <div>
                  <h4 className="cookie-consent__category-title">Analytics Cookies</h4>
                  <p className="cookie-consent__category-desc">Help us understand how visitors interact with our website (Google Analytics).</p>
                </div>
                <label className="cookie-consent__toggle">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => toggleSetting('analytics')}
                  />
                  <span className="cookie-consent__toggle-slider" />
                </label>
              </div>
            </div>

            <div className="cookie-consent__category">
              <div className="cookie-consent__category-header">
                <div>
                  <h4 className="cookie-consent__category-title">Marketing Cookies</h4>
                  <p className="cookie-consent__category-desc">Used to deliver personalized advertisements and track campaign effectiveness.</p>
                </div>
                <label className="cookie-consent__toggle">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => toggleSetting('marketing')}
                  />
                  <span className="cookie-consent__toggle-slider" />
                </label>
              </div>
            </div>

            <div className="cookie-consent__settings-actions">
              <button className="btn btn-primary" onClick={savePreferences}>
                Save Preferences
              </button>
            </div>
          </div>
        )}

        <div className="cookie-consent__links">
          <a href="/privacy" className="cookie-consent__link">Privacy Policy</a>
          <a href="/cookies" className="cookie-consent__link">Cookie Policy</a>
          <a href="/terms" className="cookie-consent__link">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;