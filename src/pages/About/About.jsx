import AboutHero from "../../features/about/AboutHero/AboutHero";
import AboutStory from "../../features/about/AboutStory/AboutStory";
import AboutFunFact from "../../features/about/AboutFunFact/AboutFunFact";
import OurVisionMission from "../../features/about/OurVisionMission/OurVisionMission.jsx";
import AboutCTA from "../../features/about/AboutCTA/AboutCTA.jsx";
import OurTeam from "../../features/about/OurTeam/OurTeam.jsx";
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