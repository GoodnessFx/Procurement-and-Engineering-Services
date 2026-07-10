import { useState } from 'react';
import { Icons } from '../components/Icons';
import { SITE_CONFIG } from '../constants/content';
import { trackFormSubmit } from '../utils/analytics';
import { isValidEmail, isValidPhone } from '../utils/helpers';
import './ContactForm.css';

const SERVICE_OPTIONS = [
  { value: 'procurement', label: 'Strategic Procurement' },
  { value: 'engineering', label: 'Engineering Services' },
  { value: 'project-management', label: 'Project Management & Controls' },
  { value: 'inspection', label: 'Inspection & QA/QC' },
  { value: 'expediting', label: 'Expediting & Logistics' },
  { value: 'manpower', label: 'Technical Manpower Supply' },
  { value: 'general', label: 'General Inquiry' },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [touched, setTouched] = useState({});

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
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

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
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
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
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <div className="form__field">
          <label htmlFor="name" className="form__label">
            Full Name <span className="form__required" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={inputClass('name')}
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Doe"
            required
            autoComplete="name"
            aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
            aria-invalid={touched.name && !!errors.name}
          />
          {touched.name && errors.name && (
            <p id="name-error" className="form__error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="form__field">
          <label htmlFor="email" className="form__label">
            Email <span className="form__required" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={inputClass('email')}
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@company.com"
            required
            autoComplete="email"
            aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
            aria-invalid={touched.email && !!errors.email}
          />
          {touched.email && errors.email && (
            <p id="email-error" className="form__error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="form__field">
          <label htmlFor="phone" className="form__label">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass('phone')}
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+234 800 737 0000"
            autoComplete="tel"
            aria-describedby={touched.phone && errors.phone ? 'phone-error' : undefined}
            aria-invalid={touched.phone && !!errors.phone}
          />
          {touched.phone && errors.phone && (
            <p id="phone-error" className="form__error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="form__field">
          <label htmlFor="service" className="form__label">
            Service Needed <span className="form__required" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            className={inputClass('service')}
            value={formData.service}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-describedby={touched.service && errors.service ? 'service-error' : undefined}
            aria-invalid={touched.service && !!errors.service}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {touched.service && errors.service && (
            <p id="service-error" className="form__error" role="alert">
              {errors.service}
            </p>
          )}
        </div>

        <div className="form__field form__field--full">
          <label htmlFor="message" className="form__label">
            Message <span className="form__required" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className={inputClass('message')}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            placeholder="Tell us about your project, timeline, and any specific requirements..."
            required
            aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
            aria-invalid={touched.message && !!errors.message}
          />
          {touched.message && errors.message && (
            <p id="message-error" className="form__error" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-lg contact-form__submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <span className="btn__spinner" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Icons.paperPlane />
            Send Inquiry
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="contact-form__success" role="status" aria-live="polite">
          <Icons.check className="contact-form__success-icon" />
          <h3 className="contact-form__success-title">Message Sent</h3>
          <p className="contact-form__success-message">
            Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
            For urgent matters, please contact us directly via WhatsApp.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="contact-form__error" role="alert" aria-live="assertive">
          <Icons.alert className="contact-form__error-icon" />
          <p>Something went wrong. Please try again or contact us directly at {SITE_CONFIG.email} or WhatsApp.</p>
        </div>
      )}

      <p className="contact-form__note">
        By submitting this form, you agree to our <a href="/privacy">Privacy Policy</a> and consent to us contacting you regarding your inquiry.
      </p>
    </form>
  );
}

export default ContactForm;