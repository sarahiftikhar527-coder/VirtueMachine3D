import { motion } from "framer-motion";
import heroVideo from "../../../assets/videos/About/Hero/hero-bg.mp4";
import "./aboutHero.css";

const EASE = [0.22, 1, 0.36, 1];

const titleContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(7px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: 0.25,
      ease: EASE,
    },
  },
};

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__video">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>
      </div>

      <div className="about-hero__overlay" />

      <div className="about-hero__grid" />

      <div className="about-hero__content">
        <motion.h1
          className="about-hero__title"
          variants={titleContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={wordVariants}>
            Turning
          </motion.span>

          <motion.span
            className="about-hero__title-accent"
            variants={wordVariants}
          >
            Ideas
          </motion.span>

          <motion.span variants={wordVariants}>
            into
          </motion.span>

          <motion.span variants={wordVariants}>
            Objects.
          </motion.span>
        </motion.h1>

        <motion.p
          className="about-hero__subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate="show"
        >
          Advanced 3D printing and precision manufacturing
          that transforms concepts into real-world products.
        </motion.p>
      </div>
    </section>
  );
}