import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2.2,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-40px",
  });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${value.toFixed(
            decimals
          )}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, to, decimals, prefix, suffix, duration]);

  return (
    <span ref={ref}>
      {`${prefix}0${suffix}`}
    </span>
  );
}