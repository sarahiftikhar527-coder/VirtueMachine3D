import { cn } from "../../utils/cn.js";

export default function Marquee({ items, className }) {
  const row = [...items, ...items];

  return (
    <div
      className={cn("marquee", className)}
      aria-hidden="true"
    >
      <div className="marquee__track">
        {row.map((item, index) => (
          <span
            className="marquee__item"
            key={`${item}-${index}`}
          >
            <span className="marquee__text">
              {item}
            </span>

            <span
              className="marquee__circle"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}