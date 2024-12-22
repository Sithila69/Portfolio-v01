import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cursor from "./components/Cursor";
import Canvas from "./components/Canvas";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import MobileMenu from "./components/MobileMenu";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 990);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;

      // Check which section is in view
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const { top, bottom } = element.getBoundingClientRect();
          const threshold = window.innerHeight / 3;

          if (top <= threshold && bottom >= threshold) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (section) => {
    setCurrentSection(section);
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const renderSection = (section) => {
    const isVisible = section === currentSection;
    let Component;

    switch (section) {
      case "home":
        Component = Header;
        break;
      case "about":
        Component = About;
        break;
      case "projects":
        Component = Projects;
        break;
      case "skills":
        Component = Skills;
        break;
      case "contact":
        Component = Contact;
        break;
      default:
        return null;
    }

    return (
      <section
        ref={sectionRefs[section]}
        className={`content-section ${isVisible ? "visible" : ""}`}
        id={section}
      >
        <Component />
      </section>
    );
  };

  return (
    <div className="app-container">
      <Cursor />
      <section className="fixed-canvas">
        <Canvas />
      </section>

      {isMobileView ? (
        <MobileMenu
          handleMenuClick={handleMenuClick}
          currentSection={currentSection}
        />
      ) : (
        <Menu
          handleMenuClick={handleMenuClick}
          currentSection={currentSection}
        />
      )}

      {Object.keys(sectionRefs).map((section) => renderSection(section))}
    </div>
  );
};

export default App;
