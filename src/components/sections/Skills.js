import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        key={new Date().getTime()} // Ensures animations retrigger when revisiting
        className="max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-[#00ff95] text-center md:text-left"
          variants={headingVariants}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tools and Platforms Section */}
          <motion.div
            className="bg-[#111] p-8 rounded-2xl"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#00ff95] text-center md:text-left">
              Tools and Platforms
            </h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300">
              <div>
                • Three.js
                <br />
                • Git
                <br />
                • Visual Studio Code
                <br />
              </div>
              <div>
                • Github
                <br />• MongoDB
              </div>
            </div>
          </motion.div>
          {/* Languages Section */}
          <motion.div
            className="bg-[#111] p-8 rounded-2xl"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#00ff95] text-center md:text-left">
              Languages
            </h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300">
              <div>
                • JavaScript
                <br />
                • Python
                <br />
                • Java
                <br />
              </div>
              <div>
                • HTML
                <br />
                • CSS
                <br />• PHP
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
