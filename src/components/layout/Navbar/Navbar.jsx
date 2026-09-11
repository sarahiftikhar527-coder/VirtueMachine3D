import { useEffect, useMemo, useRef, useState } from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  ChevronDown,
  Menu,
  Search,
  X,
  ArrowUpRight,
} from "lucide-react";
import Logo from "../Logo/Logo.jsx";
import Button from "../../common/Button.jsx";
import {
  NAV_LINKS,
  PAGES_DROPDOWN,
} from "../../../data/navigation.js";
import { useScrolled } from "../../../hooks/useScrolled.js";
import PagesDropdown from "./PagesDropdown.jsx";
import MobileMenu from "./MobileMenu.jsx";
import "./navbar.css";
import "./mobilemenu.css";

const SEARCH_ITEMS = [
  ...NAV_LINKS.map((item) => ({
    label: item.label,
    to: item.to,
    type: "Navigation",
  })),
  ...PAGES_DROPDOWN.map((item) => ({
    label: item.label,
    to: item.to,
    type: "Page",
  })),
  {
    label: "Contact",
    to: "/contact",
    type: "Navigation",
  },
];

export default function Navbar() {
  const scrolled = useScrolled(30);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPagesOpen(false);
    setMobileOpen(false);
    setMobilePagesOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const pagesIsActive = PAGES_DROPDOWN.some((item) => {
    const base = item.to.split("#")[0];

    return (
      location.pathname === base &&
      base !== "/"
    );
  });

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return SEARCH_ITEMS.filter((item) => {
      const labelMatch = item.label
        .toLowerCase()
        .includes(query);

      const routeMatch = item.to
        .toLowerCase()
        .includes(query);

      return labelMatch || routeMatch;
    }).slice(0, 6);
  }, [searchQuery]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchResults.length > 0) {
      navigate(searchResults[0].to);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const handleSearchResult = (to) => {
    navigate(to);
    setSearchQuery("");
    setSearchOpen(false);
  };

  return (
    <header
      className={`navbar on-dark ${
        scrolled ? "navbar--scrolled" : ""
      } ${
        mobileOpen ? "navbar--menu-open" : ""
      }`}
    >
      <div className="container navbar__inner">
        <Logo />

        <nav
          className="navbar__nav"
          aria-label="Primary"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `navbar__link ${
                      isActive ? "is-active" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li className="navbar__pages">
              <button
                type="button"
                className={`navbar__link navbar__link--btn ${
                  pagesIsActive ? "is-active" : ""
                } ${
                  pagesOpen ? "is-open" : ""
                }`}
                aria-expanded={pagesOpen}
                aria-haspopup="true"
                onClick={() =>
                  setPagesOpen((value) => !value)
                }
              >
                Pages

                <ChevronDown
                  size={14}
                  className="navbar__chevron"
                />
              </button>

              <PagesDropdown
                open={pagesOpen}
                onClose={() =>
                  setPagesOpen(false)
                }
              />
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navbar__link ${
                    isActive ? "is-active" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar__right">
          <div
            ref={searchRef}
            className={`navbar__search ${
              searchOpen ? "is-open" : ""
            }`}
          >
            <button
              type="button"
              className="navbar__search-button"
              aria-label="Open search"
              onClick={() =>
                setSearchOpen(true)
              }
            >
              <Search
                size={19}
                strokeWidth={2.1}
              />
            </button>

            <div
              className={`navbar__search-panel ${
                searchOpen ? "is-visible" : ""
              }`}
            >
              <form
                className="navbar__search-form"
                onSubmit={handleSearchSubmit}
              >
                <Search
                  size={18}
                  strokeWidth={2.2}
                  className="navbar__search-form-icon"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(
                      event.target.value
                    )
                  }
                  placeholder="Search..."
                  aria-label="Search website"
                  autoFocus={searchOpen}
                />

                <button
                  type="button"
                  className="navbar__search-close"
                  aria-label="Close search"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                >
                  <X size={16} />
                </button>
              </form>

              {searchQuery.trim() && (
                <div className="navbar__search-results">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => (
                      <button
                        key={`${item.to}-${item.label}`}
                        type="button"
                        className="navbar__search-result"
                        onClick={() =>
                          handleSearchResult(
                            item.to
                          )
                        }
                      >
                        <span className="navbar__search-result-icon">
                          <ArrowUpRight size={15} />
                        </span>

                        <span className="navbar__search-result-content">
                          <span className="navbar__search-result-label">
                            {item.label}
                          </span>

                          <span className="navbar__search-result-type">
                            {item.type}
                          </span>
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="navbar__search-empty">
                      <Search size={16} />
                      <span>
                        No results found
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <Button
            to="/contact"
            size="sm"
            className="navbar__cta"
          >
            Get a Quote
          </Button>

          <button
            type="button"
            className="navbar__burger"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(true)
            }
          >
            <Menu size={21} />
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
        pagesOpen={mobilePagesOpen}
        onTogglePages={() =>
          setMobilePagesOpen(
            (value) => !value
          )
        }
      />
    </header>
  );
}