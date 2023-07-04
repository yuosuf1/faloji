import React, { useState } from "react";
import About from "./pages/about";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";

const NavBar = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0); // State to track the active link index

  const navigationLinks = ["About", "Resume", "Portfolio"];

  const handleNavLinkClick = (index) => {
    setActiveLinkIndex(index);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          {navigationLinks.map((link, index) => (
            <li className="navbar-item" key={index}>
              <button
                className={`navbar-link ${
                  activeLinkIndex === index ? "active" : ""
                }`}
                data-nav-link
                onClick={() => handleNavLinkClick(index)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Render the respective page component */}
      {activeLinkIndex === 0 && <About active={activeLinkIndex === 0} />}
      {activeLinkIndex === 1 && <Resume active={activeLinkIndex === 1} />}
      {activeLinkIndex === 2 && <Portfolio active={activeLinkIndex === 2} />}
    </div>
  );
};

export default NavBar;
