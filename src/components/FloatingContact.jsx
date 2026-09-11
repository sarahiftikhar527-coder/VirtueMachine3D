import {
  MapPin,
  MessageCircle,
  Mail,
} from "lucide-react";
import "../styles/FloatingContact.css";

const CONTACT_ACTIONS = [
  {
    label: "Location",
    value: "Faisalabad, Pakistan",
    icon: MapPin,
    href: "https://www.google.com/maps",
  },
  {
    label: "WhatsApp",
    value: "+92 300 1234567",
    icon: MessageCircle,
    href: "https://wa.me/923001234567",
  },
  {
    label: "Email",
    value: "hello@virtuemachine3d.com",
    icon: Mail,
    href: "mailto:hello@virtuemachine3d.com",
  },
];

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      {CONTACT_ACTIONS.map((action) => {
        const Icon = action.icon;

        return (
          <a
            key={action.label}
            href={action.href}
            className="floating-contact__item"
            aria-label={action.label}
            target={action.label === "Email" ? undefined : "_blank"}
            rel={
              action.label === "Email"
                ? undefined
                : "noopener noreferrer"
            }
          >
            <span className="floating-contact__icon">
              <Icon size={19} strokeWidth={2} />
            </span>

            <span className="floating-contact__info">
              <span className="floating-contact__label">
                {action.label}
              </span>
              <span className="floating-contact__value">
                {action.value}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}