import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GithubIconLight from "../assets/img/icon-github-light.png"
import LinkedinIconLight from "../assets/img/icon-linkedin-light.png"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav>
      <div className="nav-bar-parent">
        <div className="nav-bar">
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </button>
          
          {/* desktop nav links */}
          <div className="nav-links">
            {isHomePage ? (
              <>
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
              </>
            ) : (
              <>
                <Link to="/#home" className="nav-link">Home</Link>
                <Link to="/#about" className="nav-link">About</Link>
                <Link to="/#projects" className="nav-link">Projects</Link>
                <Link to="/#contact" className="nav-link">Contact</Link>
              </>
            )}
          </div>
          
          <div className="social-links">
            <a href="https://github.com/rachelmcminn" target="_blank">
              <img src={GithubIconLight} alt="Github Logo" className="icon github-icon"></img>
            </a>
            <a href="https://www.linkedin.com/in/rachelmcminn/" target="_blank">
              <img src={LinkedinIconLight} alt="LinkedIn Logo" className="icon linkedin-icon"></img>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};