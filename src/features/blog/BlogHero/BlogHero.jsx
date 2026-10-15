
import { motion } from "framer-motion"
import "./blogHero.css"

const EASE = [0.22, 1, 0.36, 1]

export default function BlogHero() {
  return (
    <section className="bloghero">
      <div className="bloghero__overlay" />

      <div className="bloghero__grid" />

      <div className="bloghero__line bloghero__line--one" />
      <div className="bloghero__line bloghero__line--two" />

      <div className="container bloghero__container">
        <motion.div
          className="bloghero__content"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
        >
          <motion.span
            className="bloghero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: EASE,
            }}
          >
            INSIGHTS &amp; IDEAS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: EASE,
            }}
          >
            The Virtue
            <span>Journal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.32,
              ease: EASE,
            }}
          >
            Explore ideas, techniques and insights from
            the world of 3D printing, rapid prototyping
            and advanced manufacturing.
          </motion.p>
        </motion.div>

        <motion.div
          className="bloghero__bottom-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: EASE,
          }}
        />
      </div>
    </section>
  )
}
