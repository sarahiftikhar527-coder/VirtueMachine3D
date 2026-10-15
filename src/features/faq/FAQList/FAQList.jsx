import { useEffect, useId, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";
import { FAQS, FAQ_CATEGORIES } from "../../../data/faqs";
import "./faqList.css";

export default function FAQList({
  query,
  onClearQuery,
  active,
  onActive,
  contactHref = "/contact",
  onContact,
}) {
  const [openQ, setOpenQ] = useState(FAQS[0]?.q ?? null);
  const reduce = useReducedMotion();
  const uid = useId();

  const term = query.trim().toLowerCase();
  const searching = term.length > 0;

  // Search ho raha ho to saari categories mein dhoondo, warna selected tab
  const visible = useMemo(() => {
    return FAQS.filter((f) => {
      if (searching) {
        return (
          f.q.toLowerCase().includes(term) ||
          f.a.toLowerCase().includes(term) ||
          f.category.toLowerCase().includes(term)
        );
      }
      return active === "All" || f.category === active;
    });
  }, [term, searching, active]);

  // Search ya tab badalne pe pehla jawab khul jaye
  useEffect(() => {
    setOpenQ(visible[0]?.q ?? null);
  }, [term, active]); // eslint-disable-line react-hooks/exhaustive-deps

  const counts = useMemo(() => {
    const c = { All: FAQS.length };
    FAQS.forEach((f) => (c[f.category] = (c[f.category] || 0) + 1));
    return c;
  }, []);

  return (
    <section id="faq-list" className="faqlist" aria-label="Frequently asked questions">
      <div className="faqlist__inner">
        {/* Left: contact card */}
        <aside className="faqlist__aside">
          <div className="faqlist__card">
            <span className="faqlist__card-icon" aria-hidden="true">
              <MessageCircle size={20} />
            </span>
            <p className="faqlist__card-title">Still have a question?</p>
            <p className="faqlist__card-text">
              Our team replies within one working day.
            </p>
            {onContact ? (
              <button type="button" className="faqlist__btn" onClick={onContact}>
                Talk to us <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            ) : (
              <a className="faqlist__btn" href={contactHref}>
                Talk to us <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </aside>

        {/* Right: tabs / search status + accordion */}
        <div className="faqlist__main">
          {searching ? (
            <div className="faqlist__status" role="status" aria-live="polite">
              <p>
                {visible.length} {visible.length === 1 ? "result" : "results"} for
                &ldquo;{query.trim()}&rdquo;
              </p>
              <button type="button" className="faqlist__link" onClick={onClearQuery}>
                Clear search
              </button>
            </div>
          ) : (
            <div className="faqlist__tabs" role="tablist" aria-label="Question categories">
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  type="button"
                  aria-selected={active === cat}
                  className={`faqlist__tab ${active === cat ? "is-active" : ""}`}
                  onClick={() => onActive(cat)}
                >
                  {cat}
                  <span className="faqlist__count">{counts[cat] || 0}</span>
                </button>
              ))}
            </div>
          )}

          <ul className="faqlist__list">
            {visible.map((item, i) => {
              const isOpen = openQ === item.q;
              const id = `${uid}-${i}`;
              return (
                <li key={item.q} className={`faqlist__item ${isOpen ? "is-open" : ""}`}>
                  <h3>
                    <button
                      type="button"
                      id={`${id}-btn`}
                      className="faqlist__q"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel`}
                      onClick={() => setOpenQ(isOpen ? null : item.q)}
                    >
                      <span>{item.q}</span>
                      <motion.span
                        className="faqlist__plus"
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: reduce ? 0 : 0.25 }}
                      >
                        <Plus size={18} />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        id={`${id}-panel`}
                        role="region"
                        aria-labelledby={`${id}-btn`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduce ? 0 : 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="faqlist__a">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {visible.length === 0 && (
            <div className="faqlist__empty">
              <p>
                No answer matches &ldquo;{query.trim()}&rdquo;. Try a shorter word, or
                ask us directly.
              </p>
              <a className="faqlist__link" href={contactHref}>
                Ask our team
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}