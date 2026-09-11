import { useState } from "react";
import { Check, Send } from "lucide-react";

const SERVICES_OPTIONS = [
  "Rapid Prototyping",
  "Custom 3D Printing",
  "Product Development",
  "Functional Prototypes",
  "Engineering Parts",
  "Small-Batch Manufacturing",
];

const INITIAL = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();

    setLoading(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 900);
    });

    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <Check size={21} strokeWidth={2} />

        <div>
          <strong>Request received</strong>

          <span>
            Thank you. Our team will review your project and contact you
            shortly.
          </span>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="c-name">Name</label>

          <input
            id="c-name"
            name="name"
            type="text"
            required
            maxLength={60}
            placeholder="Your name"
            value={form.name}
            onChange={update}
          />
        </div>

        <div className="field">
          <label htmlFor="c-email">Email</label>

          <input
            id="c-email"
            name="email"
            type="email"
            required
            maxLength={100}
            placeholder="you@company.com"
            value={form.email}
            onChange={update}
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="c-company">Company</label>

          <input
            id="c-company"
            name="company"
            type="text"
            maxLength={80}
            placeholder="Company name"
            value={form.company}
            onChange={update}
          />
        </div>

        <div className="field">
          <label htmlFor="c-service">Service</label>

          <select
            id="c-service"
            name="service"
            required
            value={form.service}
            onChange={update}
          >
            <option value="" disabled>
              Select service
            </option>

            {SERVICES_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="c-message">Project details</label>

        <textarea
          id="c-message"
          name="message"
          required
          minLength={20}
          maxLength={700}
          placeholder="Tell us about your part, quantity, material and deadline..."
          value={form.message}
          onChange={update}
        />
      </div>

      <button
        type="submit"
        className="btn btn--primary"
        disabled={loading}
      >
        <span>
          {loading ? "Sending..." : "Request a Quote"}
        </span>

        {loading ? (
          <span className="form-spinner" aria-hidden="true" />
        ) : (
          <Send size={14} strokeWidth={2} />
        )}
      </button>

      <p className="form__note">
        Your project information is kept private.
      </p>
    </form>
  );
}