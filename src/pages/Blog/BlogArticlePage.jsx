import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

const EASE = [0.22, 1, 0.36, 1];

const ARTICLES = {
  1: {
    category: "3D Printing",
    title: "How 3D Printing Is Changing Modern Product Development",
    date: "September 10, 2026",
    readTime: "5 min read",
    excerpt:
      "Discover how additive manufacturing is helping teams move from concept to physical parts faster and with greater flexibility.",
    sections: [
      {
        heading: "A Faster Way to Build",
        text: "3D printing has changed the way modern products are designed, tested and manufactured. Instead of waiting for traditional tooling and production processes, engineering teams can create physical parts directly from digital designs.",
      },
      {
        heading: "From Concept to Prototype",
        text: "One of the biggest advantages of additive manufacturing is the ability to turn a CAD model into a physical prototype quickly. Designers can test dimensions, ergonomics and functionality before committing to larger production runs.",
      },
      {
        heading: "Reducing Development Time",
        text: "Rapid iteration allows teams to identify design problems earlier. A component can be printed, tested, modified and printed again without rebuilding expensive tooling.",
      },
      {
        heading: "More Flexible Manufacturing",
        text: "Modern 3D printing makes it easier to produce complex geometries and customized components. This flexibility is useful for engineering projects, low-volume production and specialized parts.",
      },
      {
        heading: "The Future of Product Development",
        text: "As printing technologies and materials continue to improve, additive manufacturing is becoming an increasingly practical part of the product development process.",
      },
    ],
  },

  2: {
    category: "Prototyping",
    title: "From Digital Model to Functional Prototype",
    date: "September 04, 2026",
    readTime: "4 min read",
    excerpt:
      "A practical look at how rapid prototyping turns digital designs into functional parts ready for testing and refinement.",
    sections: [
      {
        heading: "The Digital Starting Point",
        text: "Every functional prototype begins with a digital design. CAD software allows engineers to define geometry, dimensions and important functional features before manufacturing begins.",
      },
      {
        heading: "Printing the First Version",
        text: "Once the design is ready, additive manufacturing can transform the digital model into a physical component. This gives engineers something tangible to inspect and test.",
      },
      {
        heading: "Testing and Refinement",
        text: "A prototype provides valuable information that may not be visible on a computer screen. Fit, movement, assembly and usability can all be evaluated before the final design is approved.",
      },
      {
        heading: "Why Rapid Prototyping Matters",
        text: "Fast prototyping reduces development cycles and helps teams make better design decisions earlier in the process.",
      },
    ],
  },

  3: {
    category: "Materials",
    title: "Choosing the Right Material for Your 3D Printed Part",
    date: "August 28, 2026",
    readTime: "6 min read",
    excerpt:
      "Material selection can affect strength, flexibility, durability and finish. Here is what to consider before printing.",
    sections: [
      {
        heading: "Material Selection Matters",
        text: "Choosing the correct material is an important part of successful 3D printing. Different applications require different levels of strength, flexibility, heat resistance and durability.",
      },
      {
        heading: "Consider the Application",
        text: "Before selecting a material, consider how the printed component will be used. Mechanical loads, temperature, environmental exposure and expected service life can all influence the decision.",
      },
      {
        heading: "Strength and Durability",
        text: "Some materials are better suited for structural and functional components, while others are more appropriate for visual prototypes and concept models.",
      },
      {
        heading: "Surface Finish",
        text: "Material choice can also influence the appearance and finishing options of the final component.",
      },
    ],
  },

  4: {
    category: "Manufacturing",
    title: "When to Move From Prototypes to Production Parts",
    date: "August 21, 2026",
    readTime: "5 min read",
    excerpt:
      "Learn when additive manufacturing becomes a practical production solution for low-volume and specialized components.",
    sections: [
      {
        heading: "Prototype or Production?",
        text: "The transition from prototyping to production depends on factors such as quantity, part complexity, material requirements and delivery timelines.",
      },
      {
        heading: "Low-Volume Manufacturing",
        text: "Additive manufacturing can be particularly useful when production quantities are relatively small and traditional tooling would require significant investment.",
      },
      {
        heading: "Complex Components",
        text: "3D printing can produce geometries that may be difficult or expensive to manufacture using conventional processes.",
      },
      {
        heading: "Making the Transition",
        text: "Before moving into production, teams should validate the design, material, repeatability and quality requirements of the final component.",
      },
    ],
  },

  5: {
    category: "Engineering",
    title: "Designing Parts for Better 3D Printing Results",
    date: "August 15, 2026",
    readTime: "4 min read",
    excerpt:
      "Small design decisions can make a major difference in print quality, reliability and overall manufacturing efficiency.",
    sections: [
      {
        heading: "Design for Additive Manufacturing",
        text: "Designing specifically for 3D printing can improve print quality, reduce material usage and make production more efficient.",
      },
      {
        heading: "Think About Geometry",
        text: "Wall thickness, overhangs, holes and internal features should all be considered during the design stage.",
      },
      {
        heading: "Reduce Unnecessary Supports",
        text: "Good geometry can reduce the need for support structures. This can improve surface quality while also reducing material waste and post-processing time.",
      },
      {
        heading: "Improve Print Reliability",
        text: "Stable geometry and appropriate orientation can help reduce common printing problems and improve consistency between parts.",
      },
    ],
  },

  6: {
    category: "Technology",
    title: "Understanding the 3D Printing Workflow",
    date: "August 08, 2026",
    readTime: "7 min read",
    excerpt:
      "Explore the complete journey from CAD design and material selection to printing, finishing and quality inspection.",
    sections: [
      {
        heading: "Step 1 — Digital Design",
        text: "The workflow begins with a digital CAD model that defines the geometry and dimensions of the component.",
      },
      {
        heading: "Step 2 — Material Selection",
        text: "The material is selected according to the mechanical, environmental and visual requirements of the application.",
      },
      {
        heading: "Step 3 — Print Preparation",
        text: "The digital model is prepared for the selected printer and process. Orientation, layer settings and support requirements are considered at this stage.",
      },
      {
        heading: "Step 4 — 3D Printing",
        text: "The printer builds the component layer by layer according to the prepared digital instructions.",
      },
      {
        heading: "Step 5 — Finishing",
        text: "After printing, the component may require support removal, cleaning, sanding or other finishing processes depending on the application.",
      },
      {
        heading: "Step 6 — Quality Inspection",
        text: "The finished component is inspected to confirm that its dimensions, appearance and functional requirements have been achieved.",
      },
    ],
  },
};

