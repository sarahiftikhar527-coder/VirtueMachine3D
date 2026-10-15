import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import funFactImage from "../../../assets/images/About/FunFact/FunFact.webp";
import "./AboutFunFact.css";

const EASE = [0.22, 1, 0.36, 1];

const stats = [
  { value: 245, suffix: "+", label: "Satisfied Clients" },
  { value: 782, suffix: "+", label: "Successful Projects" },
  { value: 94, suffix: "%", label: "Satisfaction Rate" },
  { value: 20, suffix: "+", label: "Years of Experience" },
];

function CountUp({ value, suffix, active, reduce }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    if (reduce) {
      setCount(value);
      return;
    }

    let animationFrame;
    const duration = 1800;
    const delay = 450; // stats ke fade-in ke baad count start ho
    let startTime = null;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime + delay;

      const elapsed = currentTime - startTime;

      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, value, reduce]);

  return (
    <>
      {count}
      <span>{suffix}</span>
    </>
  );
}

function AboutFunFact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const textVariants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : 28,
      filter: reduce ? "blur(0px)" : "blur(6px)",
    },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0.4 : 0.85,
        delay: reduce ? 0 : delay,
        ease: EASE,
      },
    }),
  };

  const statsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.35,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.4 : 0.8, ease: EASE },
    },
  };

  const state = isVisible ? "show" : "hidden";

  return (
    <section className="about-funfact" ref={sectionRef}>
      <motion.img
        className="about-funfact__background"
        src={funFactImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, scale: reduce ? 1 : 1.1 }}
        animate={
          isVisible
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: reduce ? 1 : 1.1 }
        }
        transition={{ duration: reduce ? 0.5 : 1.8, ease: EASE }}
      />

      <div className="about-funfact__overlay" />

      <div className="about-funfact__content">
        <motion.div
          className="about-funfact__eyebrow"
          variants={textVariants}
          custom={0.1}
          initial="hidden"
          animate={state}
        >
          Fun Fact
        </motion.div>

        <motion.h2
          className="about-funfact__title"
          variants={textVariants}
          custom={0.2}
          initial="hidden"
          animate={state}
        >
          Best Choice for Your 3D Printing Needs
        </motion.h2>

        <motion.p
          className="about-funfact__description"
          variants={textVariants}
          custom={0.35}
          initial="hidden"
          animate={state}
        >
          We deliver precision 3D printing solutions designed for prototypes,
          functional parts, and custom products, combining advanced technology
          with reliable quality and fast turnaround.
        </motion.p>

        <motion.div
          className="about-funfact__stats"
          variants={statsContainer}
          initial="hidden"
          animate={state}
        >
          {stats.map((stat) => (
            <motion.div
              className="about-funfact__stat"
              key={stat.label}
              variants={statVariants}
            >
              <div className="about-funfact__number">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  active={isVisible}
                  reduce={reduce}
                />
              </div>

              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutFunFact;