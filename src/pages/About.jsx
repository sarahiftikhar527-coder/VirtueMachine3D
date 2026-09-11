import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Check,
  Cuboid,
  Printer,
  Ruler,
  Settings2,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";
import "./about.css";

const stats = [
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Materials Supported" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Quality Focus" },
];

const process = [
  {
    number: "01",
    icon: Cuboid,
    title: "Design",
    text: "We transform concepts and CAD designs into production-ready models.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Prototype",
    text: "We refine dimensions, form and functionality before production.",
  },
  {
    number: "03",
    icon: Printer,
    title: "Print",
    text: "Advanced 3D printing technology turns digital designs into real parts.",
  },
  {
    number: "04",
    icon: Settings2,
    title: "Finish",
    text: "Every part is inspected and finished according to its intended use.",
  },
];

const industries = [
  "Automotive",
  "Product Development",
  "Engineering",
  "Architecture",
  "Robotics",
  "Manufacturing",
];

function Counter({ value, suffix, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    let started = false;
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;

        started = true;

        const duration = 1600;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(value * eased);

          element.textContent = current;

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          } else {
            element.textContent = value;
          }
        };

        frame = requestAnimationFrame(animate);
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div className="about-stat">
      <div className="about-stat__number">
        <span ref={ref}>0</span>
        <strong>{suffix}</strong>
      </div>

      <p>{label}</p>
    </div>
  );
}

function Reveal({ children, className = "" }) {
  return (
    <div className={`about-reveal ${className}`}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__background" />
        <div className="about-hero__overlay" />
        <div className="about-hero__grid" />

        <div className="about-hero__content">
          <div className="about-eyebrow">
            <span />
            ABOUT VIRTUEMACHINE
          </div>

          <h1>
            Turning Ideas
            <br />
            <span>into Objects.</span>
          </h1>

          <p>
            We bring digital designs to life through precision 3D printing,
            rapid prototyping and modern manufacturing solutions.
          </p>

          <a href="#about-story" className="about-hero__button">
            Discover Our Story

            <span>
              <ArrowRight size={17} />
            </span>
          </a>
        </div>

        <div className="about-hero__scroll">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </section>

      <section className="about-story" id="about-story">
        <div className="about-container">
          <Reveal className="about-story__images">
            <div className="story-image story-image--large">
              <img
                src="/images/about/about-printing.jpg"
                alt="3D printing process"
              />
            </div>

            <div className="story-image story-image--small">
              <img
                src="/images/about/about-engineering.jpg"
                alt="3D printed engineering component"
              />
            </div>

            <div className="story-image__badge">
              <Printer size={20} />

              <span>
                PRECISION
                <br />
                PRINTING
              </span>
            </div>
          </Reveal>

          <Reveal className="about-story__content">
            <span className="section-label">WHO WE ARE</span>

            <h2>
              Best Choice for Your
              <span> 3D Printing Needs.</span>
            </h2>

            <p>
              VirtueMachine combines modern 3D printing technology with
              practical engineering expertise to turn ideas into accurate,
              functional and production-ready parts.
            </p>

            <p>
              From a single prototype to small-batch manufacturing, we focus
              on precision, reliable materials and a smooth path from digital
              concept to physical object.
            </p>

            <div className="story-points">
              <div>
                <Check size={15} />
                <span>Precision-focused production</span>
              </div>

              <div>
                <Check size={15} />
                <span>Rapid prototyping solutions</span>
              </div>

              <div>
                <Check size={15} />
                <span>Engineering-grade materials</span>
              </div>

              <div>
                <Check size={15} />
                <span>Small-batch manufacturing</span>
              </div>
            </div>

            <a href="/contact" className="text-link">
              Start Your Project
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="about-stats">
        <div className="about-container about-stats__inner">
          <div className="stats-heading">
            <span className="section-label">FUN FACT</span>

            <h2>
              Built around
              <span> precision.</span>
            </h2>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <Counter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="about-container vision-grid">
          <Reveal className="vision-content">
            <span className="section-label">OUR VISION & MISSION</span>

            <h2>
              Shaping a Future
              <span> Through 3D Printing.</span>
            </h2>

            <p>
              Our mission is simple: make advanced manufacturing more
              accessible, efficient and useful for creators, engineers and
              businesses.
            </p>

            <div className="vision-features">
              <div className="vision-feature">
                <div className="vision-feature__icon">
                  <Lightbulb size={21} />
                </div>

                <div>
                  <h3>Empowering Innovation</h3>

                  <p>
                    Turning complex ideas into tangible prototypes and
                    functional parts.
                  </p>
                </div>
              </div>

              <div className="vision-feature">
                <div className="vision-feature__icon">
                  <Target size={21} />
                </div>

                <div>
                  <h3>Engineering with Purpose</h3>

                  <p>
                    Every print is created with accuracy, performance and
                    real-world application in mind.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="vision-visual">
            <div className="vision-image">
              <img
                src="/images/about/about-vision.jpg"
                alt="Advanced 3D printing technology"
              />

              <div className="vision-floating-card">
                <Zap size={17} />

                <div>
                  <strong>PRECISION</strong>
                  <span>Built for real applications</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="process-section">
        <div className="about-container">
          <Reveal className="process-heading">
            <span className="section-label">HOW IT WORKS</span>

            <h2>
              From Digital Design
              <span> to Real Object.</span>
            </h2>

            <p>
              A streamlined workflow designed to move your idea from screen
              to physical product with confidence.
            </p>
          </Reveal>

          <div className="process-grid">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} className="process-card">
                  <div className="process-card__top">
                    <span>{item.number}</span>
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <div className="process-card__line">
                    <span />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  {index < process.length - 1 && (
                    <ArrowRight
                      className="process-arrow"
                      size={18}
                    />
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="technology-section">
        <div className="technology-media">
          <img
            src="/images/about/about-technology.jpg"
            alt="3D printer technology"
          />

          <div className="technology-overlay" />

          <div className="technology-content">
            <span className="section-label">OUR TECHNOLOGY</span>

            <h2>
              Technology that
              <span> brings ideas to life.</span>
            </h2>

            <p>
              From detailed prototypes to functional engineering components,
              our technology is focused on delivering consistent and
              dependable results.
            </p>

            <div className="technology-tags">
              <span>FDM</span>
              <span>PLA</span>
              <span>PETG</span>
              <span>ABS</span>
              <span>TPU</span>
            </div>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="about-container">
          <Reveal className="industries-heading">
            <span className="section-label">INDUSTRIES WE SERVE</span>

            <h2>
              Built for
              <span> many possibilities.</span>
            </h2>

            <p>
              3D printing gives teams across different industries the freedom
              to prototype, test and manufacture faster.
            </p>
          </Reveal>

          <div className="industries-grid">
            {industries.map((industry, index) => (
              <Reveal key={industry} className="industry-card">
                <span>0{index + 1}</span>

                <h3>{industry}</h3>

                <ArrowRight size={19} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__image" />
        <div className="about-cta__overlay" />

        <div className="about-cta__content">
          <span className="section-label">READY TO BUILD?</span>

          <h2>
            Experience the Future
            <span> of 3D Printing.</span>
          </h2>

          <p>
            Turn your next idea into something real with precision
            manufacturing and rapid prototyping.
          </p>

          <a href="/contact" className="about-cta__button">
            Start Your Project
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}