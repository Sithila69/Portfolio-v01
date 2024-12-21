import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cursor from "./components/Cursor";
import Canvas from "./components/Canvas";
import Project from "./components/Project";
import MobileMenu from "./components/MobileMenu";
import About from "./components/sections/About";

const App = () => {
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState("");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 990);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = {
    about: `
            <h2>About Me</h2>
            <p>I am an enthusiastic and innovative developer with expertise in building web  applications. 
            With a strong foundation in the MERN stack, and  Java I have worked on a diverse range of projects, 
            including game development, hospital management systems, and e-commerce platforms. My skills in React, MongoDB and Tailwind CSS enable me to create dynamic, responsive, and user-friendly solutions.</p>
        `,
    projects: `
            <h2>Projects</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <div style="background: #111; padding: 2rem; border-radius: 10px;">
                    <h3>Math Shooting Game</h3>
                    <h4>• Technologies: JavaScript, HTML5, CSS3, MongoDB</h4><br>
                    <p>• Description: A fun and engaging math-based shooting game where users solve math problems to defeat enemies and progress through levels. 
                    High scores, playtime, and game details are stored in a MongoDB database for tracking player progress.</p>
                </div>
                <div style="background: #111; padding: 2rem; border-radius: 10px;">
                    <h3>Hospital Management System</h3>
                    <h4>• Technologies: Java (Servlet), MySQL</h4><br>
                    <p>• Description: A fully functional hospital management system built using Java Servlet technology. 
                    The system includes features like patient records management, appointment scheduling, and medical history tracking.</p>
                </div>
                <div style="background: #111; padding: 2rem; border-radius: 10px;">
                    <h3>Contact Us Dashboard</h3>
                    <h4>• Technologies: React, MongoDB, Node.js</h4><br>
                    <p>• Description: A contact form submission system where users can submit inquiries, 
                    which are stored in MongoDB. The dashboard allows admins to manage and respond to these inquiries.</p>
                </div>
            </div>
        `,
    skills: `
            <h2>Skills</h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                <div>
                    <h3>Tools and Platforms</h3>
                    <p>VS code • Three.js • Git/GitHub • MySQL</p>
                </div>
                <div>
                    <h3>Languages</h3>
                    <p>JavaScript • Java • HTML5 & CSS3 • PHP • MongoDB</p>
                </div>
            </div>
        `,
    contact: `
            <h2>Contact</h2>
            <form style="display: grid; gap: 1rem;">
                <input type="text" placeholder="Name" style="background: #111; border: none; padding: 1rem; color: #fff;">
                <input type="email" placeholder="Email" style="background: #111; border: none; padding: 1rem; color: #fff;">
                <textarea placeholder="Message" style="background: #111; border: none; padding: 1rem; color: #fff; height: 150px;"></textarea>
                <button style="background: #00ff95; color: #000; border: none; padding: 1rem; cursor: pointer;">Send</button>
            </form>
        `,
  };

  const handleMenuClick = (section) => {
    setCurrentContent(content[section]);
    setIsProjectVisible(true);
  };

  const handleCloseProject = () => {
    setIsProjectVisible(false); // Hide the content when closed
  };

  return (
    <div>
      <Cursor />
      <Canvas />
      <Header />
      {isMobileView ? (
        <MobileMenu handleMenuClick={handleMenuClick} />
      ) : (
        <Menu handleMenuClick={handleMenuClick} />
      )}
      <Project
        isVisible={isProjectVisible}
        content={currentContent}
        closeProject={handleCloseProject}
      />
    </div>
  );
};

export default App;