export default function BlogArticlePage() {
  const { id } = useParams();
  const article = ARTICLES[id];

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="blog-article-page">
      <style>{`
        .blog-article-page {
          width: 100%;
          min-height: 100vh;
          padding: 120px 0 80px;
          background: #071a33;
          color: #ffffff;
        }

        .blog-article-page *,
        .blog-article-page *::before,
        .blog-article-page *::after {
          box-sizing: border-box;
        }

        .blog-article-page .container {
          width: min(100% - 40px, 900px);
          margin: 0 auto;
        }

        .blog-article-page__back {
          margin-bottom: 45px;
        }

        .blog-article-page__back a,
        .blog-article-page__footer a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .blog-article-page__back a:hover,
        .blog-article-page__footer a:hover {
          color: #16c868;
        }

        .blog-article-page__header {
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .blog-article-page__category {
          display: inline-flex;
          align-items: center;
          margin-bottom: 22px;
          padding: 8px 14px;
          border: 1px solid rgba(22, 200, 104, 0.35);
          border-radius: 30px;
          background: rgba(22, 200, 104, 0.08);
          color: #16c868;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .blog-article-page__header h1 {
          max-width: 850px;
          margin: 0 0 22px;
          color: #ffffff;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -1.5px;
        }

        .blog-article-page__excerpt {
          max-width: 760px;
          margin: 0 0 28px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 17px;
          line-height: 1.8;
        }

        .blog-article-page__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
        }

        .blog-article-page__meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
        }

        .blog-article-page__meta svg {
          color: #16c868;
        }

        .blog-article-page__body {
          max-width: 780px;
          padding: 42px 0 25px;
        }

        .blog-article-page__body section {
          margin-bottom: 34px;
        }

        .blog-article-page__body h2 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(21px, 3vw, 27px);
          font-weight: 600;
          line-height: 1.4;
        }

        .blog-article-page__body p {
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          font-size: 16px;
          line-height: 1.95;
        }

        .blog-article-page__footer {
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
        }

        @media (max-width: 600px) {
          .blog-article-page {
            padding: 95px 0 55px;
          }

          .blog-article-page .container {
            width: min(100% - 32px, 900px);
          }

          .blog-article-page__back {
            margin-bottom: 32px;
          }

          .blog-article-page__header {
            padding-bottom: 30px;
          }

          .blog-article-page__header h1 {
            letter-spacing: -0.7px;
          }

          .blog-article-page__excerpt {
            font-size: 15px;
            line-height: 1.8;
          }

          .blog-article-page__meta {
            gap: 14px;
          }

          .blog-article-page__body {
            padding-top: 32px;
          }

          .blog-article-page__body p {
            font-size: 15px;
            line-height: 1.85;
          }
        }
      `}</style>

      <div className="container">
        <motion.div
          className="blog-article-page__back"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Link to="/blog">
            <ArrowLeft size={17} />
            Back to articles
          </Link>
        </motion.div>

        <motion.header
          className="blog-article-page__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="blog-article-page__category">
            {article.category}
          </span>

          <h1>{article.title}</h1>

          <p className="blog-article-page__excerpt">
            {article.excerpt}
          </p>

          <div className="blog-article-page__meta">
            <span>
              <CalendarDays size={15} />
              {article.date}
            </span>

            <span>
              <Clock3 size={15} />
              {article.readTime}
            </span>
          </div>
        </motion.header>

        <motion.article
          className="blog-article-page__body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </motion.article>

        <motion.div
          className="blog-article-page__footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link to="/blog">
            <ArrowLeft size={17} />
            View all articles
          </Link>
        </motion.div>
      </div>
    </main>
  );
}