
import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar({ relatedPosts }) {
  return (
    <aside className="bd-sidebar">
      {/* ON THIS PAGE */}
      <div className="bd-sidebar-card bd-toc-card">
        <span className="bd-sidebar-eyebrow">
          ON THIS PAGE
        </span>

        <h3>Explore the article</h3>

        <a href="#article-start" className="bd-toc-link">
          <span />
          Article overview
        </a>

        <a href="#article-start" className="bd-toc-link">
          <span />
          Key considerations
        </a>

        <a href="#article-start" className="bd-toc-link">
          <span />
          Practical insights
        </a>
      </div>

      {/* MORE INSIGHTS */}
      <div className="bd-sidebar-card bd-related-card">
        <span className="bd-sidebar-eyebrow">
          MORE INSIGHTS
        </span>

        <h3>Related articles</h3>

        <div className="bd-sidebar-posts">
          {relatedPosts.slice(0, 3).map((post) => (
            <Link
              to={`/blog/${post.id}`}
              className="bd-sidebar-post"
              key={post.id}
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
              />

              <div>
                <span className="bd-mini-category">
                  {post.category}
                </span>

                <h4>{post.title}</h4>

                <span className="bd-mini-time">
                  <Clock3 size={12} />
                  {post.readTime}
                </span>
              </div>

              <ArrowUpRight
                className="bd-sidebar-arrow"
                size={16}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* PROJECT CTA */}
      <div className="bd-cta-card">
        <span className="bd-cta-mark">VM</span>

        <span className="bd-sidebar-eyebrow">
          HAVE A PROJECT IN MIND?
        </span>

        <h3>Let's make your next idea real.</h3>

        <p>
          Talk with our team about your 3D printing,
          prototyping or CNC parts procurement requirements.
        </p>

        <Link to="/contact" className="bd-cta-link">
          Discuss your project
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;