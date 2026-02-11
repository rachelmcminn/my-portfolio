import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Nav'
import { Home } from './sections/Home'
import { About } from './sections/About';
import { Projects } from './sections/Projects'
import { Footer } from './components/Footer'
import { FadeSection } from './components/FadeSection'
// import project pages
import { IntuneConnect } from './projects/IntuneConnect'
import { Gremlinizer } from './projects/Gremlinizer'
import { YippeeSudoku } from './projects/YippeeSudoku'

const MainPage = () => (
  <div className='main-content'>
    <FadeSection><Home /></FadeSection>
    <FadeSection><About /></FadeSection>
    <FadeSection><Projects /></FadeSection>
    <Footer />
  </div>
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const cursorRef = useRef(null); 
  const location = useLocation();

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
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure content is loaded
    } else {
      window.scrollTo(0, 0); // Scroll to top if no hash
    }
  }, [location]);

 return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div className={`item-fade ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {isLoaded && (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects/intune-connect" element={<IntuneConnect />} />
              <Route path="/projects/gremlinizer" element={<Gremlinizer />} />
              <Route path="/projects/yippee-sudoku" element={<YippeeSudoku />} />
            </Routes>
          </div>
        )}
      </div>
    </>
  );

}

export default App;
