import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../Icon";

const NAV_ITEMS = [
  { label: "Home", to: "/#home", type: "section" },
  { label: "About", to: "/#about", type: "section" },
  { label: "Projects", to: "/#projects", type: "section" },
  {
    label: "Past Portfolio",
    to: "https://racminn.wixsite.com/home",
    type: "external",
  },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  const renderLink = (item) =>
    item.type === "external" ? (
      <a
        key={item.label}
        href={item.to}
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
      >
        {item.label}
      </a>
    ) : (
      <Link key={item.label} to={item.to} className="nav-link" onClick={close}>
        {item.label}
      </Link>
    );

  return (
    <nav>
      <div className="nav-bar">
        <div className="nav-left">
          <Link to="/" id="nav-link-main" className="nav-link" tabindex="0">
            Rachel McMinn
          </Link>

          <div
            id="primary-nav"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            {NAV_ITEMS.map(renderLink)}
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/rachelmcminn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="fa-brands fa-github" style={{ fontSize: "28px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/rachelmcminn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="fa-brands fa-linkedin" style={{ fontSize: "28px" }} />
          </a>
          <a href="mailto:racminn@gmail.com">
            <Icon icon="fa-solid fa-envelope" style={{ fontSize: "28px" }} />
          </a>
        </div>
      </div>
    </nav>
  );
};
