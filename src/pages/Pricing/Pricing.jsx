import { ArrowUpRight, Check } from "lucide-react";
import { pricingPlans } from "../../data/pricing";
import "./Pricing.css";

export default function Pricing() {
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-hero__content">
          <span className="pricing-hero__eyebrow">SIMPLE &amp; TRANSPARENT</span>

          <h1>
            Pricing built around
            <br />
            your project.
          </h1>

          <p>
            From first prototypes to small-batch production, choose the level
            of manufacturing support that fits your needs.
          </p>
        </div>
      </section>

      <section className="pricing-content">
        <div className="pricing-heading">
          <span>MANUFACTURING PLANS</span>
          <h2>Choose what fits your project</h2>
          <p>
            Every project is different. Our plans give you a starting point,
            while custom requirements can be quoted separately.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={`pricing-card ${
                plan.featured ? "pricing-card--featured" : ""
              }`}
              key={plan.id}
            >
              {plan.featured && (
                <span className="pricing-card__badge">
                  MOST POPULAR
                </span>
              )}

              <div className="pricing-card__top">
                <span className="pricing-card__label">{plan.label}</span>

                <h3>{plan.name}</h3>

                <div className="pricing-card__price">{plan.price}</div>

                <p>{plan.description}</p>
              </div>

              <div className="pricing-card__divider" />

              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="pricing-card__check">
                      <Check size={13} strokeWidth={2.5} />
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button type="button" className="pricing-card__button">
                Get Started
                <ArrowUpRight size={16} strokeWidth={2} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-note">
        <div>
          <span>NEED SOMETHING CUSTOM?</span>

          <h2>
            Have a unique manufacturing
            <br />
            requirement?
          </h2>
        </div>

        <button type="button">
          Request a Quote
          <ArrowUpRight size={17} />
        </button>
      </section>
    </main>
  );
}