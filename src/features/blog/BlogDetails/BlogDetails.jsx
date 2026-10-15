
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { BLOG_POSTS } from "../../../data/blog/posts.js";

import ArticleHeader from "./ArticleHeader.jsx";
import ArticleBody from "./ArticleBody.jsx";
import Sidebar from "./Sidebar.jsx";
import KeepReading from "./KeepReading.jsx";

import "./blogDetails.css";

import article1 from "../../../assets/images/Blog/Article/article1.webp";
import article2 from "../../../assets/images/Blog/Article/article2.webp";
import article3 from "../../../assets/images/Blog/Article/article3.webp";
import article4 from "../../../assets/images/Blog/Article/article4.webp";
import article5 from "../../../assets/images/Blog/Article/article5.webp";
import article6 from "../../../assets/images/Blog/Article/article6.webp";

const articleImages = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
];

function BlogDetails() {
  const { id } = useParams();

  const posts = BLOG_POSTS.map((post, index) => ({
    ...post,
    image: articleImages[index % articleImages.length],
  }));

  const article = posts.find(
    (post) => String(post.id) === String(id)
  );

  if (!article) {
    return (
      <main className="bd-not-found">
        <span className="bd-eyebrow">
          ARTICLE NOT FOUND
        </span>

        <h1>We couldn't find this article.</h1>

        <p>
          The article may have been moved or is no longer available.
        </p>

        <Link to="/blog" className="bd-back-link">
          <ArrowLeft size={17} />
          Back to Journal
        </Link>
      </main>
    );
  }

  const relatedPosts = posts
    .filter(
      (post) => String(post.id) !== String(article.id)
    )
    .slice(0, 3);

  return (
    <main className="bd-page">
      <div className="bd-container">
        <Link to="/blog" className="bd-back-link">
          <ArrowLeft size={17} />
          Back to Journal
        </Link>

        <ArticleHeader article={article} />

        <div className="bd-featured-image">
          <img
            src={article.image}
            alt={article.title}
          />

          <span className="bd-image-label">
            VIRTUE MECHANICS JOURNAL
          </span>
        </div>

        <div className="bd-content-layout">
          {/*
            Desktop:
            Article on the left, sidebar on the right.

            Mobile:
            CSS display: contents allows the sidebar
            sections to be ordered around the article.
          */}
          <ArticleBody article={article} />

          <Sidebar relatedPosts={relatedPosts} />
        </div>

        {/* CONTINUE EXPLORING */}
        <KeepReading posts={relatedPosts} />
      </div>
    </main>
  );
}

export default BlogDetails;