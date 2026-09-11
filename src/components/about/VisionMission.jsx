import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    title: "Our Vision",
    text: "To make advanced 3D printing more accessible for innovators, engineers, designers, and businesses that need ideas transformed into dependable physical products.",
  },
  {
    number: "02",
    title: "Our Mission",
    text: "To deliver precise, efficient, and application-focused manufacturing while maintaining a high standard of communication, quality, and customer experience.",
  },
];

export default function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="vision-mission__header">
          <span className="eyebrow">WHAT DRIVES US</span>

          <h2>
            Purpose behind
            <em> every print.</em>
          </h2>
        </div>

        <div className="vision-mission__grid">
          {items.map((item, index) => (
            <motion.article
              key={item.number}
              className="vision-mission__card"
              initial={{
                opacity: 0,
                x: index === 0 ? -35 : 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="vision-mission__top">
                <span>{item.number}</span>
                <span className="vision-mission__dot" />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="vision-mission__line" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}