import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "../pages/pages.css";
import "./process.css";
import PageHeader from "../layouts/PageHeader.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";
import Reveal from "../components/common/Reveal.jsx";
import { PROCESS_STEPS } from "../data/process.js";
import { FAQS } from "../data/faqs.js";

const EASE = [0.22, 1, 0.36, 1];

const STEP_EXTRA = {
  "01": ["STL · STEP · OBJ · 3MF", "Interactive quote", "Engineer DFM note"],
  "02": ["Datasheets on request", "Lot certification", "Sample swatches"],
  "03": [
    "In-process monitoring",
    "Machine calibration log",
    "Layer photos on request",
  ],
  "04": ["CMM & caliper reports", "First-article inspection", "Surface finishing"],
  "05": ["Tracked shipping", "Material certificates", "90-day file retention"],
};

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {FAQS.map((f, i) => (
        <div
          key={f.q}
          className={`faq__item ${open === i ? "is-open" : ""}`}
        >
          <button
            type="button"
            className="faq__q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {f.q}
            <ChevronDown size={16} className="faq__chev" />
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ overflow: "hidden" }}
              >
                <p className="faq__a-inner">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function Process() {
  return (
    <>
      <PageHeader
        breadcrumb="Process"
        eyebrow="How it works"
        title={
          <>
            Order to delivery in <em>five steps</em>
          </>
        }
        lede="One engineer owns your order from quote to delivery, and you get status updates without having to ask. Here is exactly what happens after you hit send."
        facts={[
          { k: "Quote", v: "4 working hours" },
          { k: "Avg. delivery", v: "48 hours" },
          { k: "Inspection", v: "100% of parts" },
          { k: "Rush lane", v: "Same-day" },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Step by step"
            title={
              <>
                The manufacturing <em>workflow</em>
              </>
            }
          />

          {PROCESS_STEPS.map((s) => (
            <Reveal key={s.num} delay={0.04}>
              <div className="detail-row">
                <span className="detail-row__num">{s.num}</span>

                <div className="detail-row__main">
                  <span className="process__icon process__icon--inline">
                    <s.icon size={18} strokeWidth={1.9} />
                  </span>

                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>

                <div className="detail-row__side">
                  <span className="chip chip--green">{s.duration}</span>

                  <ul className="spec-lines">
                    {STEP_EXTRA[s.num].map((x) => (
                      <li key={x}>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--mist" id="faq">
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Answers, <em>not fine print</em>
              </>
            }
            lede="The six questions every new client asks — answered the way we would want them answered."
          />

          <Reveal>
            <Faq />
          </Reveal>
        </div>
      </section>
    </>
  );
}