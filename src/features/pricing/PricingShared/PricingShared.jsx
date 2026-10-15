import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/* Number jo count hota hua naye value tak jata hai */
export function AnimatedNumber({ value, play = true, duration = 0.9 }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!play) return;
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration, ease: EASE });
    return () => controls.stop();
  }, [value, play, reduce, duration, mv]);

  return <motion.span>{text}</motion.span>;
}

/* Standard / Rush toggle (sliding pill) */
export function SpeedToggle({ id, mode, onChange, delivery }) {
  const reduce = useReducedMotion();
  const keys = Object.keys(delivery);

  const onKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const i = keys.indexOf(mode);
    const next = e.key === "ArrowRight" ? i + 1 : i - 1;
    onChange(keys[(next + keys.length) % keys.length]);
  };

  return (
    <div
      className="pr-toggle"
      role="radiogroup"
      aria-label="Delivery speed"
      onKeyDown={onKeyDown}
    >
      {keys.map((key) => {
        const d = delivery[key];
        const on = mode === key;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={on}
            tabIndex={on ? 0 : -1}
            className={`pr-toggle__opt ${on ? "is-on" : ""}`}
            onClick={() => onChange(key)}
          >
            {on && (
              <motion.span
                layoutId={`${id}-pill`}
                className="pr-toggle__pill"
                transition={
                  reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }
                }
              />
            )}
            <span className="pr-toggle__label">{d.label}</span>
            <span className="pr-toggle__note">{d.note}</span>
          </button>
        );
      })}
    </div>
  );
}