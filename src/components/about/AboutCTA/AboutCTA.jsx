import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ctaVideo from "../../../assets/videos/About/CTA/CTA.mp4";
import "./aboutCTA.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
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

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta__background">
        <video
          className="cta__video"
          src={ctaVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="cta__overlay" />
      </div>

      <div className="cta__container">
        <motion.div
          className="cta__card"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.35,
          }}
        >
          <motion.h2
            className="cta__title"
            variants={reveal}
          >
            <span>TURNING DREAMS INTO</span>
            <span>REALITY BEGINS HERE</span>
          </motion.h2>

          <motion.p
            className="cta__text"
            variants={reveal}
          >
            Bring your ideas to life with precision and purpose.
          </motion.p>

          <motion.div
            className="cta__action"
            variants={reveal}
          >
            <Link
              to="/contact"
              className="cta__button"
            >
              <span>GET STARTED</span>

              <ArrowUpRight
                size={18}
                strokeWidth={2.2}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}