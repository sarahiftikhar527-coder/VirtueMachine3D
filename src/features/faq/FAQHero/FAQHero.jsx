import { Search } from "lucide-react";
import heroBg from "../../../assets/images/FAQ/faq-hero.webp";
import "./faqHero.css";

export default function FAQHero({ query, onQuery, onSearch }) {
  return (
    <section
      className="faqhero"
      aria-labelledby="faqhero-title"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="faqhero__overlay" aria-hidden="true" />

      <div className="faqhero__inner">
        <h1 id="faqhero-title" className="faqhero__title">
          Got a question? Start here.
        </h1>

        <p className="faqhero__text">
          Ordering, materials, delivery, and pricing explained in plain words.
        </p>

        <form
          className="faqhero__search"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch?.();
          }}
        >
          <Search size={20} aria-hidden="true" />

          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search for an answer"
            aria-label="Search for an answer"
          />
        </form>
      </div>
    </section>
  );
}