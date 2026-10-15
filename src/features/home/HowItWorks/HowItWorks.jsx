
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import howItWorksVideo from "../../../assets/videos/Home/HowItWorks/HowItWorks.mp4";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Consultation and Design",
    text: "We understand your idea, refine the design, and prepare it for accurate and efficient 3D printing.",
  },
  {
    number: "02",
    title: "Material Selection and Printing",
    text: "We select the right material for your application and transform the approved design into a precise physical part.",
  },
  {
    number: "03",
    title: "Quality Assurance and Delivery",
    text: "Every finished part is carefully checked for quality before being prepared for reliable delivery.",
  },
];

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.05,
    },
  },
};

const revealFromRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const numberReveal = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const videoReveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HowItWorks() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -5% 0px",
  });

  const shouldReduceMotion = useReducedMotion();

  const animationState =
    shouldReduceMotion || isInView ? "visible" : "hidden";

  return (
    <section
      ref={sectionRef}
      className="how-it-works"
      id="how-it-works"
    >
      <div className="how-it-works__container">
        {/* VIDEO — left side on desktop */}
        <motion.div
          className="how-it-works__video-wrap"
          variants={videoReveal}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={animationState}
        >
          <video
            className="how-it-works__video"
            src={howItWorksVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </motion.div>

        {/* CONTENT — right side on desktop */}
        <motion.div
          className="how-it-works__content"
          variants={contentVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={animationState}
        >
          <motion.div
            className="how-it-works__intro"
            variants={revealFromRight}
          >
            <span className="how-it-works__eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              Simple Steps to
              <span> 3D Printing Success.</span>
            </h2>

            <p>
              From the first idea to the final part, our process keeps
              every stage precise, efficient, and focused on quality.
            </p>
          </motion.div>

          <div className="how-it-works__steps">
            {steps.map((step) => (
              <motion.div
                className="how-it-works__step"
                key={step.number}
                variants={revealFromRight}
              >
                <motion.span
                  className="how-it-works__number"
                  variants={numberReveal}
                >
                  {step.number}
                </motion.span>

                <motion.div
                  className="how-it-works__step-content"
                  variants={revealFromRight}
                >
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}