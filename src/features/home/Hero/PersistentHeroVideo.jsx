import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import heroVideo from "../../../assets/videos/Home/Hero/hero-bg.mp4";

const HeroVideoContext = createContext(null);

export function HeroVideoProvider({ children }) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const { pathname } = useLocation();

  /* =========================================
     VIDEO INITIALIZATION
     ========================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let isMounted = true;

    const handleVideoReady = () => {
      if (!isMounted) return;

      setVideoLoaded(true);

      video.play().catch(() => {
        // Browser autoplay restrictions are handled gracefully.
      });
    };

    if (video.readyState >= 3) {
      handleVideoReady();
    } else {
      video.addEventListener("canplay", handleVideoReady, {
        once: true,
      });
    }

    return () => {
      isMounted = false;
      video.removeEventListener("canplay", handleVideoReady);
    };
  }, []);

  /* =========================================
     SHOW VIDEO ONLY ON HOME HERO
     ========================================= */

  useEffect(() => {
    const updateVideoVisibility = () => {
      const isHome = pathname === "/";
      const isHeroArea =
        window.scrollY < window.innerHeight * 0.95;

      setShowVideo(isHome && isHeroArea);
    };

    updateVideoVisibility();

    window.addEventListener("scroll", updateVideoVisibility, {
      passive: true,
    });

    window.addEventListener("resize", updateVideoVisibility);

    return () => {
      window.removeEventListener(
        "scroll",
        updateVideoVisibility
      );

      window.removeEventListener(
        "resize",
        updateVideoVisibility
      );
    };
  }, [pathname]);

  return (
    <HeroVideoContext.Provider value={{ videoLoaded }}>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
          opacity: showVideo ? 1 : 0,
          transition: "opacity 0.6s ease",
          background: "#05090d",
        }}
      >
        <video
          ref={videoRef}
          className="hero__background-video"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Soft white overlay for readable black text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255, 255, 255, 0.3)",
            pointerEvents: "none",
          }}
        />
      </div>

      {children}
    </HeroVideoContext.Provider>
  );
}

export function useHeroVideo() {
  const context = useContext(HeroVideoContext);

  if (!context) {
    throw new Error(
      "useHeroVideo must be used inside HeroVideoProvider"
    );
  }

  return context;
}