
import { accountText } from "../../../data/terms";
import "./TermsAccount.css";

function TermsAccount() {
  return (
    <section className="terms-account">
      {accountText.map((item) => (
        <div key={item.id} className="terms-account__item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default TermsAccount;
