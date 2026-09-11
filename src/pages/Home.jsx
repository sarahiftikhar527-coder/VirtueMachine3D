import Hero from "../components/home/Hero/Hero.jsx";
import Services from "../components/home/Services/Services.jsx";
import About from "../components/home/About/About.jsx";
import MaterialsSection from "../components/home/Materials/MaterialsSection.jsx";
import CTA from "../components/home/CTA/CTA.jsx";
import HowItWorks from "../components/home/HowItWorks/HowItWorks.jsx";
import Testimonials from "../components/home/Testimonials/Testimonials.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <MaterialsSection />
      <CTA />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}