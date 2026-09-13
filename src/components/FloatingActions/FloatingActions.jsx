import React, { useState } from "react";
import "./FloatingActions.css";

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <path
      d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
      fill="#16c868"
    />
    <path
      d="m4 6 8 6 8-6"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <path
      d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.06-1.33A10 10 0 1 0 12 2Z"
      fill="#16c868"
    />
    <path
      d="M8.6 7.2c.2-.45.4-.46.6-.47h.5c.16 0 .38-.06.6.46.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.28-.12.55.16.27.7 1.15 1.5 1.87 1.04.93 1.9 1.22 2.17 1.36.27.14.43.12.58-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.6.75 1.87.89.27.14.45.2.52.32.07.12.07.68-.16 1.34-.23.66-1.34 1.29-1.86 1.34-.48.05-1.05.24-3.6-.8-3.05-1.24-4.98-4.27-5.13-4.47-.15-.2-1.23-1.63-1.23-3.11 0-1.48.78-2.2 1.05-2.5Z"
      fill="#fff"
    />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
    <path
      d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
      fill="#16c868"
    />
    <circle cx="12" cy="9" r="2.5" fill="#fff" />
  </svg>
);

const ACTIONS = [
  {
    key: "email",
    label: "E-mail",
    icon: <EmailIcon />,
    detail: "hello@virtuemechanics.com",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: <WhatsAppIcon />,
    detail: "+1 (512) 555-0142",
  },
  {
    key: "location",
    label: "Location",
    icon: <LocationIcon />,
    detail: "Austin, Texas, USA",
  },
];

export default function FloatingActions() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <div className="fa-container">
      {ACTIONS.map((action) => {
        const isOpen = openKey === action.key;

        return (
          <div
            key={action.key}
            className={`fa-row ${isOpen ? "fa-row--open" : ""}`}
            onMouseEnter={() => setOpenKey(action.key)}
            onMouseLeave={() => setOpenKey(null)}
          >
            <div className="fa-detail">
              <span className="fa-detail__text">{action.detail}</span>
            </div>

            <div className="fa-pill">
              <span className="fa-pill__icon">{action.icon}</span>
              <span className="fa-pill__label">{action.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}