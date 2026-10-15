import { motion, useReducedMotion } from "framer-motion";
import heroVideo from "../../../assets/videos/About/Hero/hero-bg.mp4";
import "./aboutHero.css";

const EASE = [0.22, 1, 0.36, 1];

export default function AboutHero() {
  const reduce = useReducedMotion();

  const titleContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 40,
      filter: reduce ? "blur(0px)" : "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0.4 : 0.9,
        ease: EASE,
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 20,
      filter: reduce ? "blur(0px)" : "blur(5px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0.4 : 0.85,
        delay: reduce ? 0.2 : 0.85,
        ease: EASE,
      },
    },
  };

  return (
    <section className="about-hero">
      <motion.div
        className="about-hero__video"
        initial={{ opacity: 0, scale: reduce ? 1 : 1.12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0.5 : 2.2, ease: EASE }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        className="about-hero__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="about-hero__grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
      />

      <div className="about-hero__content">
        <motion.h1
          className="about-hero__title"
          variants={titleContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={wordVariants}>Turning</motion.span>

          <motion.span
            className="about-hero__title-accent"
            variants={wordVariants}
          >
            Ideas
          </motion.span>

          <motion.span variants={wordVariants}>into</motion.span>

          <motion.span variants={wordVariants}>Objects.</motion.span>
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