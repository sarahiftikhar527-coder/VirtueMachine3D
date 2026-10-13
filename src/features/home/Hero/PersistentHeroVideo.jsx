import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import heroVideo from "../../../assets/videos/Home/Hero/hero-bg.mp4";
import heroVideo2 from "../../../assets/videos/Home/Hero/hero-bg-2.mp4";

const HeroVideoContext = createContext(null);

export function HeroVideoProvider({ children }) {
  const videoRef = useRef(null);
  const video2Ref = useRef(null);
  const [videoFinished, setVideoFinished] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const firstVideo = videoRef.current;

    if (!firstVideo) {
      return;
    }

    firstVideo.play().catch(() => {});
  }, []);

  useEffect(() => {
    const updateVideoVisibility = () => {
      const isHome = pathname === "/";
      const isHeroArea = window.scrollY < window.innerHeight * 0.95;

      setShowVideo(isHome && isHeroArea);
    };

    updateVideoVisibility();

    window.addEventListener("scroll", updateVideoVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateVideoVisibility);
    };
  }, [pathname]);

  const handleVideoEnd = () => {
    setVideoFinished(true);

    if (videoRef.current) {
      videoRef.current.pause();
    }

    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play().catch(() => {});
    }
  };

  return (
    <HeroVideoContext.Provider value={{ videoFinished }}>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
          opacity: showVideo ? 1 : 0,
          transition: "opacity 0.35s ease",
          background: "#05090d",
        }}
      >
        <video
          ref={videoRef}
          className="hero__background-video hero__background-video--one"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <video
          ref={video2Ref}
          className={`hero__background-video hero__background-video--two ${
            videoFinished ? "hero__background-video--active" : ""
          }`}
          muted
          playsInline
          loop
          preload="auto"
        >
          <source src={heroVideo2} type="video/mp4" />
        </video>
      </div>

      {children}
    </HeroVideoContext.Provider>
  );
}

export function useHeroVideo() {
  const context = useContext(HeroVideoContext);

  if (!context) {
    throw new Error("useHeroVideo must be used inside HeroVideoProvider");
  }

  return context;
}