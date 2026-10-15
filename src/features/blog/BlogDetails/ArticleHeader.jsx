
import { CalendarDays, Clock3 } from "lucide-react";

function ArticleHeader({ article }) {
  return (
    <header className="bd-article-header">
      <span className="bd-category">
        <span className="bd-category-dot" />
        {article.category}
      </span>

      <h1>{article.title}</h1>

      <p className="bd-excerpt">
        {article.excerpt ||
          "Explore practical insights, ideas and engineering approaches from the Virtue Mechanics team."}
      </p>

      <div className="bd-meta">
        <span>
          <CalendarDays size={16} />
          {article.date}
        </span>

        <span className="bd-meta-divider" />

        <span>
          <Clock3 size={16} />
          {article.readTime}
        </span>
      </div>
    </header>
  );
}

export default ArticleHeader;
