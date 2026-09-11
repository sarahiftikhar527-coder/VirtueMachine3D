import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import SectionHeading from "../../common/SectionHeading.jsx";
import { TESTIMONIALS } from "../../../data/testimonials.js";
import "./testimonials.css";

function Avatar({ src, initials }) {
  const [error, setError] = useState(false);

  return (
    <span className="tst-avatar" aria-hidden="true">
      {src && !error ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setError(true)}
        />
      ) : (
        <b>{initials}</b>
      )}
    </span>
  );
}

export default function Testimonials() {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -120px 0px",
      }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section--paper tst">
      <div className="container">
        <div className="tst-heading">
          <SectionHeading align="center" title="Testimonials" />
        </div>

        <div
          ref={gridRef}
          className={`tst__grid ${visible ? "tst--visible" : ""}`}
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className={`tst-card tst-card--${i + 1}`}
            >
              <div className="tst-card__shine" />
              <div className="tst-card__glow" />

              <div className="tst-card__top">
                <Quote
                  size={24}
                  className="tst-card__quote"
                  aria-hidden="true"
                />

                <span className="tst-card__number">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <blockquote>{t.quote}</blockquote>

              <div className="tst-card__person">
                <Avatar
                  src={t.img}
                  initials={t.initials}
                />

                <div className="tst-card__info">
                  <strong>{t.name}</strong>

                  <span>
                    {t.role} — {t.company}
                  </span>
                </div>
              </div>

              <div className="tst-card__bottom-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}