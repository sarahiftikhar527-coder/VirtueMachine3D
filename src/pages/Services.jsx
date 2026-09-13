import ServicesHero from "../components/services/Hero/ServicesHero"
import ServicesList from "../components/services/ServicesList/ServicesList"
import ServicesProcess from "../components/services/Process/ServicesProcess"
import CTA from "../components/services/CTA/CTA"

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <CTA />
      <ServicesProcess />
    </main>
  )
}