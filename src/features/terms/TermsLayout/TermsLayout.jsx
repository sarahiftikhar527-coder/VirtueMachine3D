import TermsSidebar from "../TermsSidebar/TermsSidebar";
import TermsArticle from "../TermsArticle/TermsArticle";
import "./termsLayout.css";

export default function TermsLayout() {
  return (
    <div className="terms-content-layout">
      <TermsSidebar />
      <TermsArticle />
    </div>
  );
}
