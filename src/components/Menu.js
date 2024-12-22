import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ handleMenuClick, currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "My Projects" },
    { id: "skills", label: "My Skills" },
    { id: "contact", label: "Contact Me" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 lg:hidden"
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </motion.button>

      {/* Navigation Menu */}
      <nav
        className={`
          fixed z-40 
          ${isOpen ? "inset-0 bg-black/90" : ""}
          lg:bg-transparent lg:block
          lg:right-8 lg:top-1/2 lg:w-auto lg:-translate-y-1/2
        `}
      >
        <AnimatePresence>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={`
              h-full
              ${isOpen ? "flex" : "hidden lg:flex"}
              flex-col items-center justify-center space-y-8
              lg:items-end lg:space-y-8 lg:pr-4
            `}
          >
            {menuItems.map(({ id, label }) => (
              <motion.div
                key={id}
                variants={item}
                onClick={() => {
                  handleMenuClick(id);
                  setIsOpen(false);
                }}
                className={`
                  relative cursor-none transition-colors duration-300
                  hover:text-[#00ff95] px-4 py-2
                  ${currentSection === id ? "text-[#00ff95]" : "text-white"}
                  lg:px-0 lg:py-0
                  lg:after:content-[''] lg:after:absolute lg:after:right-0 
                  lg:after:top-1/2 lg:after:-translate-y-1/2
                  lg:after:h-[1px] lg:after:bg-white
                  lg:after:transition-all lg:after:duration-300
                  lg:after:w-0 lg:hover:after:w-4 lg:after:translate-x-6
                `}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Menu;
