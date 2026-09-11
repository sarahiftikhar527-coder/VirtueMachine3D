import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "../components/common/Reveal.jsx";
import "./pageheader.css";

export default function PageHeader({
  eyebrow,
  title,
  lede,
  breadcrumb,
  facts = [],
}) {
  return (
    <header className="phead">
      <div
        className="grid-bg"
        aria-hidden="true"
      />

      <div className="container phead__inner">
        <nav
          className="phead__crumbs mono"
          aria-label="Breadcrumb"
        >
          <Link to="/">Home</Link>

          <ChevronRight size={12} />

          <span>{breadcrumb}</span>
        </nav>

        {eyebrow && (
          <Reveal>
            <span className="eyebrow">
              {eyebrow}
            </span>
          </Reveal>
        )}

        <Reveal delay={0.06}>
          <h1 className="phead__title">
            {title}
          </h1>
        </Reveal>

        {lede && (
          <Reveal delay={0.12}>
            <p className="phead__lede">
              {lede}
            </p>
          </Reveal>
        )}

        {facts.length > 0 && (
          <Reveal delay={0.18}>
            <ul className="phead__facts mono">
              {facts.map((fact) => (
                <li key={fact.k}>
                  <span>{fact.k}</span>
                  <strong>{fact.v}</strong>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </header>
  );
}