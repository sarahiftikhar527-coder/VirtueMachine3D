
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp, stagger, viewOnce } from "./Motionpresets.js";

export default function FinalCTA() {
  return (
    <section className="bg-[var(--ink)] py-16 text-white sm:py-20 lg:py-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewOnce}
        className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-5 sm:items-center sm:text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="vm-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          Have a drawing ready? Get your quote.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="max-w-xl text-base leading-7 text-white/75 sm:text-lg"
        >
          Send your files with quantity, material and finish. We reply within
          one working day with design feedback and the next steps.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            to="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--blue)] px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4A7FFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request a quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
