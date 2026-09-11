import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn.js";

export function LogoMark({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect
        width="32"
        height="32"
        rx="7"
        fill="#0d1420"
      />

      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="6.3"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.5"
      />

      <path
        d="M16 6.5l7.5 4.3L16 15.1l-7.5-4.3L16 6.5z"
        fill="#16c868"
      />

      <path
        d="M8.5 14.6l7.5 4.3 7.5-4.3"
        stroke="#e8edf3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 19.2l7.5 4.3 7.5-4.3"
        stroke="#46536b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({
  className,
  compact = false,
}) {
  return (
    <Link
      to="/"
      className={cn("logo", className)}
      aria-label="Virtue Mechanics — Home"
    >
      <span className="logo__mark">
        <LogoMark />
      </span>

      <span className="logo__text">
        <span className="logo__word">
          VIRTUE <em>MECHANICS</em>
        </span>

        {!compact && (
          <span className="logo__sub">
            3D Printing &amp; Advanced Mfg.
          </span>
        )}
      </span>
    </Link>
  );
}