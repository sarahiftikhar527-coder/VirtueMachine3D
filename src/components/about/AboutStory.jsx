import { motion } from "framer-motion";

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutStory() {
  return (
    <section className="about-story">
      <div className="container">
        <motion.div
          className="about-story__intro"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">OUR STORY</span>

          <h2>
            Built around
            <em> precision.</em>
          </h2>

          <p>
            What started as a passion for digital fabrication has grown
            into a modern 3D printing and manufacturing workflow focused
            on quality, speed, and dependable results.
          </p>
        </motion.div>

        <div className="about-story__grid">
          <motion.div
            className="about-story__media"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="/images/gallery/01-bolt.jpg"
              alt="Precision mechanical 3D printed part"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="about-story__content"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="about-story__index">01</span>

            <h3>From digital model to finished part.</h3>

            <p>
              Every project begins with an idea. We help transform that
              idea into a manufacturable design, select the appropriate
              printing method and material, and produce the final part
              with attention to every detail.
            </p>

            <p>
              Our approach combines engineering thinking with modern
              additive manufacturing so prototypes and production parts
              are functional, accurate, and ready for real-world use.
            </p>

            <div className="about-story__line" />
          </motion.div>
        </div>

        <div className="about-story__grid about-story__grid--reverse">
          <motion.div
            className="about-story__content"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="about-story__index">02</span>

            <h3>Technology that serves the application.</h3>

            <p>
              We do not treat every project the same. Material choice,
              layer resolution, geometry, strength, surface finish, and
              production volume all influence the right manufacturing
              approach.
            </p>

            <p>
              This application-first mindset helps us create parts that
              are not only visually accurate, but also suitable for the
              job they were designed to perform.
            </p>

            <div className="about-story__line" />
          </motion.div>

          <motion.div
            className="about-story__media"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src="/images/gallery/03-gears.jpg"
              alt="Precision 3D printed gears"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}