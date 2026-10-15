
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "../../../assets/videos/Services/Hero/hero-bg.mp4";
import "./servicesHero.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="services-hero">
      {/* Background video */}

      <video
        className="services-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Background effects */}

      <div className="services-hero__overlay" />
      <div className="services-hero__grid" />

      <div className="services-hero__glow services-hero__glow--one" />
      <div className="services-hero__glow services-hero__glow--two" />

      {/* Hero content */}

      <div className="container services-hero__container">
        <motion.div
          className="services-hero__content"
          variants={container}
          initial={reduceMotion ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.div
            className="services-hero__eyebrow"
            variants={item}
          >
            <span className="services-hero__eyebrow-line" />
            PRECISION ENGINEERING & MANUFACTURING
          </motion.div>

          <motion.h1 variants={item}>
            Built to Perform.
            <span>Made to Matter.</span>
          </motion.h1>

          <motion.p variants={item}>
            Precision manufacturing solutions engineered for
            prototypes, products, and production-ready parts.
          </motion.p>

          <motion.div
            className="services-hero__actions"
            variants={item}
          >
            <Link
              to="/contact"
              className="services-hero__button"
            >
              <span>Start a Project</span>

              <ArrowUpRight
                className="services-hero__button-icon"
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
