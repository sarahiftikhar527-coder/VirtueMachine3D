import "./termsHero.css";
import heroImage from "../../../assets/images/Terms/hero/hero.webp";

export default function TermsHero() {
  return (
    <section className="terms-hero">
      <div
        className="terms-hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="terms-hero-overlay" />

      <div className="terms-hero-copy">
        <h1>
          <span>Terms and</span>
          <span className="terms-title-highlight">
            Conditions
          </span>
        </h1>

        <div className="terms-title-line" />
      </div>
    </section>
  );
}