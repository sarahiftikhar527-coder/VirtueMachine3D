import { Link } from "react-router-dom"
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react"
import "./footer.css"

function FooterGear({ className, teeth = 14 }) {
  let path = ""

  const outer = 98
  const root = 80
  const step = (Math.PI * 2) / teeth

  for (let i = 0; i < teeth; i += 1) {
    const angle = i * step

    const points = [
      [root, angle],
      [root, angle + step * 0.34],
      [outer, angle + step * 0.44],
      [outer, angle + step * 0.66],
      [root, angle + step * 0.76],
    ]

    points.forEach(([radius, currentAngle], pointIndex) => {
      const x =
        110 + Math.cos(currentAngle) * radius
      const y =
        110 + Math.sin(currentAngle) * radius

      path += `${
        i === 0 && pointIndex === 0 ? "M" : "L"
      }${x.toFixed(1)} ${y.toFixed(1)} `
    })
  }

  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      aria-hidden="true"
    >
      <path
        d={`${path}Z`}
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />

      <circle
        cx="110"
        cy="110"
        r="52"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />

      <circle
        cx="110"
        cy="110"
        r="26"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />

      <circle
        cx="110"
        cy="110"
        r="8"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  )
}

const PAGES = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Our Services",
    to: "/services",
  },
  {
    label: "Technologies",
    to: "/technologies",
  },
  {
    label: "Materials",
    to: "/materials",
  },
  {
    label: "Process",
    to: "/process",
  },
  {
    label: "Contact",
    to: "/contact",
  },
]

const SOCIALS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://www.twitter.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com",
  },
]

export default function Footer() {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer">
      <div
        className="footer__gears"
        aria-hidden="true"
      >
        <FooterGear
          className="footer__gear footer__gear--left"
          teeth={12}
        />

        <FooterGear
          className="footer__gear footer__gear--a"
          teeth={14}
        />

        <FooterGear
          className="footer__gear footer__gear--b"
          teeth={10}
        />
      </div>

      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link
              to="/"
              className="footer__logo"
            >
              <span>VIRTUE</span>
              <strong>MECHANICS</strong>
            </Link>

            <p>
              Precision 3D printing and advanced
              manufacturing solutions for
              prototypes, products, and
              production-ready parts.
            </p>

            <div className="footer__socials">
              {SOCIALS.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />
                  </a>
                )
              })}
            </div>
          </div>

          <nav
            className="footer__col"
            aria-label="Pages"
          >
            <h4>Pages</h4>

            <ul>
              {PAGES.map((page) => (
                <li key={page.to}>
                  <Link to={page.to}>
                    <span>{page.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col footer__contact">
            <h4>Contact Us</h4>

            <ul>
              <li>
                <a href="mailto:hello@virtuemechanics.com">
                  <Mail size={15} />
                  <span>
                    hello@virtuemechanics.com
                  </span>
                </a>
              </li>

              <li>
                <a href="tel:+15125550142">
                  <Phone size={15} />
                  <span>
                    +1 (512) 555-0142
                  </span>
                </a>
              </li>

              <li>
                <span className="footer__address">
                  <MapPin size={15} />
                  <span>
                    42 Precision Way, Austin, TX
                    78701
                  </span>
                </span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="footer__quote"
            >
              Start a project
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © 2026 VIRTUE MECHANICS LLC — ALL
            RIGHTS RESERVED
          </span>

          <div className="footer__legal">
            <Link to="/terms">
              Terms &amp; Conditions
            </Link>

            <Link to="/privacy">
              Privacy Policy
            </Link>
          </div>

          <button
            type="button"
            className="footer__totop"
            onClick={toTop}
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  )
}