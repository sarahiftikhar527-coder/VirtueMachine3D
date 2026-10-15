import { DELIVERY } from "../../../data/pricing";
import "./pricingHero.css";

export default function PricingHero({ mode, onMode }) {
  return (
    <section className="prh" aria-labelledby="prh-title">
      <div className="prh__inner">
        <h1 id="prh-title" className="prh__title">
          Simple pricing
        </h1>
        <p className="prh__text">
          The more you order, the less each part costs. No setup fees.
        </p>

        <div className="prh__toggle" role="group" aria-label="Delivery speed">
          {Object.entries(DELIVERY).map(([key, d]) => (
            <button
              key={key}
              type="button"
              aria-pressed={mode === key}
              className={`prh__opt ${mode === key ? "is-on" : ""}`}
              onClick={() => onMode(key)}
            >
              {d.label}
              <span>{d.note}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}