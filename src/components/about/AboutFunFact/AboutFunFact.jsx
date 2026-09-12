import { useEffect, useRef, useState } from "react";
import funFactImage from "../../../assets/images/About/FunFact/FunFact.webp";
import "./AboutFunFact.css";

const stats = [
  {
    value: 245,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    value: 782,
    suffix: "+",
    label: "Successful Projects",
  },
  {
    value: 94,
    suffix: "%",
    label: "Satisfaction Rate",
  },
  {
    value: 20,
    suffix: "+",
    label: "Years of Experience",
  },
];

function CountUp({ value, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let animationFrame;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        value * easedProgress
      );

      setCount(currentValue);

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [active, value]);

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

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="about-funfact"
      ref={sectionRef}
    >
      <img
        className="about-funfact__background"
        src={funFactImage}
        alt=""
      />

      <div className="about-funfact__overlay" />

      <div className="about-funfact__content">
        <div className="about-funfact__eyebrow">
          Fun Fact
        </div>

        <h2 className="about-funfact__title">
          Best Choice for Your 3D Printing Needs
        </h2>
        
        <p className="about-funfact__description">
            We deliver precision 3D printing solutions designed for prototypes,
            functional parts, and custom products, combining advanced technology
            with reliable quality and fast turnaround.
            </p>

        <div className="about-funfact__stats">
          {stats.map((stat) => (
            <div
              className="about-funfact__stat"
              key={stat.label}
            >
              <div className="about-funfact__number">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  active={isVisible}
                />
              </div>

              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutFunFact;