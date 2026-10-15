import { useState } from "react";
import FAQHero from "../../features/faq/FAQHero/FAQHero";
import FAQList from "../../features/faq/FAQList/FAQList";
import { FAQ_CATEGORIES } from "../../data/faqs";
import "./faq.css";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const pickTopic = (cat) => {
    setActive(cat);
    document
      .getElementById("faq-list")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="faq-page">
      <FAQHero
        query={query}
        onQuery={setQuery}
        topics={FAQ_CATEGORIES.filter((c) => c !== "All")}
        onPickTopic={pickTopic}
      />
      <FAQList
        query={query}
        onClearQuery={() => setQuery("")}
        active={active}
        onActive={setActive}
        contactHref="/contact"
      />
    </main>
  );
}