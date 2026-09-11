import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard.jsx";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceGrid({
  services = [],
}) {
  return (
    <motion.div
      className="services-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
      {services.map((service, index) => (
        <motion.div
          key={service.id || service.slug || service.title}
          variants={itemVariants}
        >
          <ServiceCard
            service={service}
            index={index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}