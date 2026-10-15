
import React from "react";
import privacyPolicy from "../../../data/privacyPolicy";
import "./Description.css";

const Description = () => {
  return (
    <section
      className="privacy-description"
      aria-label="Privacy policy details"
    >
      <div className="privacy-description__container">
        <article className="privacy-description__card">
          <div className="privacy-description__meta">
          </div>

          <p className="privacy-description__intro">
            {privacyPolicy.intro}
          </p>

          <div className="privacy-description__divider" />

          {privacyPolicy.sections.map((section, index) => (
            <React.Fragment key={section.number}>
              <section className="privacy-description__item">
                <h2>
                  <span className="privacy-description__number">
                    {section.number}
                  </span>
                  {section.title}
                </h2>

                <p className="privacy-description__text">
                  {section.description}
                </p>

                {section.points?.length > 0 && (
                  <ul className="privacy-description__list">
                    {section.points.map((point) => (
                      <li key={point.title}>
                        <span className="privacy-description__bullet" />
                        <p>
                          <strong>{point.title}:</strong>{" "}
                          {point.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {index < privacyPolicy.sections.length - 1 && (
                <div className="privacy-description__divider" />
              )}
            </React.Fragment>
          ))}
        </article>

        <p className="privacy-description__footer">
          Your privacy deserves transparency, care and protection.
        </p>
      </div>
    </section>
  );
};

export default Description;
