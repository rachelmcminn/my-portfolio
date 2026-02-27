import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Nav'
import { Home } from './sections/Home'
import { About } from './sections/About';
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'
import { FadeSection } from './components/FadeSection'
// import project pages
import { IntuneConnect } from './projects/IntuneConnect'
import { Gremlinizer } from './projects/Gremlinizer'
import { YippeeSudoku } from './projects/YippeeSudoku'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


const MainPage = () => (
  <div className='main-content'>
    <FadeSection><Home /></FadeSection>
    <FadeSection><About /></FadeSection>
    <FadeSection><Projects /></FadeSection>
    <FadeSection><Contact /></FadeSection>
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
            <MainPage />
           
          </div>
        )}
      </div>
    </>
  );

}

export default App;
