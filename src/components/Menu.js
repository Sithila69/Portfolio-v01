import React from "react";

const Menu = ({ handleMenuClick }) => {
  return (
    <nav className="menu">
      <div className="menu-item" onClick={() => handleMenuClick("about")}>
        About
      </div>
      <div className="menu-item" onClick={() => handleMenuClick("projects")}>
        Projects
      </div>
      <div className="menu-item" onClick={() => handleMenuClick("skills")}>
        Skills
      </div>
      <div className="menu-item" onClick={() => handleMenuClick("contact")}>
        Contact
      </div>
    </nav>
  );
};

export default Menu;
