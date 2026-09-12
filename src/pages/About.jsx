import AboutHero from "../components/about/AboutHero/AboutHero.jsx";
import AboutStory from "../components/about/AboutStory/AboutStory.jsx";
import AboutFunFact from "../components/about/AboutFunFact/AboutFunFact.jsx";
import OurVisionMission from "../components/about/OurVisionMission/OurVisionMission.jsx";
import AboutCTA from "../components/about/AboutCTA/AboutCTA.jsx";
import OurTeam from "../components/about/OurTeam/OurTeam.jsx";
import "./about.css";

export default function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutFunFact />
      <OurVisionMission />
      <AboutCTA />
      <OurTeam />
   
      
    </main>
  );
}