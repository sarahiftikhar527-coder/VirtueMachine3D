import { motion } from "framer-motion";
import Button from "../../../components/ui/Button.jsx";
import Marquee from "../../../components/ui/Marquee.jsx";
import { HERO_TICKER } from "../../../data/stats.js";
import "./hero.css";

const EASE = [0.22, 1, 0.36, 1];

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: EASE,
    },
  },
};

const titleContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const paragraphContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.25,
    },
  },
};

const actionsReveal = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.98,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: 0.25,
      ease: EASE,
    },
  },
};

const titleWords = ["From", "Idea", "to", "Reality."];

const paragraphWords = [
  "Precision",
  "3D",
  "printing,",
  "prototyping,",
  "and",
  "advanced",
  "manufacturing.",
];

export default function Hero() {
  return (
    <section
      className="hero"
      aria-label="Virtue Mechanics introduction"
    >
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="hero__title-wrap"
            variants={titleContainer}
          >
            <h1 className="hero__title">
              {titleWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className="hero__word"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            className="hero__lede"
            variants={paragraphContainer}
          >
            {paragraphWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="hero__word hero__word--paragraph"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={actionsReveal}
          >
            <Button to="/contact" variant="primary">
              Start a Project
            </Button>

            <Button to="/services" variant="outline">
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__ticker"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            duration: 0.8,
            delay: 0.35,
            ease: "easeOut",
          },
          y: {
            duration: 0.9,
            delay: 0.35,
            ease: EASE,
          },
        }}
      >
        <Marquee items={HERO_TICKER} />
      </motion.div>
    </section>
  );
}