import { useState } from "react";
import PricingHero from "../../features/pricing/PricingHero/PricingHero";
import PricingPlans from "../../features/pricing/PricingPlans/PricingPlans";
import "./Pricing.css";


/*
  mode (standard / rush) yahan rakha hai taake Hero ka toggle
  aur Plans ki prices ek saath badlein.
  onSelect(plan, mode) do ge to buttons wo function chalayenge,
  warna /contact?plan=..&speed=.. ka link khulega.
*/
export default function Pricing({ contactHref = "/contact", onSelect }) {
  const [mode, setMode] = useState("standard");

  return (
    <main className="pricing-page">
      <PricingHero mode={mode} onMode={setMode} />
      <PricingPlans mode={mode} contactHref={contactHref} onSelect={onSelect} />
    </main>
  );
}