import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mainImage from "../../../assets/images/About/Story/Story-main.webp";
import topImage from "../../../assets/images/About/Story/Story-top.webp";
import bottomImage from "../../../assets/images/About/Story/Story-bottom.webp";
import "./aboutStory.css";

const EASE = [0.22, 1, 0.36, 1];

const titleVariants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.15,
      ease: EASE,
    },
  },
};

const mainImageVariants = {
  hidden: {
    opacity: 0,
    x: -120,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: EASE,
    },
  },
};

const topImageVariants = {
  hidden: {
    opacity: 0,
    y: -120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.12,
      ease: EASE,
    },
  },
};

const bottomImageVariants = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: EASE,
    },
  },
};

export default function AboutStory() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
  });

  return (
    <section
      ref={sectionRef}
      className="about-story"
    >
      <div className="about-story__container">
        <div className="about-story__left">
          <div className="about-story__content">
            <motion.h2
              className="about-story__title"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              TURNING IDEAS
              <br />
              INTO OBJECTS
            </motion.h2>

            <motion.p
              className="about-story__description"
              variants={descriptionVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              We transform ideas into precise, functional, and
              production-ready objects through advanced 3D printing
              and modern manufacturing technology. From early
              concepts and prototypes to finished components, we
              combine creativity, engineering, and precision to
              bring every idea to life.
            </motion.p>
          </div>

          <motion.div
            className="about-story__image about-story__image--main"
            variants={mainImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src={mainImage}
              alt="3D printing and manufacturing"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>

        <div className="about-story__right">
          <motion.div
            className="about-story__image about-story__image--top"
            variants={topImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src={topImage}
              alt="3D printing product development"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          <motion.div
            className="about-story__image about-story__image--bottom"
            variants={bottomImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src={bottomImage}
              alt="3D printer manufacturing"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}