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
    <div className="min-h-screen flex items-center justify-center p-8 relative">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Tools and Platforms Section */}
          <motion.div
            className="bg-[#111] p-8 rounded-2xl cursor-pointer transform hover:shadow-xl hover:shadow-[#00ff95]/10 relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00ff9522] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.h3
              className="text-2xl font-semibold mb-6 text-[#00ff95] text-center md:text-left relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Tools and Platforms
            </motion.h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300 relative z-10">
              <div>
                • Node.js
                <br />
                • Git
                <br />• VS Code
              </div>
              <div>
                • Github
                <br />• MongoDB
                <br />• Postman
              </div>
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            className="bg-[#111] p-8 rounded-2xl cursor-pointer transform hover:shadow-xl hover:shadow-[#00ff95]/10 relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00ff9522] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.h3
              className="text-2xl font-semibold mb-6 text-[#00ff95] text-center md:text-left relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Languages
            </motion.h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300 relative z-10">
              <div>
                • JavaScript
                <br />
                • Python
                <br />
                • Java
                <br />• TypeScript
              </div>
              <div>
                • HTML
                <br />
                • CSS
                <br />• PHP
              </div>
            </div>
          </motion.div>

          {/* Frameworks Section */}
          <motion.div
            className="bg-[#111] p-8 rounded-2xl cursor-pointer transform hover:shadow-xl hover:shadow-[#00ff95]/10 relative overflow-hidden group"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00ff9522] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <motion.h3
              className="text-2xl font-semibold mb-6 text-[#00ff95] text-center md:text-left relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Frameworks
            </motion.h3>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-300 relative z-10">
              <div>
                • React
                <br />
                • Express
                <br />
                • Next.js
                <br />• Tailwind CSS
              </div>
              <div>
                • Bootstrap
                <br />• Three.js
                <br />• Next.js
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
