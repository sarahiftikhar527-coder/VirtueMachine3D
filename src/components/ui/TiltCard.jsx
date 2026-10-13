import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "../../utils/cn.js";

export default function TiltCard({
  children,
  className,
  max = 6,
  ...rest
}) {
  const ref = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [max, -max]),
    {
      stiffness: 160,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-max, max]),
    {
      stiffness: 160,
      damping: 18,
    }
  );

  const onMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mx.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    my.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("tilt", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}