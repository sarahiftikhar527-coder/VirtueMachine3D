import { useEffect, useRef, useState } from "react";
import "./materials.css";

import boltImage from "../../../assets/images/Home/Gallery/01-bolt.webp";
import printerImage from "../../../assets/images/Home/Gallery/02-printer.webp";
import gearsImage from "../../../assets/images/Home/Gallery/03-gears.webp";
import dentalImage from "../../../assets/images/Home/Gallery/04-dental.webp";
import braceImage from "../../../assets/images/Home/Gallery/05-brace.webp";
import boatImage from "../../../assets/images/Home/Gallery/06-boat.webp";
import characterImage from "../../../assets/images/Home/Gallery/07-character.webp";
import organicImage from "../../../assets/images/Home/Gallery/08-organic.webp";

const statsData = [
  {
    id: 1,
    number: 245,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    id: 2,
    number: 782,
    suffix: "+",
    label: "Successful Projects",
  },
  {
    id: 3,
    number: 94,
    suffix: "%",
    label: "Satisfaction Rate",
  },
  {
    id: 4,
    number: 20,
    suffix: "+",
    label: "Years of Experience",
  },
];

const materials = [
  {
    id: 1,
    image: boltImage,
    title: "Mechanical Bolt Prototype",
    alt: "Hands holding a grey textured mechanical bolt prototype",
    size: "large",
  },
  {
    id: 2,
    image: printerImage,
    title: "Plastic Vase / Product Prototypes",
    alt: "3D printer working on a plastic product prototype",
    size: "small",
  },
  {
    id: 3,
    image: gearsImage,
    title: "Precision Gears",
    alt: "Green 3D printed gears and components",
    size: "small",
  },
  {
    id: 4,
    image: dentalImage,
    title: "Dental Cast Prototype",
    alt: "Hands holding a blue medical dental cast model",
    size: "large",
  },
  {
    id: 5,
    image: braceImage,
    title: "Ergonomic Medical Brace",
    alt: "White ergonomic lattice medical brace structure",
    size: "large",
  },
  {
    id: 6,
    image: boatImage,
    title: "3D Printed Boat",
    alt: "Small red 3D printed boat miniature",
    size: "small",
  },
  {
    id: 7,
    image: characterImage,
    title: "Character Figurine",
    alt: "Green 3D printed character figurine",
    size: "large",
  },
  {
    id: 8,
    image: organicImage,
    title: "Organic Print Sample",
    alt: "White organic 3D printed sample on a build plate",
    size: "small",
  },
];

function AnimatedNumber({ value, start }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    const duration = 900;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.floor(easedProgress * value);

      setCount(nextValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, start]);

  return count;
}

export default function MaterialsSection() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const element = statsRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="materials" id="materials">
      <div
        className="materials__stats"
        ref={statsRef}
      >
        <div className="materials__container">
          <div className="materials__left">
            <div className="materials__tag">
              <span className="materials__tag-box" />
              <span>Fun Fact</span>
            </div>

            <h2 className="materials__title">
              BEST CHOICE FOR YOUR
              <br />
              3D PRINTING NEEDS
            </h2>

            <p className="materials__desc">
              Precision, reliability, and advanced 3D printing
              solutions built to bring your ideas to life.
            </p>
          </div>

          <div className="materials__stats-grid">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="materials__stat-item"
              >
                <div className="materials__stat-number-wrap">
                  <span className="materials__stat-num">
                    <AnimatedNumber
                      value={stat.number}
                      start={statsVisible}
                    />
                  </span>

                  <span className="materials__stat-suffix">
                    {stat.suffix}
                  </span>
                </div>

                <p className="materials__stat-label">
                  {stat.label}
                </p>

                <div className="materials__stat-line" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="materials__gallery">
        <div className="materials__gallery-container">
          <div className="materials__grid">
            {materials.map((item, index) => (
              <article
                key={item.id}
                className={`materials__item materials__item--${item.size}`}
              >
                <div className="materials__image-wrap">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="materials__image"
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />

                  <div className="materials__overlay" />

                  <div className="materials__label">
                    <span>{item.title}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}