import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { CURRENCY, DELIVERY, PERKS, PLANS, unitPrice } from "../../../data/pricing";
import "./pricingPlans.css";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const cell = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* price badalte waqt number upar slide ho kar naya aata hai */
function Price({ value, reduce }) {
  return (
    <span className="ppl__num-slot">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={value}
          className="ppl__num"
          initial={reduce ? false : { y: "55%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: "-55%", opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function PricingPlans({ mode, contactHref = "/contact", onSelect }) {
  const reduce = useReducedMotion();

  return (
    <section className="ppl" id="pricing-plans" aria-label="Pricing plans">
      <div className="ppl__wrap">
        <motion.div
          className="ppl__grid"
          variants={container}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PLANS.map((plan) => {
            const price = unitPrice(plan, mode);
            const ctaClass = `ppl__cta ${plan.featured ? "ppl__cta--light" : ""}`;
            const ctaInner = (
              <>
                <span>{plan.cta}</span>
                <ArrowRight size={17} className="ppl__arrow" aria-hidden="true" />
              </>
            );

            return (
              <motion.article
                key={plan.id}
                variants={cell}
                className={`ppl__cell ${plan.featured ? "is-featured" : ""}`}
              >
                <div className="ppl__top">
                  <h3 className="ppl__name">{plan.name}</h3>
                  {plan.badge && (
                    <span className="ppl__badge">
                      <span className="ppl__badge-dot" aria-hidden="true" />
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="ppl__tagline">{plan.tagline}</p>

                <div
                  className="ppl__price"
                  aria-label={`From ${CURRENCY}${price} ${plan.unit}`}
                >
                  <span className="ppl__from">from</span>
                  <span className="ppl__cur">{CURRENCY}</span>
                  <Price value={price} reduce={reduce} />
                  <span className="ppl__unit">{plan.unit}</span>
                </div>

                <p className="ppl__time">
                  <span className="ppl__dot" aria-hidden="true" />
                  {plan.quantity} · ready in {DELIVERY[mode].note}
                </p>

                <ul className="ppl__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                {onSelect ? (
                  <button
                    type="button"
                    className={ctaClass}
                    onClick={() => onSelect(plan, mode)}
                  >
                    {ctaInner}
                  </button>
                ) : (
                  <a
                    className={ctaClass}
                    href={`${contactHref}?plan=${plan.id}&speed=${mode}`}
                  >
                    {ctaInner}
                  </a>
                )}
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="ppl__foot"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ul className="ppl__perks">
            {PERKS.map((p) => (
              <li key={p}>
                <span className="ppl__dot" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <a className="ppl__custom" href={`${contactHref}?plan=custom`}>
            Need more than 1,000 parts? Request a custom quote
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}