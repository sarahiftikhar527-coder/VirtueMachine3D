import { useEffect, useRef, useState } from "react";
import "./materials.css";

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
    image: "/images/gallery/01-bolt.jpg",
    title: "Mechanical Bolt Prototype",
    alt: "Hands holding a grey textured mechanical bolt prototype",
    size: "large",
  },
  {
    id: 2,
    image: "/images/gallery/02-printer.jpg",
    title: "Plastic Vase / Product Prototypes",
    alt: "3D printer working on a plastic product prototype",
    size: "small",
  },
  {
    id: 3,
    image: "/images/gallery/03-gears.jpg",
    title: "Precision Gears",
    alt: "Green 3D printed gears and components",
    size: "small",
  },
  {
    id: 4,
    image: "/images/gallery/04-dental.jpg",
    title: "Dental Cast Prototype",
    alt: "Hands holding a blue medical dental cast model",
    size: "large",
  },
  {
    id: 5,
    image: "/images/gallery/05-brace.jpg",
    title: "Ergonomic Medical Brace",
    alt: "White ergonomic lattice medical brace structure",
    size: "large",
  },
  {
    id: 6,
    image: "/images/gallery/06-boat.jpg",
    title: "3D Printed Boat",
    alt: "Small red 3D printed boat miniature",
    size: "small",
  },
  {
    id: 7,
    image: "/images/gallery/07-character.jpg",
    title: "Character Figurine",
    alt: "Green 3D printed character figurine",
    size: "large",
  },
  {
    id: 8,
    image: "/images/gallery/08-organic.jpg",
    title: "Organic Print Sample",
    alt: "White organic 3D printed sample on a build plate",
    size: "small",
  },
];

function AnimatedNumber({ value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let startTime = null;
    let animationFrame;

    const duration = 1250;

    const animateNumber = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateNumber);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animateNumber);

    return () => {
      cancelAnimationFrame(animationFrame);
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
        setStatsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
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
            {materials.map((item) => (
              <article
                key={item.id}
                className={`materials__item materials__item--${item.size}`}
              >
                <div className="materials__image-wrap">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="materials__image"
                    loading="lazy"
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