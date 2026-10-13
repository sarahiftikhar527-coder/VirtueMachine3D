import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import visionMain from "../../../assets/images/About/VisionAndMission/Vision-main.webp";
import visionSecondary from "../../../assets/images/About/VisionAndMission/Vision-secondary.webp";
import "./OurVisionMission.css";

const EASE = [0.22, 1, 0.36, 1];

const mainImageVariants = {
  hidden: {
    opacity: 0,
    x: -80,
    y: -30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: EASE,
    },
  },
};

const secondaryImageVariants = {
  hidden: {
    opacity: 0,
    x: 80,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.15,
      ease: EASE,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    x: 70,
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

const textVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE,
    },
  },
};

const introVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.15,
      ease: EASE,
    },
  },
};

const visionVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.28,
      ease: EASE,
    },
  },
};

const missionVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.4,
      ease: EASE,
    },
  },
};

export default function OurVisionMission() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.18,
  });

  return (
    <section
      ref={sectionRef}
      className="our-vision-mission"
    >
      <div className="our-vision-mission__container">
        <div className="our-vision-mission__images">
          <motion.div
            className="our-vision-mission__image our-vision-mission__image--main"
            variants={mainImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src={visionMain}
              alt="Advanced 3D printing and manufacturing"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div
            className="our-vision-mission__image our-vision-mission__image--secondary"
            variants={secondaryImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img
              src={visionSecondary}
              alt="Innovative 3D printed product development"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        <motion.div
          className="our-vision-mission__content"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="our-vision-mission__eyebrow"
            variants={textVariants}
          >
            Our Vision & Mission
          </motion.div>

          <motion.h2
            className="our-vision-mission__title"
            variants={textVariants}
          >
            Shaping a Future Through 3D Printing
          </motion.h2>

          <motion.p
            className="our-vision-mission__intro"
            variants={introVariants}
          >
            We combine advanced technology, precision, and creativity
            to transform ideas into innovative, functional products.
          </motion.p>

          <motion.div
            className="our-vision-mission__block"
            variants={visionVariants}
          >
            <h3>Empowering Innovation</h3>

            <p>
              We make 3D printing more accessible, helping creators
              and businesses turn ambitious ideas into reality with
              speed and precision.
            </p>
          </motion.div>

          <motion.div
            className="our-vision-mission__block"
            variants={missionVariants}
          >
            <h3>Shaping a Boundless Future</h3>

            <p>
              We deliver reliable 3D printing solutions that connect
              imagination with production through innovation and
              precision.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}