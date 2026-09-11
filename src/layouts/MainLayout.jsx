import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar.jsx";
import Footer from "../components/layout/Footer/Footer.jsx";

export default function MainLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);

      const timer = window.setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 60);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}