import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Boxes,
  Layers,
  Workflow,
  CircleHelp,
  ArrowUpRight,
} from "lucide-react";
import { PAGES_DROPDOWN } from "../../../data/navigation.js";

const ICONS = {
  "/technologies": Boxes,
  "/materials": Layers,
  "/process": Workflow,
  "/process#faq": CircleHelp,
};

const EASE = [0.22, 1, 0.36, 1];

export default function PagesDropdown({
  open,
  onClose,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          className="pagesmenu"
          initial={{
            opacity: 0,
            y: 12,
            x: "-50%",
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: "-50%",
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 8,
            x: "-50%",
            scale: 0.97,
          }}
          transition={{
            duration: 0.28,
            ease: EASE,
          }}
          role="menu"
        >
          <div className="pagesmenu__grid">
            {PAGES_DROPDOWN.map((page, index) => {
              const Icon =
                ICONS[page.to] ?? Boxes;

              return (
                <motion.div
                  key={`${page.to}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      0.05 + index * 0.04,
                    duration: 0.3,
                    ease: EASE,
                  }}
                >
                  <Link
                    to={page.to}
                    className="pagesmenu__item"
                    onClick={onClose}
                    role="menuitem"
                  >
                    <span className="pagesmenu__icon">
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>

                    <span className="pagesmenu__body">
                      <span className="pagesmenu__label">
                        {page.label}

                        <ArrowUpRight
                          size={13}
                          className="pagesmenu__arrow"
                        />
                      </span>

                      <span className="pagesmenu__desc">
                        {page.desc}
                      </span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="pagesmenu__foot">
            <Link
              to="/contact"
              onClick={onClose}
            >
              Start a project
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}