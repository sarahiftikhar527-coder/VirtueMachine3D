
import { motion } from "framer-motion"
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react"
import { Link } from "react-router-dom"
import { BLOG_POSTS } from "../../../data/blog/posts.js"

import article1 from "../../../assets/images/Blog/Article/article1.webp"
import article2 from "../../../assets/images/Blog/Article/article2.webp"
import article3 from "../../../assets/images/Blog/Article/article3.webp"
import article4 from "../../../assets/images/Blog/Article/article4.webp"
import article5 from "../../../assets/images/Blog/Article/article5.webp"
import article6 from "../../../assets/images/Blog/Article/article6.webp"

import "./blogGrid.css"

const EASE = [0.22, 1, 0.36, 1]

const ARTICLE_IMAGES = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
]

export default function BlogGrid() {
  return (
    <section className="bloggrid">
      <div className="container">
        <div className="bloggrid__top">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: EASE }}
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            Practical knowledge from 3D printing,
            precision engineering and product development.
          </motion.p>
        </div>

        <div className="bloggrid__cards">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              className="blogcard"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
                ease: EASE,
              }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="blogcard__visual"
                aria-label={`Read ${post.title}`}
              >
                <img
                  className="blogcard__image"
                  src={ARTICLE_IMAGES[index % ARTICLE_IMAGES.length]}
                  alt={post.title}
                  loading="lazy"
                />

                <span className="blogcard__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="blogcard__category">
                  {post.category}
                </span>

                <span className="blogcard__arrow">
                  <ArrowUpRight size={18} />
                </span>
              </Link>

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
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p>{post.excerpt}</p>

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
