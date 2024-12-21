import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ["Web Developer", "Web Designer", "Backend Developer"];

  // Typing effect logic (unchanged)
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 1500;

    let timer;

    if (!isDeleting && displayText === phrases[currentPhraseIndex]) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
    } else {
      timer = setTimeout(
        () => {
          const currentPhrase = phrases[currentPhraseIndex];
          if (!isDeleting) {
            setDisplayText(currentPhrase.substring(0, displayText.length + 1));
          } else {
            setDisplayText(currentPhrase.substring(0, displayText.length - 1));
          }
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [displayText, currentPhraseIndex, isDeleting]);

  return (
    <div className="header-container">
      <div className="name-container">
        <h1 className="glitch-text">Sithila Nethmina</h1>
      </div>
      <div className="typing-container">
        <p className="typing-text">
          I'm a <span className="typed-text">{displayText}</span>
          <span className="cursor">|</span>
        </p>
      </div>
      <div className="social-container">
        <a
          href="https://github.com/Sithila69"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/sithila-bandara-963063225/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Twitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default Header;
