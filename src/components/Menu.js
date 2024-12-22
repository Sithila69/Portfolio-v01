import React from "react";

const Menu = ({ handleMenuClick, currentSection }) => {
  return (
    <nav className="menu">
      <div
        className={`menu-item ${currentSection === "home" ? "active" : ""}`}
        onClick={() => handleMenuClick("home")}
      >
        Home
      </div>
      <div
        className={`menu-item ${currentSection === "about" ? "active" : ""}`}
        onClick={() => handleMenuClick("about")}
      >
        About
      </div>
      <div
        className={`menu-item ${currentSection === "projects" ? "active" : ""}`}
        onClick={() => handleMenuClick("projects")}
      >
        Projects
      </div>
      <div
        className={`menu-item ${currentSection === "skills" ? "active" : ""}`}
        onClick={() => handleMenuClick("skills")}
      >
        Skills
      </div>
      <div
        className={`menu-item ${currentSection === "contact" ? "active" : ""}`}
        onClick={() => handleMenuClick("contact")}
      >
        Contact
      </div>
    </nav>
  );
};

export default Menu;
