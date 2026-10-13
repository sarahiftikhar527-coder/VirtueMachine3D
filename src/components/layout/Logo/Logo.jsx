import { Link } from "react-router-dom";
import { cn } from "../../../utils/cn.js";

const LOGO_IMAGE = "/images/logo/virtue-logo.webp";

export function LogoMark({ size = 44 }) {
  return (
    <img
      src={LOGO_IMAGE}
      alt=""
      width={size}
      height={size}
      className="logo__mark-image"
    />
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
      <img
        src={LOGO_IMAGE}
        alt="Virtue Mechanics"
        className={cn(
          "logo__image",
          compact && "logo__image--compact"
        )}
      />
    </Link>
  );
}