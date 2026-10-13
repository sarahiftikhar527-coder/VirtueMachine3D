
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, MoveRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

const getLabel = (item) => {
  if (typeof item === "string") return item;
  return item?.label || item?.title || item?.name || "";
};

const getDetail = (item) => {
  if (typeof item === "string") return "";
  return item?.value || item?.description || item?.detail || "";
};

export default function ServiceOverview({ service }) {
  const reduceMotion = useReducedMotion();
  const overview = service?.overview;

  if (!overview) return null;

  const heading =
    overview.heading || overview.title || "Designed around your requirements";

  const paragraphs =
    overview.paragraphs ||
    (overview.description ? [overview.description] : []);

  const points = overview.points || [];
  const specs = overview.specs || [];

  const revealProps = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <section
      id="service-overview"
      className="relative overflow-hidden bg-[#F8F9F7] py-20 font-['Poppins'] text-[#172019] sm:py-28 lg:py-32"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-[#E1E6E0]" />

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mb-12 h-[2px] origin-left bg-[#26372B] sm:mb-16"
        />

        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <motion.div
              {...revealProps}
              variants={container}
              className="flex flex-col items-start"
            >
              <motion.div
                variants={reveal}
                className="mb-8 flex items-center gap-3"
              >
               
              </motion.div>

              <motion.h2
                variants={reveal}
                className="max-w-[700px] text-[36px] font-semibold leading-[1.18] tracking-[-1.5px] sm:text-[46px] sm:leading-[1.15] sm:tracking-[-2px] lg:text-[46px] lg:tracking-[-2.6px]"
              >
                {heading}
              </motion.h2>

              <motion.div
                variants={reveal}
                className="mt-6 h-[3px] w-16 origin-left bg-[#31814B]"
              />

              <motion.div
                variants={container}
                className="mt-8 max-w-[610px] space-y-5 text-[14px] leading-[1.95] text-[#626C64] sm:text-[15px]"
              >
                {paragraphs.map((paragraph, index) => (
                  <motion.p key={index} variants={reveal}>
                    {typeof paragraph === "string"
                      ? paragraph
                      : getDetail(paragraph) || getLabel(paragraph)}
                  </motion.p>
                ))}
              </motion.div>

              {overview.note && (
                <motion.div
                  variants={reveal}
                  className="mt-8 border-l-[3px] border-[#31814B] bg-white px-5 py-4 sm:px-6"
                >
                  <p className="text-[13px] leading-7 text-[#465249] sm:text-sm">
                    {overview.note}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {points.length > 0 && (
              <motion.div
                {...revealProps}
                variants={container}
                className="mt-10 grid gap-x-7 sm:grid-cols-2"
              >
                {points.map((point, index) => (
                  <motion.div
                    key={`${index}-${getLabel(point)}`}
                    variants={reveal}
                    whileHover={
                      reduceMotion ? undefined : { x: 5 }
                    }
                    transition={{ duration: 0.25, ease }}
                    className="group flex items-start gap-3 border-t border-[#DCE2DB] py-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7F0E7] text-[#31814B] transition-colors duration-300 group-hover:bg-[#31814B] group-hover:text-white">
                      <Check size={13} strokeWidth={2.2} />
                    </span>

                    <div>
                      <p className="text-[13px] font-semibold leading-6 text-[#263329] sm:text-sm">
                        {getLabel(point)}
                      </p>
                      {getDetail(point) && (
                        <p className="mt-1 text-xs leading-6 text-[#778078]">
                          {getDetail(point)}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          <motion.div
            {...revealProps}
            variants={reveal}
            className="lg:pt-1"
          >
            <div className="overflow-hidden border border-[#DDE3DC] bg-white shadow-[0_12px_45px_rgba(24,42,28,0.045)]">
              <div className="flex items-center justify-between gap-4 border-b border-[#E7EBE5] px-5 py-6 sm:px-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#778078]">
                    Technical overview
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-0.5px] text-[#202C23] sm:text-xl">
                    {service?.title || "Service specifications"}
                  </h3>
                </div>

                <motion.span
                  animate={reduceMotion ? {} : { rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DDE5DC]"
                >
                  <span className="h-3 w-3 rounded-full bg-[#31814B]" />
                </motion.span>
              </div>

              <div className="px-5 sm:px-7">
                {specs.length > 0 ? (
                  specs.map((spec, index) => (
                    <motion.div
                      key={`${index}-${getLabel(spec)}`}
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, x: 22 }
                      }
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.55,
                        delay: reduceMotion ? 0 : index * 0.09,
                        ease,
                      }}
                      className="group grid grid-cols-[0.9fr_1.1fr] gap-4 border-b border-[#E8ECE7] py-5 last:border-b-0"
                    >
                      <span className="text-[12px] leading-6 text-[#7A827B] transition-colors duration-300 group-hover:text-[#31814B] sm:text-[13px]">
                        {getLabel(spec)}
                      </span>

                      <span className="text-right text-[12px] font-medium leading-6 text-[#303C32] sm:text-[13px]">
                        {getDetail(spec) || "Project dependent"}
                      </span>
                    </motion.div>
                  ))
                ) : (
                  <p className="py-7 text-sm leading-7 text-[#687269]">
                    Specifications are tailored to your design,
                    material and production requirements.
                  </p>
                )}
              </div>

              <div className="mx-5 border-t border-[#DCE3DC] sm:mx-7" />

              <motion.a
                href="/contact"
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.25, ease }}
                className="group m-5 flex items-center justify-between gap-4 bg-[#203127] p-5 text-white sm:m-7 sm:p-6"
              >
                <div>
                  <p className="text-[15px] font-medium tracking-[-0.3px] sm:text-base">
                    Have a project in mind?
                  </p>
                  <p className="mt-2 text-[11px] leading-6 text-white/65 sm:text-xs">
                    Let’s discuss your specifications and requirements.
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#B8D8BE]">
                    Talk to our team
                    <MoveRight size={15} />
                  </span>
                </div>

                <motion.span
                  whileHover={reduceMotion ? undefined : { rotate: 45 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25"
                >
                  <ArrowUpRight size={19} strokeWidth={1.5} />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
