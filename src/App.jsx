import { useState, useEffect, useRef } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Nav'
import { Home } from './sections/Home'
import { About } from './sections/about';
import { Projects } from './sections/Projects'
import { Footer } from './components/Footer'
import { FadeSection } from './components/FadeSection'

function App() {
  const [count, setCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false);
  const cursorRef = useRef(null); 

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

  return (
    <>
    <div ref={cursorRef} className="cursor"></div>

    {!isLoaded && 
    <LoadingScreen onComplete={() => setIsLoaded(true)} 
    />} 
    <div 
    className={`item-fade ${isLoaded ? "opacity-100" : "opacity-0"}`} 
    />

    {isLoaded && 
    <div>
      <Navbar />
      <div className='main-content'>
      <FadeSection> <Home /> </FadeSection>
     <FadeSection> <About /></FadeSection>
      <FadeSection> <Projects /> </FadeSection>
      <Footer/>

      </div>
    </div>
    
    
    }
    </>
  )
}

export default App;
