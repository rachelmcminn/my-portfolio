import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GithubIconLight from "../assets/img/icon-github-light.png"
import LinkedinIconLight from "../assets/img/icon-linkedin-light.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

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
            <a href="#" id="nav-link-main" className="nav-link">Rachel McMinn</a>
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/rachelmcminn" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-github" style={{ fontSize:'28px' }}/>
              
            </a>
            <a href="https://www.linkedin.com/in/rachelmcminn/" target="_blank">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ fontSize:'28px' }}/>
            </a>
            <a href="mailto:racminn@gmail.com">
              <FontAwesomeIcon icon="fa-solid fa-envelope" style={{ fontSize:'28px' }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};