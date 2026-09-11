import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal.jsx";

export default function ServiceDetails({
  service,
}) {
  if (!service) {
    return null;
  }

  const features =
    service.features ||
    service.includes ||
    service.benefits ||
    [];

  return (
    <section className="service-details">
      <div className="container service-details__container">
        <div className="service-details__main">
          <Reveal>
            <span className="eyebrow">
              {service.code || "SERVICE"}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="service-details__title">
              {service.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="service-details__lede">
              {service.description ||
                service.text ||
                "Precision manufacturing solutions designed around your project requirements."}
            </p>
          </Reveal>

          {service.longDescription && (
            <Reveal delay={0.18}>
              <div className="service-details__description">
                <p>
                  {service.longDescription}
                </p>
              </div>
            </Reveal>
          )}

          {features.length > 0 && (
            <Reveal delay={0.24}>
              <div className="service-details__features">
                <div className="service-details__features-head">
                  <span className="mono">
                    CAPABILITIES
                  </span>

                  <span className="mono">
                    {String(features.length).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>

                <div className="service-details__feature-list">
                  {features.map((feature, index) => (
                    <div
                      className="service-details__feature"
                      key={`${feature}-${index}`}
                    >
                      <span className="service-details__feature-icon">
                        <Check size={14} />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.3}>
            <div className="service-details__action">
              <Link
                to="/contact"
                className="btn btn--primary"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/services"
                className="service-details__back"
              >
                View all services
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.12}
          className="service-details__visual-wrap"
        >
          <div className="service-details__visual">
            <div className="service-details__grid" />

            <span className="service-details__corner service-details__corner--tl" />
            <span className="service-details__corner service-details__corner--tr" />
            <span className="service-details__corner service-details__corner--bl" />
            <span className="service-details__corner service-details__corner--br" />

            <div className="service-details__object">
              <span className="service-details__ring service-details__ring--one" />
              <span className="service-details__ring service-details__ring--two" />
              <span className="service-details__cube" />
              <span className="service-details__cube-inner" />
            </div>

            <div className="service-details__label service-details__label--top">
              PRECISION
            </div>

            <div className="service-details__label service-details__label--bottom">
              3D / ENGINEERING
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}