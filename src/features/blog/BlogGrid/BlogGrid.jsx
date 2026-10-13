import { motion } from "framer-motion"
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react"
import { Link } from "react-router-dom"
import { BLOG_POSTS } from "../../../data/blog/posts.js";
import "./blogGrid.css"

const EASE = [0.22, 1, 0.36, 1]

export default function BlogGrid() {
return ( <section className="bloggrid"> <div className="container">
    <div className="bloggrid__top">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.7,
          ease: EASE,
        }}
      >
        <span className="bloggrid__eyebrow">
          LATEST ARTICLES
        </span>

        <h2>
          Ideas built around
          <span>better making.</span>
        </h2>
      </motion.div>

      <motion.p
        className="bloggrid__intro"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.7,
          ease: EASE,
        }}
      >
        Practical knowledge from the world of additive
        manufacturing, engineering and product
        development.
      </motion.p>
    </div>

    <div className="bloggrid__cards">
      {BLOG_POSTS.map((post, index) => (
        <motion.article
          key={post.id}
          className="blogcard"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            delay: index * 0.07,
            ease: EASE,
          }}
        >
          <div className="blogcard__visual">

            <span className="blogcard__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="blogcard__category">
              {post.category}
            </span>

            <div className="blogcard__pattern">
              <span />
              <span />
              <span />
            </div>

            <Link
              to={`/blog/${post.id}`}
              className="blogcard__arrow"
              aria-label={`Read ${post.title}`}
            >
              <ArrowUpRight size={19} />
            </Link>

          </div>

          <div className="blogcard__content">

            <div className="blogcard__meta">
              <span>
                <CalendarDays size={13} />
                {post.date}
              </span>

              <span>
                <Clock3 size={13} />
                {post.readTime}
              </span>
            </div>

            <h3>
              {post.title}
            </h3>

            <p>
              {post.excerpt}
            </p>

            <Link
              to={`/blog/${post.id}`}
              className="blogcard__read"
            >
              <span>Read article</span>
              <ArrowUpRight size={15} />
            </Link>

          </div>
        </motion.article>
      ))}
    </div>

  </div>
</section>

)
}
