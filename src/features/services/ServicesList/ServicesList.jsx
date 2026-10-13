
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Box,
  Factory,
  Layers3,
  ScanLine,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./servicesList.css";

import rapidPrototyping from "../../../assets/images/Services/Icons/rapidPrototyping.webp";
import customPrinting from "../../../assets/images/Services/Icons/customPrinting.webp";
import productionParts from "../../../assets/images/Services/Icons/productionParts.webp";
import engineeringparts from "../../../assets/images/Services/Icons/Engineering-Parts.webp";
import scanning from "../../../assets/images/Services/Icons/scanning.webp";
import functionalPrototypes from "../../../assets/images/Services/Icons/functionalPrototypes.webp";
import materialsExpertise from "../../../assets/images/Services/Icons/materialsExpertise.webp";
import smallbatchmanufacturing from "../../../assets/images/Services/Icons/Small-Batch-Manufacturing.webp";
import cncpartsprocurement from "../../../assets/images/Services/Icons/cncpartsprocurement.webp";
import { SERVICES } from "../../../data/services/list.js";

const serviceVisuals = {
  "rapid-prototyping": {
    image: rapidPrototyping,
    icon: ScanLine,
    tag: "Rapid Development",
  },
  "industrial-3d-printing": {
    image: productionParts,
    icon: Factory,
    tag: "Industrial Manufacturing",
  },
  "custom-3d-printing": {
    image: customPrinting,
    icon: Box,
    tag: "Additive Manufacturing",
  },
  "product-development": {
    image: scanning,
    icon: ScanLine,
    tag: "Product Engineering",
  },
  "functional-prototypes": {
    image: functionalPrototypes,
    icon: Wrench,
    tag: "Engineering",
  },
  "engineering-parts": {
    image: engineeringparts,
    icon: Factory,
    tag: "Precision Components",
  },
  "replacement-parts": {
    image: materialsExpertise,
    icon: Layers3,
    tag: "Replacement Components",
  },
  "small-batch-manufacturing": {
    image: smallbatchmanufacturing,
    icon: Factory,
    tag: "Production",
  },
  "cnc-procurement": {
    image: cncpartsprocurement,
    icon: Wrench,
    tag: "CNC Manufacturing",
  },
};

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
};

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
};

export default function ServicesList() {
  const services = SERVICES;

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
            const visual = serviceVisuals[service.id] || {};
            const Icon = visual.icon || Box;

            return (
              <motion.article
                className="service-card"
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
              >
                <div className="service-card__image">
                  <img
                    src={visual.image || productionParts}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                  />

                  <div className="service-card__overlay" />

                  <span className="service-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="service-card__icon">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>

                  <span className="service-card__tag">
                    {visual.tag || "Manufacturing"}
                  </span>
                </div>

                <div className="service-card__content">
                  <div className="service-card__text">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="service-card__link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Explore Service</span>

                    <span className="service-card__arrow">
                      <ArrowUpRight size={15} strokeWidth={1.7} />
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
