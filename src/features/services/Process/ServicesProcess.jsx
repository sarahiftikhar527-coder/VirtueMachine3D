import { motion } from "framer-motion"
import "./ServicesProcess.css"

import processImage from "../../../assets/images/Services/Process/process.webp"

const steps = [
  {
    number: "01",
    title: "Consultation and Design",
    description:
      "Share your idea, design, drawing, or project requirements with our team. We review your needs and help prepare the right approach for production.",
  },
  {
    number: "02",
    title: "Material Selection and Printing",
    description:
      "We help select the right material for your application and produce your part using the appropriate 3D printing process.",
  },
  {
    number: "03",
    title: "Quality Assurance and Delivery",
    description:
      "Every finished part is checked for quality before it is carefully prepared and delivered according to your requirements.",
  },
]

const contentContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stepAnimation = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ServicesProcess() {
  return (
    <section className="services-process">
      <div className="container">
        <div className="services-process__layout">
          <motion.div
            className="services-process__visual"
            initial={{
              opacity: 0,
              x: -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="services-process__image">
              <img
                src={processImage}
                alt="3D printing manufacturing process"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="services-process__image-accent" />
          </motion.div>

          <motion.div
            className="services-process__content"
            variants={contentContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <motion.div
              className="services-process__eyebrow"
              variants={fadeRight}
            >
              <span />
              HOW IT WORKS
            </motion.div>

            <motion.div
              className="services-process__heading"
              variants={fadeRight}
            >
              <h2>
                Simple Steps to
                <span>3D Printing Success</span>
              </h2>
            </motion.div>

            <div className="services-process__steps">
              {steps.map((step) => (
                <motion.div
                  className="process-step"
                  key={step.number}
                  variants={stepAnimation}
                >
                  <div className="process-step__number">
                    {step.number}
                  </div>

                  <div className="process-step__info">
                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}