import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { faqs } from "../../data/faqs";
import "./faq.css";

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="faq-hero__content">
          <span className="faq-hero__eyebrow">
            QUESTIONS &amp; ANSWERS
          </span>

          <h1>
            Everything you need
            <br />
            to know.
          </h1>

          <p>
            Find answers about our 3D printing services, materials,
            prototyping, production, and project process.
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-intro">
          <span>COMMON QUESTIONS</span>

          <h2>
            How can we
            <br />
            help?
          </h2>

          <p>
            Have a question about your project? Start here or get in touch
            with our team for a more specific answer.
          </p>

          <Link to="/contact" className="faq-contact-button">
            Ask a Question
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-item--active" : ""}`}
                key={faq.id}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  className="faq-answer"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="faq-answer__inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="faq-cta">
        <div>
          <span>STILL HAVE QUESTIONS?</span>

          <h2>
            Let’s talk about
            <br />
            your project.
          </h2>
        </div>

        <Link to="/contact" className="faq-cta__button">
          Contact Us
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}