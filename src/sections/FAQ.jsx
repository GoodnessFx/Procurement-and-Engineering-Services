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
    <section className="faq section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Support</span>
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
                {category.questions.map((faq, qIndex) => {
                  const faqId = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === faqId;
                  return (
                    <article key={faqId} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                      <button
                        className="faq__question"
                        onClick={() => toggleFAQ(faqId)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faqId}`}
                      >
                        <span className="faq__question-text">{faq.question}</span>
                        <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`}>
                          <Icons.plus />
                        </span>
                      </button>
                      <div
                        id={`faq-answer-${faqId}`}
                        className="faq__answer"
                        role="region"
                        aria-hidden={!isOpen}
                      >
                        <p className="faq__answer-text">{faq.answer}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="faq__cta">
          <p className="faq__cta-text">Didn't find what you're looking for?</p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Contact Us
            <Icons.chevronRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
