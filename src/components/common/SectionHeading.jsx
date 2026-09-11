import { cn } from "../../utils/cn.js";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  row = false,
  action = null,
  className,
}) {
  return (
    <div
      className={cn(
        "sec-head",
        row && "sec-head--row",
        align === "center" && "sec-head--center",
        className
      )}
    >
      <div className="sec-head__main">
        {eyebrow && (
          <span className="eyebrow">{eyebrow}</span>
        )}

        {title && (
          <h2 className="sec-title">{title}</h2>
        )}

        {lede && (
          <p className="sec-lede">{lede}</p>
        )}
      </div>

      {action}
    </div>
  );
}