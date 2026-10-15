import { useMemo, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon, ArrowUpRight, X } from "lucide-react";
import {
  NAV_LINKS,
  PAGES_DROPDOWN,
} from "../../../data/navigation.js";
import { SERVICES } from "../../../data/services/list.js";
import "./Search.css";

const SEARCH_ITEMS = [
  ...NAV_LINKS.map((item) => ({
    label: item.label,
    to: item.to,
    type: "Page",
  })),
  ...PAGES_DROPDOWN.map((item) => ({
    label: item.label,
    to: item.to,
    type: "Page",
  })),
  ...SERVICES.map((service) => ({
    label: service.title,
    to: `/services/${service.id}`,
    type: "Service",
    description: service.desc || "",
  })),
].filter(
  (item, index, items) =>
    items.findIndex(
      (result) =>
        result.to === item.to && result.label === item.label
    ) === index
);

export default function Search({ onClose }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const searchResults = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return [];

    return SEARCH_ITEMS.filter((item) =>
      item.label.trim().toLowerCase().startsWith(value)
    ).slice(0, 8);
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();

    const handleOutsideClick = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        onClose?.();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const openResult = (to) => {
    navigate(to);
    setQuery("");
    onClose?.();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchResults.length > 0) {
      openResult(searchResults[0].to);
    }
  };

  return (
    <div
      className="navbar__search-panel is-visible"
      ref={searchRef}
    >
      <form
        className="navbar__search-form"
        onSubmit={handleSubmit}
      >
        <SearchIcon
          size={18}
          strokeWidth={2}
          className="navbar__search-form-icon"
        />

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search pages and services..."
          aria-label="Search pages and services"
          autoComplete="off"
        />

        {query && (
          <button
            type="button"
            className="navbar__search-close"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
          >
            <X size={16} />
          </button>
        )}
      </form>

      <div className="navbar__search-results">
        {!query.trim() ? (
          <div className="navbar__search-empty">
            <SearchIcon size={16} />
            <span>Start typing to search</span>
          </div>
        ) : searchResults.length > 0 ? (
          searchResults.map((item) => (
            <button
              key={`${item.to}-${item.label}`}
              type="button"
              className="navbar__search-result"
              onClick={() => openResult(item.to)}
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
            <SearchIcon size={16} />
            <span>No results found</span>
          </div>
        )}
      </div>
    </div>
  );
}