import Hero from "../../features/home/Hero/Hero.jsx";
import Services from "../../features/home/Services/Services.jsx";
import About from "../../features/home/About/About.jsx";
import MaterialsSection from "../../features/home/Materials/MaterialsSection.jsx";
import CTA from "../../features/home/CTA/CTA.jsx";
import HowItWorks from "../../features/home/HowItWorks/HowItWorks.jsx";
import Testimonials from "../../features/home/Testimonials/Testimonials.jsx";

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