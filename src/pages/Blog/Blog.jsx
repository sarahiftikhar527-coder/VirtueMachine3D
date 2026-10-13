import BlogHero from "../../features/blog/BlogHero/BlogHero";
import BlogGrid from "../../features/blog/BlogGrid/BlogGrid";

export default function Blog() {
  return (
    <main className="blog-page">
      <style>{`
        .blog-page {
          position: relative;
          overflow: hidden;
          background: #f7faf8;
          color: #071a33;
          font-family: "Poppins", sans-serif;
        }

        .blog-hero {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          padding: 150px 7% 100px;
          background:
            linear-gradient(
              90deg,
              rgba(7, 26, 51, 0.98) 0%,
              rgba(7, 26, 51, 0.92) 48%,
              rgba(7, 26, 51, 0.68) 100%
            ),
            url("/images/About/About_bg.jpg") center / cover no-repeat;
        }

        .blog-hero::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -160px;
          bottom: -220px;
          border-radius: 50%;
          background: rgba(22, 200, 104, 0.14);
          filter: blur(20px);
          pointer-events: none;
        }

        .blog-hero__content {
          position: relative;
          z-index: 2;
          width: min(760px, 100%);
        }

        .blog-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          margin-bottom: 22px;
          color: #16c868;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.4px;
        }

        .blog-hero__eyebrow::before {
          content: "";
          width: 34px;
          height: 2px;
          margin-right: 12px;
          background: #16c868;
        }

        .blog-hero h1 {
          max-width: 760px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(44px, 6vw, 78px);
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: -2.8px;
        }

        .blog-hero p {
          max-width: 650px;
          margin: 26px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 16px;
          line-height: 1.8;
          font-weight: 400;
        }

        .blog-content {
          width: min(1240px, calc(100% - 80px));
          margin: 0 auto;
          padding: 110px 0 120px;
        }

        .blog-content__header {
          margin-bottom: 48px;
        }

        .blog-content__header > span {
          display: block;
          margin-bottom: 10px;
          color: #16a95b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .blog-content__header h2 {
          margin: 0;
          color: #071a33;
          font-size: clamp(34px, 4vw, 50px);
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -1.5px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .blog-card {
          overflow: hidden;
          border: 1px solid rgba(7, 26, 51, 0.08);
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 16px 45px rgba(7, 26, 51, 0.07);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          border-color: rgba(22, 200, 104, 0.25);
          box-shadow: 0 24px 55px rgba(7, 26, 51, 0.12);
        }

        .blog-card__image {
          position: relative;
          height: 245px;
          overflow: hidden;
          background: #dce8e1;
        }

        .blog-card__image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 45%,
            rgba(7, 26, 51, 0.35) 100%
          );
          pointer-events: none;
        }

        .blog-card__image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.55s ease;
        }

        .blog-card:hover .blog-card__image img {
          transform: scale(1.06);
        }

        .blog-card__image > span {
          position: absolute;
          left: 18px;
          bottom: 17px;
          z-index: 2;
          padding: 7px 11px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 6px;
          background: rgba(7, 26, 51, 0.76);
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.4px;
          backdrop-filter: blur(8px);
        }

        .blog-card__body {
          padding: 27px 26px 29px;
        }

        .blog-card__meta {
          display: block;
          margin-bottom: 11px;
          color: #16a95b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .blog-card__body h3 {
          min-height: 62px;
          margin: 0 0 14px;
          color: #071a33;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: -0.3px;
        }

        .blog-card__body p {
          min-height: 78px;
          margin: 0;
          color: #687582;
          font-size: 13px;
          line-height: 1.75;
        }

        .blog-card__body button {
          position: relative;
          display: inline-flex;
          align-items: center;
          margin-top: 24px;
          padding: 0;
          border: 0;
          background: transparent;
          color: #071a33;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: color 0.25s ease;
        }

        .blog-card__body button::after {
          content: "↗";
          margin-left: 8px;
          color: #16c868;
          font-size: 15px;
          transition: transform 0.25s ease;
        }

        .blog-card__body button:hover {
          color: #16a95b;
        }

        .blog-card__body button:hover::after {
          transform: translate(3px, -3px);
        }

        @media (max-width: 1000px) {
          .blog-hero {
            min-height: 480px;
            padding: 130px 6% 90px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .blog-content {
            width: min(100% - 48px, 900px);
            padding: 90px 0 100px;
          }
        }

        @media (max-width: 680px) {
          .blog-hero {
            min-height: 430px;
            padding: 120px 24px 80px;
            background:
              linear-gradient(
                90deg,
                rgba(7, 26, 51, 0.97),
                rgba(7, 26, 51, 0.88)
              ),
              url("/images/About/About_bg.jpg") center / cover no-repeat;
          }

          .blog-hero h1 {
            font-size: clamp(38px, 11vw, 54px);
            letter-spacing: -1.8px;
          }

          .blog-hero p {
            margin-top: 20px;
            font-size: 14px;
            line-height: 1.7;
          }

          .blog-content {
            width: calc(100% - 36px);
            padding: 70px 0 80px;
          }

          .blog-content__header {
            margin-bottom: 32px;
          }

          .blog-content__header h2 {
            font-size: 34px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .blog-card__image {
            height: 220px;
          }

          .blog-card__body {
            padding: 24px 22px 26px;
          }

          .blog-card__body h3,
          .blog-card__body p {
            min-height: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .blog-card,
          .blog-card__image img,
          .blog-card__body button,
          .blog-card__body button::after {
            transition: none;
          }
        }
      `}</style>

      <BlogHero />
      <BlogGrid />
    </main>
  );
}