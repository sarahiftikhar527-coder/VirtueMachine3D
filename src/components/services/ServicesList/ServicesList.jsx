import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Box,
  Factory,
  Layers3,
  ScanLine,
  Wrench,
} from "lucide-react"
import { Link } from "react-router-dom"
import "./servicesList.css"

import rapidPrototyping from "../../../assets/images/Services/Icons/003-cube.webp"
import customPrinting from "../../../assets/images/Services/Icons/010-3d-printer.webp"
import productionParts from "../../../assets/images/Services/Icons/018-3d-model.webp"
import scanning from "../../../assets/images/Services/Icons/014-3d-modeling.webp"
import functionalPrototypes from "../../../assets/images/Services/Icons/045-3d-model.webp"
import materialsExpertise from "../../../assets/images/Services/Icons/044-pantone.webp"

const services = [
  {
    number: "01",
    title: "Custom 3D Printing",
    description:
      "Precision printed parts produced around your design, geometry, material, and performance requirements.",
    image: customPrinting,
    icon: Box,
    tag: "Additive Manufacturing",
  },
  {
    number: "02",
    title: "Production Parts",
    description:
      "Reliable, repeatable production components engineered for consistent quality and real-world performance.",
    image: productionParts,
    icon: Factory,
    tag: "Production",
  },
  {
    number: "03",
    title: "Rapid Prototyping",
    description:
      "Turn your concept into a physical prototype quickly, test the design, and refine it before production.",
    image: rapidPrototyping,
    icon: ScanLine,
    tag: "Rapid Development",
  },
  {
    number: "04",
    title: "3D Scanning",
    description:
      "Capture accurate digital models of physical objects for inspection, reverse engineering, and design development.",
    image: scanning,
    icon: ScanLine,
    tag: "Digital Capture",
  },
  {
    number: "05",
    title: "Functional Prototypes",
    description:
      "Prototypes designed to evaluate fit, function, performance, usability, and manufacturing requirements.",
    image: functionalPrototypes,
    icon: Wrench,
    tag: "Engineering",
  },
  {
    number: "06",
    title: "Materials Expertise",
    description:
      "Choose the right material for your application with practical guidance focused on performance, durability, and finish.",
    image: materialsExpertise,
    icon: Layers3,
    tag: "Material Selection",
  },
]

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const headingItem = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function ServicesList() {
  return (
    <section className="services-list">
      <div className="services-list__top-line" />

      <div className="container">
        <motion.div
          className="services-list__heading"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="services-list__eyebrow"
            variants={headingItem}
          >
            <span />
            WHAT WE DO
          </motion.div>

          <div className="services-list__heading-row">
            <motion.h2 variants={headingItem}>
              Precision at
              <span>every stage.</span>
            </motion.h2>

            <motion.p variants={headingItem}>
              From the first idea to the final component, we combine
              advanced manufacturing with practical engineering to
              deliver parts built for purpose.
            </motion.p>
          </div>
        </motion.div>

        <div className="services-list__grid">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                className="service-card"
                key={service.number}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
              >
                <div className="service-card__image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                  />

                  <div className="service-card__overlay" />

                  <span className="service-card__number">
                    {service.number}
                  </span>

                  <div className="service-card__icon">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>

                  <span className="service-card__tag">
                    {service.tag}
                  </span>
                </div>

                <div className="service-card__content">
                  <div className="service-card__text">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                  <Link
                    to="/contact"
                    className="service-card__link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Explore Service</span>

                    <span className="service-card__arrow">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                      />
                    </span>
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}