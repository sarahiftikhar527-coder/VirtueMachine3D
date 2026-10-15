function ArticleBody({ article }) {
  const sections = article?.content ?? article?.sections;

  return (
    <article
      className="bd-article-body"
      id="article-start"
    >
      <div className="bd-reading-label">
        <span />
        INSIDE THE ARTICLE
      </div>

      {Array.isArray(sections) && sections.length > 0 ? (
        sections.map((section, index) => {
          if (typeof section === "string") {
            return (
              <p className="bd-paragraph" key={index}>
                {section}
              </p>
            );
          }

          if (!section || typeof section !== "object") {
            return null;
          }

          const heading = section.heading || section.title;

          const body =
            section.text || section.body || section.content;

          return (
            <section
              className="bd-content-section"
              key={`${article.id}-${index}`}
            >
              {heading && <h2>{heading}</h2>}

              {typeof body === "string" && (
                <p className="bd-paragraph">{body}</p>
              )}

              {Array.isArray(body) &&
                body.map((paragraph, paragraphIndex) => {
                  const paragraphText =
                    typeof paragraph === "string"
                      ? paragraph
                      : paragraph?.text ||
                        paragraph?.body ||
                        "";

                  if (!paragraphText) return null;

                  return (
                    <p
                      className="bd-paragraph"
                      key={paragraphIndex}
                    >
                      {paragraphText}
                    </p>
                  );
                })}
            </section>
          );
        })
      ) : (
        <p className="bd-paragraph">
          {article?.excerpt ||
            "More information about this article will be available soon."}
        </p>
      )}

      <div className="bd-article-footer">
        <span className="bd-footer-line" />

        <span>
          Designed around better manufacturing decisions.
        </span>
      </div>
    </article>
  );
}

export default ArticleBody;