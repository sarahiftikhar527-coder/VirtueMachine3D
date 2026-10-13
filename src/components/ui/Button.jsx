import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn.js";

export default function Button({
  to,
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon = ArrowRight,
  className,
  ...rest
}) {
  const cls = cn(
    "btn",
    `btn--${variant}`,
    size !== "md" && `btn--${size}`,
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon size={16} strokeWidth={2.4} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}