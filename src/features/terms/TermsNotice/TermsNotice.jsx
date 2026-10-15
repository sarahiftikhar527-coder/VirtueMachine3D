import "./termsNotice.css";

export default function TermsNotice() {
  return (
    <section className="terms-notice" aria-labelledby="terms-notice-title">
      <span className="terms-notice-icon" aria-hidden="true">!</span>
      <div>
        <h2 id="terms-notice-title">IMPORTANT LEGAL NOTICE</h2>
        <p>
          Please read these Terms &amp; Conditions carefully. They describe the general
          rules for using this website and its services. Replace this sample notice
          with legal wording that has been reviewed for Virtue Mechanics.
        </p>
      </div>
    </section>
  );
}
