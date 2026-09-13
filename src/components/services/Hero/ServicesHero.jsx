import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import heroVideo from "../../../assets/videos/Services/Hero/hero-bg.mp4"
import "./servicesHero.css"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <video
        className="services-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="services-hero__overlay" />
      <div className="services-hero__grid" />

      <div className="services-hero__glow services-hero__glow--one" />
      <div className="services-hero__glow services-hero__glow--two" />

      <div className="container services-hero__container">
        <motion.div
          className="services-hero__content"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.div
            className="services-hero__eyebrow"
            variants={item}
          >
          </motion.div>

          <motion.h1 variants={item}>
            Built to Perform.
            <span>Made to Matter.</span>
          </motion.h1>

          <motion.p variants={item}>
            Precision manufacturing solutions engineered for
            prototypes, products, and production-ready parts.
          </motion.p>

          <motion.div
            className="services-hero__actions"
            variants={item}
          >
            <Link
              to="/contact"
              className="services-hero__button"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={17} strokeWidth={1.8} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}