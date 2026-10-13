
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const item = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      delay: i * 0.13,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const maskReveal = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
  },
  show: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const SERVICE_IMAGES = {
  "rapid-prototyping":
    "/src/assets/images/Services/Icons/rapidPrototyping.webp",
  "industrial-3d-printing":
    "/src/assets/images/Services/Icons/productionParts.webp",
  "custom-3d-printing":
    "/src/assets/images/Services/Icons/customPrinting.webp",
  "product-development":
    "/src/assets/images/Services/Icons/scanning.webp",
  "functional-prototypes":
    "/src/assets/images/Services/Icons/functionalPrototypes.webp",
  "engineering-parts":
    "/src/assets/images/Services/Icons/Engineering-Parts.webp",
  "replacement-parts":
    "/src/assets/images/Services/Icons/materialsExpertise.webp",
  "small-batch-manufacturing":
    "/src/assets/images/Services/Icons/Small-Batch-Manufacturing.webp",
  "cnc-procurement":
    "/src/assets/images/Services/Icons/cncpartsprocurement.webp",
};

const DEFAULT_IMAGE =
  "/src/assets/images/Services/Icons/productionParts.webp";

export default function ServiceDetailHero({ service }) {
  const shouldReduceMotion = useReducedMotion();

  if (!service) return null;

  const headline =
    service.hero?.headline ||
    service.title ||
    "Precision Engineering Services";

  const subtitle =
    service.hero?.sub ||
    service.subtitle ||
    service.desc ||
    service.description ||
    "High-performance manufacturing and engineering solutions tailored to your project requirements.";

  const primaryCta = service.hero?.primaryCta || {
    label: "Get a Quote",
    href: `/contact?service=${encodeURIComponent(
      service.id || service.title || ""
    )}`,
  };

  const secondaryCta = service.hero?.secondaryCta || {
    label: "Explore the Process",
    href: "#process",
  };

  const imageSrc =
    service.heroImage ||
    service.image ||
    service.imageUrl ||
    SERVICE_IMAGES[service.id] ||
    DEFAULT_IMAGE;

  const handleImageError = (event) => {
    if (event.currentTarget.dataset.fallbackApplied === "true") return;

    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = DEFAULT_IMAGE;
  };

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        animate: "show",
      };

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#080A08] pt-24 text-[#F5F7F4] sm:pt-28 lg:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-full max-w-7xl -translate-x-1/2 bg-[#16C868]/5 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-12 lg:gap-14 lg:pb-24">
        <motion.div
          variants={shouldReduceMotion ? undefined : maskReveal}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
          className="relative order-2 min-w-0 lg:order-1 lg:col-span-6"
        >
          <div className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-[#101410] shadow-2xl">
            <img
              src={imageSrc}
              alt={`${service.title || "Virtue Mechanics"} manufacturing service`}
              onError={handleImageError}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-center brightness-95 contrast-105 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080A08]/45 via-transparent to-transparent"
            />

            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-1/3 bg-[#16C868]" />
          </div>

        
        </motion.div>

        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:col-span-6">
          <motion.nav
            aria-label="Breadcrumb"
            variants={item}
            {...animationProps}
            custom={0}
            // FONT SIZE: Breadcrumb Services / service title.
            // text-xs = 12px | text-sm = 14px
            className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/55"
          >
            <Link
              to="/services"
              className="transition-colors hover:text-[#16C868]"
            >
              Services
            </Link>

            <ChevronRight className="h-3.5 w-3.5 text-[#16C868]" />

            <span className="break-words text-white/85">
              {service.title}
            </span>
          </motion.nav>

          <motion.div
            variants={item}
            {...animationProps}
            custom={1}
            className="mb-5 flex items-center gap-3"
          >
           
          </motion.div>

          <motion.h1
            variants={item}
            {...animationProps}
            custom={2}
            // MAIN HEADING FONT SIZE:
            // text-4xl = 36px on mobile
            // sm:text-5xl = 48px on screens 640px and wider
            // lg:text-6xl = 60px on screens 1024px and wider
            // Increase: text-5xl sm:text-6xl lg:text-7xl
            // Decrease: text-3xl sm:text-4xl lg:text-5xl
            className="vm-display mb-6 break-words text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            variants={item}
            {...animationProps}
            custom={3}
            // DESCRIPTION FONT SIZE:
            // text-base = 16px on mobile
            // sm:text-lg = 18px on screens 640px and wider
            // Increase: text-lg sm:text-xl
            // Decrease: text-sm sm:text-base
            // leading-7 / sm:leading-8 controls line spacing, not font size.
            className="mb-8 max-w-xl text-base leading-7 text-[#F5F7F4]/70 sm:text-lg sm:leading-8"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={item}
            {...animationProps}
            custom={4}
            className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link
              to={primaryCta.href || "/contact"}
              // BUTTON FONT SIZE:
              // font-semibold controls font weight.
              // Add text-lg for 18px or text-base for 16px.
              className="group inline-flex min-h-10 items-center justify-center gap-3 rounded-sm bg-[#16C868] px-4 py-2 font-semibold text-[#080A08] transition-colors duration-300 hover:bg-[#20DF78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16C868]"
            >
              {primaryCta.label || "Get a Quote"}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={secondaryCta.href || "#process"}
              // SECONDARY BUTTON FONT SIZE:
              // Add text-lg for 18px or text-base for 16px.
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-7 py-4 font-medium text-white transition-colors duration-300 hover:border-[#16C868] hover:text-[#16C868] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16C868]"
            >
              {secondaryCta.label || "Explore the Process"}
            </a>
          </motion.div>

          <motion.div
            variants={item}
            {...animationProps}
            custom={5}
            className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3"
          >
            {(service.heroHighlights || [
              "Engineering-focused solutions",
              "Project-specific requirements",
              "Quote tailored to your needs",
            ])
              .slice(0, 3)
              .map((text, index) => (
                <div
                  key={`${typeof text === "string" ? text : text.text}-${index}`}
                  className="flex items-start gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#16C868]"
                  />

                  {/* HIGHLIGHTS FONT SIZE:
                      text-sm = 14px
                      text-base = 16px
                      text-lg = 18px */}
                  <span className="text-xs leading-6 text-white/70">
                    {typeof text === "string" ? text : text.text}
                  </span>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
