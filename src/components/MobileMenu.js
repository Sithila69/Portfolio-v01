import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const MobileMenu = ({ handleMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (section) => {
    handleMenuClick(section);
    setIsOpen(false); // Close menu after selection
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Mobile menu */}
      <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-items">
          <button onClick={() => handleItemClick("home")}>Home</button>
          <button onClick={() => handleItemClick("about")}>About</button>
          <button onClick={() => handleItemClick("projects")}>Projects</button>
          <button onClick={() => handleItemClick("skills")}>Skills</button>
          <button onClick={() => handleItemClick("contact")}>Contact</button>
        </div>
      </nav>

      {/* Backdrop for closing menu */}
      {isOpen && (
        <div className="menu-backdrop" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default MobileMenu;
