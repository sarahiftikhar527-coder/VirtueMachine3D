
import { termsIntroduction } from "../../../data/terms";
import "./TermsIntroduction.css";

function TermsIntroduction() {
  return (
    <section className="terms-introduction">
      {termsIntroduction.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default TermsIntroduction;
