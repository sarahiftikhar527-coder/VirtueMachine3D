import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PAGES_DROPDOWN } from "../../../data/navigation.js";
import "./PagesDropdown.css";

export default function PagesDropdown({ open, onClose }) {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        const pagesButton = event.target.closest(".navbar__pages");

        if (!pagesButton) {
          onClose();
        }
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    onClose();
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          className="pagesmenu"
          initial={{
            opacity: 0,
            y: -6,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -6,
            scale: 0.98,
          }}
          transition={{
            duration: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="pagesmenu__list">
            {PAGES_DROPDOWN.map((page) => (
              <NavLink
                key={page.to}
                to={page.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `pagesmenu__item ${
                    isActive ? "pagesmenu__item--active" : ""
                  }`
                }
              >
                {page.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}