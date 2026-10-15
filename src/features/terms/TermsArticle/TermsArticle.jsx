import "./TermsArticle.css";
import { terms } from "../../../data/terms";

function TermsArticle() {
  return (
    <article className="terms-article">
      {terms.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="terms-article__section"
        >
          <h2>
            <span className="terms-article__number">
              {section.number}
            </span>

            <span className="terms-article__heading">
              {section.title}
            </span>
          </h2>

          <div className="terms-article__content">
            {section.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index}>
                    {block.text}
                  </p>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index}>
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </section>
      ))}
    </article>
  );
}

export default TermsArticle;