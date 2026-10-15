
import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

function KeepReading({ posts }) {
  return (
    <section className="bd-keep-reading">
      <div className="bd-section-heading">
        <div>
          <span className="bd-eyebrow">CONTINUE EXPLORING</span>
          <h2>Keep reading<span>.</span></h2>
          <p>More ideas and insights from the Virtue Mechanics journal.</p>
        </div>

        <Link to="/blog" className="bd-view-all">
          View all articles
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <div className="bd-reading-grid">
        {posts.slice(0, 3).map((post) => (
          <Link
            to={`/blog/${post.id}`}
            className="bd-reading-card"
            key={post.id}
          >
            <div className="bd-reading-image">
              <img src={post.image} alt={post.title} loading="lazy" />
              <span className="bd-reading-image-arrow">
                <ArrowUpRight size={18} />
              </span>
            </div>

            <div className="bd-reading-card-content">
              <span className="bd-mini-category">{post.category}</span>
              <h3>{post.title}</h3>
              <div className="bd-reading-meta">
                <span>{post.date}</span>
                <span>
                  <Clock3 size={13} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default KeepReading;
