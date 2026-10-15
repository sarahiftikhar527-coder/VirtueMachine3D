import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./OurTeam.css";

import teamOne from "../../../assets/images/About/Team/team-1.webp";
import teamTwo from "../../../assets/images/About/Team/team-2.webp";
import teamThree from "../../../assets/images/About/Team/team-3.webp";
import teamFour from "../../../assets/images/About/Team/team-4.webp";
import teamFive from "../../../assets/images/About/Team/team-5.webp";

const EASE = [0.22, 1, 0.36, 1];
const MOBILE_QUERY = "(max-width: 900px)";

// NOTE: placeholder naam hain, apne asli naam likh dein
const teamMembers = [
  {
    name: "Team Member One",
    role: "Lead Engineer",
    image: teamOne,
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    whatsapp: "https://wa.me/15555550142",
  },
  {
    name: "Team Member Two",
    role: "Design Specialist",
    image: teamTwo,
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    whatsapp: "https://wa.me/15555550142",
  },
  {
    name: "Team Member Three",
    role: "3D Printing Expert",
    image: teamThree,
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    whatsapp: "https://wa.me/15555550142",
  },
  {
    name: "Team Member Four",
    role: "Production Specialist",
    image: teamFour,
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    whatsapp: "https://wa.me/15555550142",
  },
  {
    name: "Team Member Five",
    role: "Quality Expert",
    image: teamFive,
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    whatsapp: "https://wa.me/15555550142",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(MOBILE_QUERY).matches
      : false
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);

    setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L3 2h6.4l4.42 5.83L18.9 2Zm-1.1 17.76h1.73L8.48 4.12H6.63L17.8 19.76Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.09 0C5.55 0 .23 5.32.23 11.86c0 2.09.55 4.13 1.59 5.93L.12 24l6.35-1.67a11.84 11.84 0 0 0 5.62 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.14-3.44-8.42ZM12.1 21.72h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.85 9.85 0 0 1-1.51-5.21C2.21 6.42 6.64 2 12.1 2c2.63 0 5.1 1.03 6.96 2.89a9.8 9.8 0 0 1 2.89 6.97c0 5.46-4.44 9.86-9.85 9.86Zm5.42-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function SocialButtons({ member }) {
  return (
    <div className="our-team__socials">
      <a
        href={member.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} Facebook`}
      >
        <FacebookIcon />
      </a>

      <a
        href={member.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} Twitter`}
      >
        <TwitterIcon />
      </a>

      <a
        href={member.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} WhatsApp`}
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

function TeamCard({ member, index, reduce, isMobile }) {
  const isPriority = index === 0;

  const variants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : isMobile ? 36 : 50,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0.4 : 0.8,
        // mobile pe 2 cards ek row mein hain, is liye chhota delay
        delay: reduce ? 0 : isMobile ? (i % 2) * 0.08 : Math.min(i, 3) * 0.1,
        ease: EASE,
      },
    }),
  };

  const classes = [
    "our-team__card",
    index === 0 ? "our-team__card--first" : "",
    index === 4 ? "our-team__card--last" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.article
      className={classes}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
    >
      <img
        src={member.image}
        alt={member.name}
        className="our-team__image"
        loading={isPriority ? "eager" : "lazy"}
        fetchPriority={isPriority ? "high" : "auto"}
        decoding="async"
      />

      <div className="our-team__shade" />

      <SocialButtons member={member} />

      <div className="our-team__info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </motion.article>
  );
}

export default function OurTeam() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  const introContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.11,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const introItem = {
    hidden: {
      opacity: 0,
      x: reduce || isMobile ? 0 : -50,
      y: reduce ? 0 : isMobile ? 26 : 0,
      filter: reduce ? "blur(0px)" : isMobile ? "blur(4px)" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduce ? 0.4 : 0.85, ease: EASE },
    },
  };

  return (
    <section className="our-team">
      <div className="our-team__container">
        <div className="our-team__column our-team__column--first">
          <motion.div
            className="our-team__intro"
            variants={introContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="our-team__label" variants={introItem}>
              <span />
              Our Team
            </motion.div>

            <motion.h2 variants={introItem}>Team of Expert</motion.h2>

            <motion.p variants={introItem}>
              Our team combines engineering expertise, creative thinking, and
              advanced 3D printing knowledge to turn ideas into precise,
              reliable, and production-ready solutions.
            </motion.p>

            <motion.a
              href="/contact"
              className="our-team__button"
              variants={introItem}
            >
              <span>Contact Us</span>
              <span className="our-team__button-arrow">↗</span>
            </motion.a>
          </motion.div>

          <TeamCard
            member={teamMembers[0]}
            index={0}
            reduce={reduce}
            isMobile={isMobile}
          />
        </div>

        <div className="our-team__column">
          <TeamCard
            member={teamMembers[1]}
            index={1}
            reduce={reduce}
            isMobile={isMobile}
          />
          <TeamCard
            member={teamMembers[2]}
            index={2}
            reduce={reduce}
            isMobile={isMobile}
          />
        </div>

        <div className="our-team__column">
          <TeamCard
            member={teamMembers[3]}
            index={3}
            reduce={reduce}
            isMobile={isMobile}
          />
          <TeamCard
            member={teamMembers[4]}
            index={4}
            reduce={reduce}
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
}