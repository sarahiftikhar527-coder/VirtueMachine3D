import TermsHero from "../../features/terms/TermsHero/TermsHero";
import TermsLayout from "../../features/terms/TermsLayout/TermsLayout";
import "./Terms.css";

// Terms page content. Navbar and Footer should come from your existing MainLayout.
export default function Terms() {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <TermsHero />
        <TermsLayout />
      </div>
    </div>
  );
}
