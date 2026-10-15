import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import "./ServicesProcess.css"

import processImage from "../../../assets/images/Services/Process/process.webp"

const EASE = [0.22, 1, 0.36, 1]
const MOBILE_QUERY = "(max-width: 900px)"

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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(MOBILE_QUERY).matches
      : false
  )

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => setIsMobile(e.matches)

    setIsMobile(mql.matches)
    mql.addEventListener("change", onChange)

    return () => mql.removeEventListener("change", onChange)
  }, [])

  return isMobile
}

export default function ServicesProcess() {
  const reduce = useReducedMotion()
  const isMobile = useIsMobile()

  const move = (value) => (reduce ? 0 : value)

  const contentContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.15,
      },
    },
  }

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: isMobile ? 0 : move(45),
      y: isMobile ? move(24) : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduce ? 0.4 : 0.75, ease: EASE },
    },
  }

  const stepAnimation = {
    hidden: { opacity: 0, y: move(isMobile ? 28 : 25) },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.4 : 0.6, ease: EASE },
    },
  }

  const visualVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 0 : move(-45),
      y: isMobile ? move(36) : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduce ? 0.4 : 0.9, ease: EASE },
    },
  }

  const imageZoom = {
    hidden: { scale: reduce ? 1 : 1.12 },
    visible: {
      scale: 1,
      transition: { duration: reduce ? 0.4 : 1.6, ease: EASE },
    },
  }

  // Mobile: har element apni baari pe animate hota hai.
  const viewTrigger = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 },
  }

  // Desktop: content wrapper animate karta hai, children inherit karte hain.
  const contentWrapperProps = isMobile
    ? {}
    : { variants: contentContainer, ...viewTrigger }

  const childTrigger = isMobile ? viewTrigger : {}

  return (
    <section className="services-process">
      <div className="container">
        <div className="services-process__layout">
          <motion.div
            className="services-process__visual"
            variants={visualVariants}
            {...viewTrigger}
          >
            <div className="services-process__image">
              <motion.img
                src={processImage}
                alt="3D printing manufacturing process"
                loading="lazy"
                decoding="async"
                variants={imageZoom}
              />
            </div>

            <div className="services-process__image-accent" />
          </motion.div>

          <motion.div
            className="services-process__content"
            {...contentWrapperProps}
          >
            <motion.div
              className="services-process__eyebrow"
              variants={fadeRight}
              {...childTrigger}
            >
              <span />
              HOW IT WORKS
            </motion.div>

            <motion.div
              className="services-process__heading"
              variants={fadeRight}
              {...childTrigger}
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
                  {...childTrigger}
                >
                  <div className="process-step__number">{step.number}</div>

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