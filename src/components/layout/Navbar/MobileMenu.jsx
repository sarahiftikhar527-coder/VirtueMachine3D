import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Mail, Phone, ArrowUpRight } from "lucide-react";
import Button from "../../../components/ui/Button.jsx";
import { NAV_LINKS, PAGES_DROPDOWN } from "../../../data/navigation.js";
import "./mobilemenu.css";

const EASE = [0.22, 1, 0.36, 1];

/* Circle reveal starts from the hamburger corner */
const OVERLAY = {
  hidden: { clipPath: "circle(0% at 90% 4%)" },
  show: {
    clipPath: "circle(150% at 90% 4%)",
    transition: { duration: 0.75, ease: EASE },
  },
  exit: {
    clipPath: "circle(0% at 90% 4%)",
    transition: { duration: 0.5, ease: EASE },
  },
};

/* Staggered rise-in for each navigation row */
const ROW = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.055,
      duration: 0.48,
      ease: EASE,
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.14 },
  },
};

const pad = (n) => String(n + 1).padStart(2, "0");

export default function MobileMenu({
  open,
  onClose,
  pagesOpen,
  onTogglePages,
}) {
  const pagesIndex = NAV_LINKS.length;
  const contactIndex = NAV_LINKS.length + 1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          className="mobilemenu"
          variants={OVERLAY}
          initial="hidden"
          animate="show"
          exit="exit"
          aria-label="Mobile navigation menu"
        >
          {/* Decorative gradient background */}
          <div className="mobilemenu__bg" aria-hidden="true">
            <span className="mobilemenu__glow mobilemenu__glow--a" />
            <span className="mobilemenu__glow mobilemenu__glow--b" />
            <span className="mobilemenu__grid" />
          </div>

          <div className="mobilemenu__scroll">
            <div className="mobilemenu__layout">
              {/* Navigation links */}
              <nav className="mobilemenu__list" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.to}
                    custom={index}
                    variants={ROW}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `mobilemenu__item ${isActive ? "is-active" : ""}`
                      }
                      onClick={onClose}
                    >
                      <span className="mobilemenu__num">{pad(index)}</span>
                      <span className="mobilemenu__label">{link.label}</span>
                      <span className="mobilemenu__arrow">
                        <ArrowUpRight size={17} />
                      </span>
                    </NavLink>
                  </motion.div>
                ))}

                {/* Pages accordion */}
                <motion.div
                  custom={pagesIndex}
                  variants={ROW}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <button
                    type="button"
                    className={`mobilemenu__item ${pagesOpen ? "is-open" : ""}`}
                    aria-expanded={pagesOpen}
                    aria-controls="mobile-pages-submenu"
                    onClick={onTogglePages}
                  >
                    <span className="mobilemenu__num">{pad(pagesIndex)}</span>
                    <span className="mobilemenu__label">Pages</span>
                    <span className="mobilemenu__plus">
                      <Plus size={17} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {pagesOpen && (
                      <motion.div
                        id="mobile-pages-submenu"
                        className="mobilemenu__sub"
                        initial={{ height: 0, opacity: 0, y: -6 }}
                        animate={{ height: "auto", opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -4 }}
                        transition={{ duration: 0.32, ease: EASE }}
                      >
                        <div className="mobilemenu__chips">
                          {PAGES_DROPDOWN.map((page, index) => (
                            <motion.div
                              key={`${page.to}-${index}`}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: 0.035 + index * 0.035,
                                duration: 0.24,
                                ease: EASE,
                              }}
                            >
                              <NavLink
                                to={page.to}
                                className={({ isActive }) =>
                                  `mobilemenu__chip ${isActive ? "is-active" : ""}`
                                }
                                onClick={onClose}
                              >
                                <span>{page.label}</span>
                                <ArrowUpRight size={13} />
                              </NavLink>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Contact link */}
                <motion.div
                  custom={contactIndex}
                  variants={ROW}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `mobilemenu__item ${isActive ? "is-active" : ""}`
                    }
                    onClick={onClose}
                  >
                    <span className="mobilemenu__num">{pad(contactIndex)}</span>
                    <span className="mobilemenu__label">Contact</span>
                    <span className="mobilemenu__arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  </NavLink>
                </motion.div>
              </nav>

              {/* Side panel / footer */}
              <motion.aside
                className="mobilemenu__aside"
                custom={contactIndex + 1}
                variants={ROW}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <p className="mobilemenu__eyebrow">3D Printing · Prototyping</p>
                <h3 className="mobilemenu__tagline">
                  From idea to <em>reality.</em>
                </h3>

                <Button
                  to="/contact"
                  className="mobilemenu__cta-btn"
                  onClick={onClose}
                >
                  Start a Project
                </Button>

                <div className="mobilemenu__contact">
                  <a href="mailto:hello@virtuemechanics.com">
                    <span className="mobilemenu__contact-icon">
                      <Mail size={15} />
                    </span>
                    <span>hello@virtuemechanics.com</span>
                  </a>
                  <a href="tel:+15125550142">
                    <span className="mobilemenu__contact-icon">
                      <Phone size={15} />
                    </span>
                    <span>+1 (512) 555-0142</span>
                  </a>
                </div>
              </motion.aside>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
