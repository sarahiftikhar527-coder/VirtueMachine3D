
import React from "react";
import Hero from "../../features/PrivacyPolicy/Hero/Hero";
import Description from "../../features/PrivacyPolicy/Description/Description";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <main className="privacy-policy-page">
      <Hero />
      <Description />
    </main>
  );
};

export default PrivacyPolicy;
