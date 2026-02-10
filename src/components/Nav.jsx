import { useEffect } from "react";
import GithubIconLight from "../assets/img/icon-github-light.png"
import LinkedinIconLight from "../assets/img/icon-linkedin-light.png"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
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
            <a href="#home" className="nav-link">
                Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
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