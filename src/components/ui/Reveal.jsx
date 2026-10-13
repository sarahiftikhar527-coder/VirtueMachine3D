import { motion } from "framer-motion";
import { cn } from "../../utils/cn.js";

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 30,
  once = true,
  className,
  ...rest
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        margin: "-60px",
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: EASE,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}