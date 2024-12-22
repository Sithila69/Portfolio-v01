import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Store phrases in useRef to avoid warning
  const phrases = useRef([
    "Web Developer",
    "Web Designer",
    "Backend Developer",
  ]);

  // Typing effect logic
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 1500;

    let timer;

    if (!isDeleting && displayText === phrases.current[currentPhraseIndex]) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex(
        (current) => (current + 1) % phrases.current.length
      );
    } else {
      timer = setTimeout(
        () => {
          const currentPhrase = phrases.current[currentPhraseIndex];
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
      {/* Animated Name */}
      <motion.div
        className="name-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="glitch-text">Sithila Nethmina</h1>
      </motion.div>

      {/* Animated Typing Text */}
      <motion.div
        className="typing-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="typing-text">
          I'm a <span className="typed-text">{displayText}</span>
          <span className="cursor">|</span>
        </p>
      </motion.div>

      {/* Animated Social Icons */}
      <motion.div
        className="social-container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          { href: "https://github.com/Sithila69", icon: <Github size={24} /> },
          {
            href: "https://www.linkedin.com/in/sithila-bandara-963063225/",
            icon: <Linkedin size={24} />,
          },
          {
            href: "https://instagram.com/yourusername",
            icon: <Instagram size={24} />,
          },
          {
            href: "https://twitter.com/yourusername",
            icon: <Twitter size={24} />,
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00ff95] transition-colors duration-300
            relative after:content-[''] after:absolute after:left-0 after:-bottom-1
            after:w-0 after:h-[2px] after:bg-[#00ff95]
            after:transition-all after:duration-500
            hover:after:w-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
