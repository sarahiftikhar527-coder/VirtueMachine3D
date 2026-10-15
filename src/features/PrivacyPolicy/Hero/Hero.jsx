import React from "react";
import "./Hero.css";
import heroImage from "../../../assets/images/PrivacyPolicy/Hero/hero.webp";

const Hero = () => {
  return (
    <section
      className="privacy-hero"
      style={{ "--privacy-hero-image": `url("${heroImage}")` }}
      aria-labelledby="privacy-hero-title"
    >
      <div className="privacy-hero__overlay" />

      <div className="privacy-hero__content">
       

        <h1 id="privacy-hero-title">
          Privacy <span>Policy</span>
        </h1>

        <p>
          Your trust matters. Learn how we protect and manage
          your personal information.
        </p>

        <div className="privacy-hero__line" />
      </div>
    </section>
  );
};

export default Hero;
