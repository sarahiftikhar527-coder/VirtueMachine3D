import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../../common/Button.jsx";
import Marquee from "../../common/Marquee.jsx";
import { HERO_TICKER } from "../../../data/stats.js";
import heroVideo from "../../../assets/videos/Home/Hero/hero-bg.mp4";
import heroVideo2 from "../../../assets/videos/Home/Hero/hero-bg-2.mp4";
import "./hero.css";

const EASE = [0.22, 1, 0.36, 1];

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
    filter: "blur(7px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: EASE,
    },
  },
};

const titleContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const paragraphContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.18,
    },
  },
};

const actionsReveal = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.99,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.18,
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
  const videoRef = useRef(null);
  const video2Ref = useRef(null);
  const [videoFinished, setVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    setVideoFinished(true);

    if (videoRef.current) {
      videoRef.current.pause();
    }

    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play().catch(() => {});
    }
  };

  return (
    <section
      className={`hero ${videoFinished ? "hero--revealed" : ""}`}
      aria-label="Virtue Mechanics introduction"
    >
      <div className="hero__bg" aria-hidden="true">
        <video
          ref={videoRef}
          className={`hero__background-video hero__background-video--one ${
            videoFinished ? "hero__background-video--hidden" : ""
          }`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <video
          ref={video2Ref}
          className={`hero__background-video hero__background-video--two ${
            videoFinished ? "hero__background-video--active" : ""
          }`}
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src={heroVideo2} type="video/mp4" />
        </video>
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate={videoFinished ? "show" : "hidden"}
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

      <div
        className={`hero__ticker ${
          videoFinished ? "hero__ticker--visible" : ""
        }`}
      >
        <Marquee items={HERO_TICKER} />
      </div>
    </section>
  );
}