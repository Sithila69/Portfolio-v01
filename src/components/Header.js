import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { siGithub, siLinkedin, siInstagram, siX } from "react-icons/si";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const headerRef = useRef(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const translateY = useTransform(scrollY, [0, 300], [0, -50]);

  const phrases = useRef([
    "Web Developer",
    "Web Designer",
    "Backend Developer",
  ]);

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

  const handleScrollDown = () => {
    // Scroll to the next section or perform any other action
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <motion.div
        ref={headerRef}
        className="w-full h-full flex flex-col items-center justify-center relative"
        style={{ opacity, y: translateY }}
      >
        {/* Sticky Header for Mobile
        <motion.div
          className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm py-4 px-6 z-50 md:hidden"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-lg font-bold text-white">Sithila Nethmina</h2>
        </motion.div> */}

        {/* Main Content */}
        <div className="text-center px-4 max-w-4xl mx-auto">
          {/* Animated Name */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 glitch-text">
              Sithila Nethmina
            </h1>
          </motion.div>

          {/* Animated Typing Text */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl">
              I'm a <span className="text-[#00ff95]">{displayText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div className="flex gap-6 justify-center">
            {[
              {
                href: "https://github.com/Sithila69",
                icon: <SiGithub size={24} />,
              },
              {
                href: "https://www.linkedin.com/in/sithila-bandara-963063225/",
                icon: <SiLinkedin size={24} />,
              },
              {
                href: "https://instagram.com/sithila_nethmina_",
                icon: <SiInstagram size={24} />,
              },
              {
                href: "https://x.com/KMSBandara42870",
                icon: <SiX size={24} />,
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
        after:transition-all after:duration-300
        hover:after:w-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="" onClick={handleScrollDown}>
              <div className="w-6 h-10 border-2 border-white rounded-full relative cursor-none">
                <div className="w-1 h-2 bg-white rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
