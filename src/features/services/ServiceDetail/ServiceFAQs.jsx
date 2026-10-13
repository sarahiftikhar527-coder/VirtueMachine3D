
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.service-faq,
.service-faq * {
  box-sizing: border-box;
}

.service-faq {
  position: relative;
  overflow: hidden;
  padding: 100px 0 38px;
  background: #fff;
  color: #18221b;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.service-faq__container {
  width: min(1320px, calc(100% - 64px));
  margin: 0 auto;
}

.service-faq__top-line {
  height: 1px;
  margin-bottom: 72px;
  background: #e1e7e1;
  transform-origin: left;
}

.service-faq__layout {
  display: grid;
  grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr);
  align-items: start;
  gap: 90px;
}

.service-faq__intro {
  position: sticky;
  top: 90px;
}

.service-faq__eyebrow {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 25px;
  color: #6c786e;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
}

.service-faq__eyebrow span {
  width: 27px;
  height: 2px;
  background: #31814b;
}

.service-faq__heading {
  margin: 0;
  font-size: clamp(35px, 3.8vw, 53px);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -1.8px;
}

.service-faq__heading span {
  color: #31814b;
}

.service-faq__description {
  max-width: 390px;
  margin: 22px 0 0;
  color: #747d75;
  font-size: 13px;
  font-weight: 400;
  line-height: 2;
}

.service-faq__contact {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 27px;
  padding-bottom: 8px;
  border-bottom: 1px solid #31814b;
  color: #253529;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: color .25s ease, gap .25s ease;
}

.service-faq__contact:hover {
  gap: 17px;
  color: #31814b;
}

.service-faq__contact svg {
  color: #31814b;
}

.service-faq__intro-footer {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 58px;
  color: #7d867e;
  font-size: 10px;
  line-height: 1.8;
}

.service-faq__status-dot {
  width: 7px;
  height: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #31814b;
}

.service-faq__list {
  border-top: 1px solid #dfe5df;
}

.service-faq__item {
  border-bottom: 1px solid #dfe5df;
  transition: border-color .3s ease;
}

.service-faq__item.is-open {
  border-bottom-color: #b7cbb9;
}

.service-faq__question-heading {
  margin: 0;
}

.service-faq__question {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 18px;
  padding: 24px 0;
  border: 0;
  background: transparent;
  color: #202a22;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
}

.service-faq__number {
  flex-shrink: 0;
  color: #98a098;
  font-size: 11px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  transition: color .25s ease;
}

.service-faq__question-text {
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.8;
  transition: color .25s ease;
}

.service-faq__item.is-open .service-faq__question-text,
.service-faq__question:hover .service-faq__question-text {
  color: #31814b;
}

.service-faq__item.is-open .service-faq__number {
  color: #31814b;
}

.service-faq__toggle {
  display: flex;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfe5df;
  border-radius: 50%;
  background: #fff;
  color: #354337;
  transition: color .3s ease, background .3s ease, border-color .3s ease;
}

.service-faq__item.is-open .service-faq__toggle {
  border-color: #31814b;
  background: #31814b;
  color: #fff;
}

.service-faq__question:focus-visible,
.service-faq__contact:focus-visible {
  outline: 2px solid #31814b;
  outline-offset: 5px;
}

.service-faq__answer-wrapper {
  overflow: hidden;
}

.service-faq__answer {
  max-width: 590px;
  margin: 0;
  padding: 0 45px 25px 36px;
  color: #747d75;
  font-size: 13px;
  font-weight: 400;
  line-height: 2;
}

.service-faq__bottom-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 72px;
  padding-top: 20px;
  border-top: 1px solid #e2e7e1;
  color: #818a81;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1.2px;
}

.service-faq__bottom-line span:last-child {
  font-weight: 400;
  letter-spacing: 0;
}

@media (min-width: 1500px) {
  .service-faq__layout {
    gap: 120px;
  }
}

