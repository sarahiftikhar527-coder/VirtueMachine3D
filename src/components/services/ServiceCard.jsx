import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "../common/TiltCard.jsx";

export default function ServiceCard({
  service,
  index = 0,
}) {
  return (
    <TiltCard className="service-card">
      <Link
        to={service.to || "/services"}
        className="service-card__link"
      >
        <div className="service-card__visual">
          <span className="service-card__index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div
            className={`service-card__shape service-card__shape--${
              index + 1
            }`}
          >
            <span />
            <span />
            <span />
          </div>

          <span className="service-card__arrow">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <div className="service-card__content">
          <span className="service-card__eyebrow">
            {service.code || `SRV-${String(index + 1).padStart(2, "0")}`}
          </span>

          <h3>{service.title}</h3>

          <p>
            {service.description ||
              service.text ||
              "Precision manufacturing solutions engineered for your application."}
          </p>

          <span className="service-card__cta">
            Explore service
            <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}