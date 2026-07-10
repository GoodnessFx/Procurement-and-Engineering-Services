import { useState } from 'react';
import { Icons } from '../components/Icons';
import { FAQS } from '../constants/content';
import './FAQ.css';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" aria-labelledby="faq-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Quick answers to common questions about our services, processes, and capabilities.
          </p>
        </header>

        <div className="faq__categories">
          {FAQS.map((category, catIndex) => (
            <div key={category.category} className="faq__category">
              <h3 className="faq__category-title">{category.category}</h3>
              <div className="faq__items">
                {category.questions.map((faq, qIndex) => (
                  <article key={`${catIndex}-${qIndex}`} className="faq__item">
                    <button
                      className={`faq__question ${openIndex === `${catIndex}-${qIndex}` ? 'faq__question--open' : ''}`}
                      onClick={() => toggleFAQ(`${catIndex}-${qIndex}`)}
                      aria-expanded={openIndex === `${catIndex}-${qIndex}`}
                      aria-controls={`faq-answer-${catIndex}-${qIndex}`}
                    >
                      <span className="faq__question-text">{faq.question}</span>
                      <Icons.chevronDown className="faq__icon" aria-hidden="true" />
                    </button>
                    <div
                      id={`faq-answer-${catIndex}-${qIndex}`}
                      className="faq__answer"
                      role="region"
                      aria-hidden={openIndex !== `${catIndex}-${qIndex}`}
                    >
                      <p className="faq__answer-text">{faq.answer}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="faq__cta">
          <p className="faq__cta-text">Didn't find what you're looking for?</p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
            <Icons.chevronRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;