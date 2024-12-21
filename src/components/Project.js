import React, { useState, useEffect } from "react";

const Project = ({ isVisible, content, closeProject }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isVisible) {
      // Delay adding the 'show' class to trigger animation
      document.body.style.overflow = "hidden"; // Prevent background scrolling
      setTimeout(() => setAnimationClass("show"), 10);
    } else {
      document.body.style.overflow = ""; // Restore scrolling
      setAnimationClass("");
    }
  }, [isVisible]);

  if (!isVisible && !animationClass) return null;

  return (
    <div className={`project-container ${animationClass}`}>
      <div className="project-backdrop" onClick={closeProject} />
      <div className="project-modal">
        <button className="close-btn" onClick={closeProject} aria-label="Close">
          ×
        </button>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Project;
