import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import Reveal from "../../common/Reveal.jsx"
import { SERVICES } from "../../../data/services.js"
import custom3DPrinting from "../../../assets/images/Home/Services/Custom 3D Printing.webp"
import productionParts from "../../../assets/images/Home/Services/Production Parts.webp"
import rapidPrototyping from "../../../assets/images/Home/Services/rapid-prototyping.webp"
import functionalPrototypes from "../../../assets/images/Home/Services/Functional Prototypes.webp"
import "./services.css"

const SERVICE_IMAGES = [
  custom3DPrinting,
  productionParts,
  rapidPrototyping,
  functionalPrototypes,
]

export default function Services() {
  const services = SERVICES.slice(0, 4)

  return (
    <section className="section services">
      <div className="container">
        <div className="services__heading">
          <h2>Services</h2>

          <Link
            to="/services"
            className="arrow-link"
          >
            View all
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.07}
              className="services__cell"
            >
              <Link
                to="/services"
                className="srv-card"
              >
                <div className="srv-card__inner">
                  <div className="srv-card__face srv-card__front">
                    <div className="srv-card__visual">
                      <img
                        src={SERVICE_IMAGES[index]}
                        alt={service.title}
                        className="srv-card__image"
                      />
                    </div>

                    <div className="srv-card__title">
                      <h3>{service.title}</h3>
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  <div className="srv-card__face srv-card__back">
                    <h3>{service.title}</h3>

                    <p>{service.desc}</p>

                    <span className="srv-card__explore">
                      Explore
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}