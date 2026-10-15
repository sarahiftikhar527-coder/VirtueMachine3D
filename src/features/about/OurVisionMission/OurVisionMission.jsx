import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import visionMain from "../../../assets/images/About/VisionAndMission/Vision-main.webp";
import visionSecondary from "../../../assets/images/About/VisionAndMission/Vision-secondary.webp";
import "./OurVisionMission.css";

const EASE = [0.22, 1, 0.36, 1];
const MOBILE_QUERY = "(max-width: 900px)";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(MOBILE_QUERY).matches
      : false
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);

    setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

function buildVariants(isMobile, reduce) {
  const move = (value) => (reduce ? 0 : value);
  const dur = (value) => (reduce ? 0.4 : value);
  const delay = (value) => (reduce || isMobile ? 0 : value);

  return {
    mainImage: {
      hidden: {
        opacity: 0,
        x: isMobile ? 0 : move(-80),
        y: isMobile ? move(40) : move(-30),
        scale: reduce ? 1 : 0.96,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: dur(1), ease: EASE },
      },
    },
    secondaryImage: {
      hidden: {
        opacity: 0,
        x: isMobile ? 0 : move(80),
        y: move(isMobile ? 40 : 30),
        scale: reduce ? 1 : 0.96,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: dur(1),
          delay: reduce ? 0 : isMobile ? 0.12 : 0.15,
          ease: EASE,
        },
      },
    },
    content: {
      hidden: { opacity: 0, x: move(70) },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: dur(0.9), ease: EASE },
      },
    },
    text: {
      hidden: { opacity: 0, y: move(25) },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: dur(0.75), ease: EASE },
      },
    },
    intro: {
      hidden: { opacity: 0, y: move(20) },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: dur(0.75), delay: delay(0.15), ease: EASE },
      },
    },
    vision: {
      hidden: { opacity: 0, y: move(25) },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: dur(0.75), delay: delay(0.28), ease: EASE },
      },
    },
    mission: {
      hidden: { opacity: 0, y: move(25) },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: dur(0.75), delay: delay(0.4), ease: EASE },
      },
    },
  };
}

export default function OurVisionMission() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.18,
  });

  const v = buildVariants(isMobile, reduce);

  // Mobile: har element apni baari pe animate hota hai.
  // Desktop: pehle jaisa, poora section ek saath.
  const trigger = isMobile
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      }
    : {
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
      };

  // Desktop pe content wrapper animate hota hai aur children inherit karte hain.
  // Mobile pe wrapper "display: contents" hai, is liye children khud trigger hote hain.
  const contentWrapperProps = isMobile
    ? {}
    : {
        variants: v.content,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
      };

  const childTrigger = isMobile ? trigger : {};

  return (
    <section ref={sectionRef} className="our-vision-mission">
      <div className="our-vision-mission__container">
        <div className="our-vision-mission__images">
          <motion.div
            className="our-vision-mission__image our-vision-mission__image--main"
            variants={v.mainImage}
            {...trigger}
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
            variants={v.secondaryImage}
            {...trigger}
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
          {...contentWrapperProps}
        >
          <motion.div
            className="our-vision-mission__eyebrow"
            variants={v.text}
            {...childTrigger}
          >
            Our Vision & Mission
          </motion.div>

          <motion.h2
            className="our-vision-mission__title"
            variants={v.text}
            {...childTrigger}
          >
            Shaping a Future Through 3D Printing
          </motion.h2>

          <motion.p
            className="our-vision-mission__intro"
            variants={v.intro}
            {...childTrigger}
          >
            We combine advanced technology, precision, and creativity
            to transform ideas into innovative, functional products.
          </motion.p>

          <motion.div
            className="our-vision-mission__block"
            variants={v.vision}
            {...childTrigger}
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
            variants={v.mission}
            {...childTrigger}
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