@media (max-width: 1024px) {
  .service-faq {
    padding-top: 80px;
  }

  .service-faq__layout {
    grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
    gap: 48px;
  }

  .service-faq__heading {
    font-size: 40px;
    letter-spacing: -1.3px;
  }

  .service-faq__question-text {
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .service-faq {
    padding: 60px 0 28px;
  }

  .service-faq__container {
    width: calc(100% - 40px);
  }

  .service-faq__top-line {
    margin-bottom: 42px;
  }

  .service-faq__layout {
    grid-template-columns: minmax(0, 1fr);
    gap: 38px;
  }

  .service-faq__intro {
    position: static;
  }

  .service-faq__eyebrow {
    margin-bottom: 20px;
  }

  .service-faq__heading {
    font-size: clamp(33px, 8vw, 43px);
    letter-spacing: -1.3px;
  }

  .service-faq__description {
    margin-top: 16px;
    font-size: 12px;
  }

  .service-faq__contact {
    margin-top: 21px;
  }

  .service-faq__intro-footer {
    margin-top: 28px;
  }

  .service-faq__question {
    gap: 12px;
    padding: 20px 0;
  }

  .service-faq__question-text {
    font-size: 14px;
    line-height: 1.8;
  }

  .service-faq__number {
    font-size: 10px;
  }

  .service-faq__toggle {
    width: 31px;
    height: 31px;
  }

  .service-faq__answer {
    padding: 0 4px 21px 28px;
    font-size: 12px;
  }

  .service-faq__bottom-line {
    align-items: flex-start;
    margin-top: 48px;
    font-size: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-faq *,
  .service-faq *::before,
  .service-faq *::after {
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}
`;

const leftReveal = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

const rightReveal = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease },
  },
};

export default function ServiceFAQs({ service }) {
  const [open, setOpen] = useState(0);
  const reduceMotion = useReducedMotion();

  const faqs = (service?.faqs || [])
    .map((faq) => ({
      q: faq.q || faq.question || "",
      a: faq.a || faq.answer || "",
    }))
    .filter((faq) => faq.q && faq.a);

  if (!faqs.length) return null;

  return (
    <>
      <style>{styles}</style>

      <section className="service-faq">
        <div className="service-faq__container">
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="service-faq__top-line"
          />

          <div className="service-faq__layout">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={leftReveal}
              className="service-faq__intro"
            >
              <div className="service-faq__eyebrow">
                <span />
                NEED TO KNOW
              </div>

              <h2 className="service-faq__heading">
                Questions?
                <br />
                <span>We've got answers.</span>
              </h2>

              <p className="service-faq__description">
                Everything you need to know before getting your project
                started. If something is still unclear, our team is here
                to help.
              </p>

              <a href="/contact" className="service-faq__contact">
                <span>Talk to our team</span>
                <ArrowRight size={17} strokeWidth={1.7} />
              </a>

              <div className="service-faq__intro-footer">
                <span className="service-faq__status-dot" />
                Here to help with your next project
              </div>
            </motion.div>

            <div className="service-faq__list">
              {faqs.map(({ q, a }, index) => {
                const isOpen = open === index;
                const buttonId = `service-faq-question-${index}`;
                const panelId = `service-faq-answer-${index}`;

                return (
                  <motion.div
                    key={`${index}-${q}`}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={rightReveal}
                    transition={{
                      duration: 0.65,
                      delay: reduceMotion ? 0 : index * 0.06,
                      ease,
                    }}
                    className={`service-faq__item ${isOpen ? "is-open" : ""}`}
                  >
                    <h3 className="service-faq__question-heading">
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : index)}
                        className="service-faq__question"
                      >
                        <span className="service-faq__number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="service-faq__question-text">
                          {q}
                        </span>

                        <motion.span
                          animate={reduceMotion ? {} : { rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25, ease }}
                          className="service-faq__toggle"
                        >
                          <Plus size={19} strokeWidth={1.5} />
                        </motion.span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease }}
                          className="service-faq__answer-wrapper"
                        >
                          <p className="service-faq__answer">{a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
