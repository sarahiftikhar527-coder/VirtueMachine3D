import { motion } from "framer-motion";
import Counter from "../common/Counter.jsx";

const stats = [
  {
    value: 245,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    value: 782,
    suffix: "+",
    label: "Successful Projects",
  },
  {
    value: 94,
    suffix: "%",
    label: "Satisfaction Rate",
  },
  {
    value: 20,
    suffix: "+",
    label: "Years of Experience",
  },
];

export default function AboutStats() {
  return (
    <section className="about-stats">
      <div className="container">
        <div className="about-stats__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="about-stats__item"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="about-stats__number">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>

              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}