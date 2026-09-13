import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  X,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import Logo from "../Logo/Logo.jsx";
import Button from "../../common/Button.jsx";
import {
  NAV_LINKS,
  PAGES_DROPDOWN,
} from "../../../data/navigation.js";
import "./mobilemenu.css";

const EASE = [0.22, 1, 0.36, 1];

export default function MobileMenu({
  open,
  onClose,
  pagesOpen,
  onTogglePages,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          className="mobilemenu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="mobilemenu__panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 34,
            }}
          >
            <div className="mobilemenu__head">
              <Logo />

              <button
                type="button"
                className="mobilemenu__close"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X size={19} />
              </button>
            </div>

            <nav
              className="mobilemenu__list"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{
                    opacity: 0,
                    x: 24,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.08 + index * 0.05,
                    duration: 0.4,
                    ease: EASE,
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `mobilemenu__item ${
                        isActive ? "is-active" : ""
                      }`
                    }
                    onClick={onClose}
                  >
                    <span>{link.label}</span>
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 24,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay:
                    0.08 +
                    NAV_LINKS.length * 0.05,
                  duration: 0.4,
                  ease: EASE,
                }}
              >
                <button
                  type="button"
                  className={`mobilemenu__item ${
                    pagesOpen ? "is-open" : ""
                  }`}
                  aria-expanded={pagesOpen}
                  aria-controls="mobile-pages-submenu"
                  onClick={onTogglePages}
                >
                  <span>Pages</span>

                  <span className="mobilemenu__pages-icon">
                    <ChevronDown
                      size={17}
                      style={{
                        transform: pagesOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition:
                          "transform 0.3s ease",
                      }}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {pagesOpen && (
                    <motion.div
                      id="mobile-pages-submenu"
                      className="mobilemenu__sub"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.32,
                        ease: EASE,
                      }}
                    >
                      {PAGES_DROPDOWN.map(
                        (page, index) => (
                          <NavLink
                            key={`${page.to}-${index}`}
                            to={page.to}
                            className="mobilemenu__sublink"
                            onClick={onClose}
                          >
                            <span className="mobilemenu__sublink-main">
                              {page.label}
                            </span>

                            <span className="mobilemenu__sublink-arrow">
                              <ArrowUpRight size={14} />
                            </span>
                          </NavLink>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 24,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay:
                    0.13 +
                    NAV_LINKS.length * 0.05,
                  duration: 0.4,
                  ease: EASE,
                }}
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `mobilemenu__item ${
                      isActive ? "is-active" : ""
                    }`
                  }
                  onClick={onClose}
                >
                  <span>Contact</span>
                </NavLink>
              </motion.div>
            </nav>

            <div className="mobilemenu__footer">
              <Button
                to="/contact"
                className="mobilemenu__cta-btn"
                onClick={onClose}
              >
                Start a Project
              </Button>

              <div className="mobilemenu__contact">
                <a href="mailto:hello@virtuemechanics.com">
                  <Mail size={14} />
                  <span>
                    hello@virtuemechanics.com
                  </span>
                </a>

                <a href="tel:+15125550142">
                  <Phone size={14} />
                  <span>
                    +1 (512) 555-0142
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}