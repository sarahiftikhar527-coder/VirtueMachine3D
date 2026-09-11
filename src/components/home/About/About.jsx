import { motion } from "framer-motion"
import aboutVideo1 from "../../../assets/videos/Home/About/About-1.mp4"
import aboutVideo2 from "../../../assets/videos/Home/About/About-2.mp4"
import "./About.css"

const revealFromRight = {
  hidden: {
    opacity: 0,
    x: 110,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const revealVideo = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(3px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const revealHeading = {
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
      duration: 1.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const viewport = {
  once: true,
  amount: 0.3,
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <motion.div
          className="about__heading-wrap"
          variants={revealHeading}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <h2 className="about__heading">ABOUT US</h2>
        </motion.div>

        <div className="about__rows">
          <div className="about__row">
            <motion.div
              className="about__text"
              variants={revealFromRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <h3>Built with accuracy.</h3>

              <p>
                Every part is created with careful attention to detail,
                precision, and consistent quality, ensuring reliable
                results and excellent performance for every application.
              </p>
            </motion.div>

            <motion.div
              className="about__video"
              variants={revealVideo}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <video
                src={aboutVideo1}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </motion.div>
          </div>

          <div className="about__row">
            <motion.div
              className="about__video"
              variants={revealVideo}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <video
                src={aboutVideo2}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </motion.div>

            <motion.div
              className="about__text"
              variants={revealFromRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <h3>Ideas take shape.</h3>

              <p>
                Advanced 3D printing transforms digital designs into
                functional, precise, and production-ready parts, helping
                turn innovative ideas into practical real-world solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}