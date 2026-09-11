import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading.jsx";

const technologies = [
  {
    number: "01",
    title: "FDM Printing",
    text: "Reliable thermoplastic printing for prototypes, functional components, fixtures, and practical engineering applications.",
  },
  {
    number: "02",
    title: "Resin Printing",
    text: "High-detail production for complex geometries, presentation models, small components, and precision prototypes.",
  },
  {
    number: "03",
    title: "Engineering Materials",
    text: "Material selection based on strength, flexibility, temperature resistance, appearance, and intended application.",
  },
];

export default function AboutTechnology() {
  return (
    <section className="about-technology">
      <div className="container">
        <SectionHeading
          eyebrow="TECHNOLOGY"
          title={
            <>
              Modern tools.
              <em> Practical results.</em>
            </>
          }
          lede="Our workflow brings together advanced additive manufacturing technologies and engineering-focused decision making."
        />

        <div className="about-technology__grid">
          {technologies.map((technology, index) => (
            <motion.article
              key={technology.number}
              className="about-technology__card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
            >
              <span className="about-technology__number">
                {technology.number}
              </span>

              <div className="about-technology__icon">
                <span />
                <span />
                <span />
              </div>

              <h3>{technology.title}</h3>

              <p>{technology.text}</p>

              <div className="about-technology__footer">
                <span>ENGINEERING SYSTEM</span>
                <span>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}