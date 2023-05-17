import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/navbar.css";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    setIsCollapsed(false);
  }, [location]);

  const navLinks = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/aboutMe",
      label: "About Me",
    },
    {
      path: "/projects",
      label: "Projects",
    },
    {
      path: "/resume",
      label: "Resume",
    },
    {
      path: "/contactMe",
      label: "Contact Me",
    },
  ];

  return (
    <nav className="navbar">
      <button onClick={toggleNavbar} className="navbar-toggle">
      </button>
      <ul className={`nav-links ${isCollapsed ? "collapsed" : ""}`}>
        {navLinks.map((navLink) => (
          <li key={navLink.path}>
            <Link
              to={navLink.path}
              className="nav-link"
              onClick={() => setIsCollapsed(false)}
            >
              {navLink.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;