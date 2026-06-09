import { useState, useEffect, useRef, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/MainPage/Nav";
import { Home } from "./components/MainPage/Home";
import { About } from "./components/MainPage/About";
import { Projects } from "./components/MainPage/Projects";
import { Footer } from "./components/MainPage/Footer";
import { FadeSection } from "./components/MainPage/FadeSection";

const MainPage = () => (
  <div className="main-content">
    <FadeSection>
      <Home />
    </FadeSection>
    <FadeSection>
      <About />
    </FadeSection>
    <FadeSection>
      <Projects />
    </FadeSection>
    <Footer />
  </div>
);

function App() {
  const cursorRef = useRef(null);
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(
    () => sessionStorage.getItem("loaded") === "true",
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleComplete = useCallback(() => {
    sessionStorage.setItem("loaded", "true");
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // handle scroll to hash in nav
  useEffect(() => {
    if (!isLoaded) return;
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, isLoaded]);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>

      {!isLoaded && <LoadingScreen onComplete={handleComplete} />}

      <div className={`item-fade ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {isLoaded && (
          <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MainPage />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
