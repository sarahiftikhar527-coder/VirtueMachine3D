import {
  termsContents,
  termsSidebarData,
} from "../../../data/terms";

import "./TermsSidebar.css";

function TermsSidebar() {
  return (
    <aside className="terms-sidebar">
      <div className="terms-sidebar__header">
        <h2>{termsSidebarData.title}</h2>
        <p>{termsSidebarData.description}</p>
      </div>

      <nav aria-label="Terms and Conditions sections">
        <ul className="terms-sidebar__list">
          {termsContents.map((item) => (
            <li key={item.id}>
              <a
                className="terms-sidebar__link"
                href={`#${item.id}`}
              >
                <span className="terms-sidebar__number">
                  {item.number}
                </span>

                <span className="terms-sidebar__title">
                  {item.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default TermsSidebar;