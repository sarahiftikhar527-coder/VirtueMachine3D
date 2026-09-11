import { motion } from "framer-motion";
import "./about.css";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__grid" />

      <div className="container about-hero__container">
        <motion.div
          className="about-hero__content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">ABOUT US</span>

          <h1>
            Engineering ideas into
            <em> physical reality.</em>
          </h1>

          <p>
            We combine advanced 3D printing technology, engineering
            expertise, and precision manufacturing to turn digital
            concepts into reliable physical products.
          </p>
        </motion.div>

        <motion.div
          className="about-hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/images/About/About_bg.jpg"
            alt="Advanced 3D printing manufacturing"
          />

          <div className="about-hero__scan" />
          <div className="about-hero__frame" />
        </motion.div>
      </div>
    </section>
  );
}