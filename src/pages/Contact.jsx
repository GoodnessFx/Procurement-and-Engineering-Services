import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BackToTop } from '../components/BackToTop';
import { CookieConsent } from '../components/CookieConsent';
import { Icons } from '../components/Icons';
import { SITE_CONFIG, CONTACT_INFO } from '../constants/content';
import { trackFormSubmit } from '../utils/analytics';
import { isValidEmail, isValidPhone } from '../utils/helpers';
import './Contact.css';

const SERVICE_OPTIONS = [
  { value: 'procurement', label: 'Strategic Procurement' },
  { value: 'engineering', label: 'Engineering Services' },
  { value: 'project-management', label: 'Project Management & Controls' },
  { value: 'inspection', label: 'Inspection & QA/QC' },
  { value: 'expediting', label: 'Expediting & Logistics' },
  { value: 'manpower', label: 'Technical Manpower Supply' },
  { value: 'general', label: 'General Inquiry' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length >= 2 ? '' : 'Name must be at least 2 characters';
      case 'email':
        return isValidEmail(value) ? '' : 'Please enter a valid email address';
      case 'phone':
        return value.trim() ? (isValidPhone(value) ? '' : 'Please enter a valid phone number') : '';
      case 'service':
        return value ? '' : 'Please select a service';
      case 'message':
        return value.trim().length >= 20 ? '' : 'Message must be at least 20 characters';
      default:
        return '';
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    if (!isValid) return;
    setStatus('submitting');
    trackFormSubmit('contact');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        setTouched({});
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (name) => `form__input ${touched[name] && errors[name] ? 'form__input--error' : ''}`;

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <header className="page-hero page-hero--dark">
          <img className="page-hero__bg-image" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="" />
          <div className="page-hero__bg-overlay" />
          <div className="container">
            <nav className="breadcrumb breadcrumb--light" aria-label="Breadcrumb">
              <Link to="/" className="breadcrumb__item">Home</Link>
              <Icons.chevronRight className="breadcrumb__separator" aria-hidden="true" />
              <span className="breadcrumb__item breadcrumb__item--current">Contact</span>
            </nav>
            <h1 className="page-hero__title page-hero__title--light">Get in Touch</h1>
            <p className="page-hero__subtitle page-hero__subtitle--light">
              Have a project in mind? Need procurement support or engineering expertise?
              Our team is ready to discuss your requirements.
            </p>
          </div>
        </header>

        <section className="contact section" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact__grid">
              <div className="contact__info">
                <h2 id="contact-heading" className="contact__title">Contact Information</h2>
                <p className="contact__description">
                  Choose the most convenient way to reach us. We're available
                  Monday to Friday, 8:00–18:00 WAT, and Saturday 9:00–14:00 WAT.
                </p>

                <div className="contact__methods">
                  <a href={`tel:${SITE_CONFIG.phoneClean}`} className="contact__method">
                    <div className="contact__method-icon">
                      <Icons.phoneIcon />
                    </div>
                    <div className="contact__method-content">
                      <span className="contact__method-label">Call Us</span>
                      <span className="contact__method-value">{SITE_CONFIG.phone}</span>
                    </div>
                  </a>

                  <a href={`mailto:${SITE_CONFIG.email}`} className="contact__method">
                    <div className="contact__method-icon">
                      <Icons.mail />
                    </div>
                    <div className="contact__method-content">
                      <span className="contact__method-label">Email Us</span>
                      <span className="contact__method-value">{SITE_CONFIG.email}</span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                    className="contact__method contact__method--whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="contact__method-icon">
                      <Icons.whatsapp />
                    </div>
                    <div className="contact__method-content">
                      <span className="contact__method-label">WhatsApp</span>
                      <span className="contact__method-value">Chat Now</span>
                    </div>
                  </a>
                </div>

                <div className="contact__offices">
                  <h3 className="contact__offices-title">Our Offices</h3>
                  <div className="contact__offices-grid">
                    {CONTACT_INFO.offices.map((office) => (
                      <address key={office.city} className="contact__office">
                        <div className="contact__office-header">
                          <Icons.locationIcon className="contact__office-icon" aria-hidden="true" />
                          <div>
                            <span className="contact__office-city">{office.city}</span>
                            {office.country && <span className="contact__office-country">{office.country}</span>}
                          </div>
                        </div>
                        <p className="contact__office-address">{office.address}</p>
                        {office.phone && (
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="contact__office-phone">
                            {office.phone}
                          </a>
                        )}
                        {office.email && (
                          <a href={`mailto:${office.email}`} className="contact__office-email">
                            {office.email}
                          </a>
                        )}
                      </address>
                    ))}
                  </div>
                </div>
              </div>

              <div className="contact__form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h2 className="contact-form__title">Send Us a Message</h2>

                  <div className="form__grid">
                    <div className="form__field">
                      <label htmlFor="name" className="form__label">
                        Full Name <span className="form__required" aria-hidden="true">*</span>
                      </label>
                      <input type="text" id="name" name="name" className={inputClass('name')} value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="John Doe" required autoComplete="name" aria-describedby={touched.name && errors.name ? 'name-error' : undefined} aria-invalid={touched.name && !!errors.name} />
                      {touched.name && errors.name && <p id="name-error" className="form__error" role="alert">{errors.name}</p>}
                    </div>

                    <div className="form__field">
                      <label htmlFor="email" className="form__label">
                        Email <span className="form__required" aria-hidden="true">*</span>
                      </label>
                      <input type="email" id="email" name="email" className={inputClass('email')} value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="john@company.com" required autoComplete="email" aria-describedby={touched.email && errors.email ? 'email-error' : undefined} aria-invalid={touched.email && !!errors.email} />
                      {touched.email && errors.email && <p id="email-error" className="form__error" role="alert">{errors.email}</p>}
                    </div>

                    <div className="form__field">
                      <label htmlFor="phone" className="form__label">Phone / WhatsApp</label>
                      <input type="tel" id="phone" name="phone" className={inputClass('phone')} value={formData.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+234 800 737 0000" autoComplete="tel" aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined} aria-invalid={touched.phone && !!errors.phone} />
                      {touched.phone && errors.phone && <p id="phone-error" className="form__error" role="alert">{errors.phone}</p>}
                    </div>

                    <div className="form__field">
                      <label htmlFor="company" className="form__label">Company / Organization</label>
                      <input type="text" id="company" name="company" className={inputClass('company')} value={formData.company} onChange={handleChange} onBlur={handleBlur} placeholder="ABC Energy Ltd" autoComplete="organization" />
                    </div>

                    <div className="form__field">
                      <label htmlFor="service" className="form__label">
                        Service Needed <span className="form__required" aria-hidden="true">*</span>
                      </label>
                      <select id="service" name="service" className={inputClass('service')} value={formData.service} onChange={handleChange} onBlur={handleBlur} required aria-describedby={touched.service && errors.service ? 'service-error' : undefined} aria-invalid={touched.service && !!errors.service}>
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      {touched.service && errors.service && <p id="service-error" className="form__error" role="alert">{errors.service}</p>}
                    </div>
                  </div>

                  <div className="form__field">
                    <label htmlFor="message" className="form__label">
                      Message <span className="form__required" aria-hidden="true">*</span>
                    </label>
                    <textarea id="message" name="message" className={inputClass('message')} value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={5} placeholder="Tell us about your project, timeline, and any specific requirements..." required aria-describedby={touched.message && errors.message ? 'message-error' : undefined} aria-invalid={touched.message && !!errors.message} />
                    {touched.message && errors.message && <p id="message-error" className="form__error" role="alert">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg contact-form__submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <><span className="btn__spinner" aria-hidden="true" /> Sending...</>
                    ) : (
                      <><Icons.paperPlane /> Send Message</>
                    )}
                  </button>

                  {status === 'success' && (
                    <div className="contact-form__success" role="status" aria-live="polite">
                      <Icons.check className="contact-form__success-icon" />
                      <h3 className="contact-form__success-title">Message Sent Successfully</h3>
                      <p className="contact-form__success-message">
                        Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
                      </p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="contact-form__error" role="alert">
                      <Icons.alert className="contact-form__error-icon" />
                      <p>Something went wrong. Please try again or contact us directly at {SITE_CONFIG.email}.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieConsent />
    </>
  );
}

export default Contact;
