import React from "react";
import { motion } from "framer-motion";

const About = () => {
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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      key={new Date().getTime()} // Ensures animations retrigger when revisiting
      className="min-h-screen flex items-center justify-center p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="max-w-3xl bg-[#111] p-12 rounded-2xl">
        <motion.h2
          className="text-4xl font-bold mb-8 text-[#00ff95] text-center md:text-left"
          variants={headingVariants}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          variants={paragraphVariants}
        >
          I am an enthusiastic and innovative developer with expertise in
          building web and mobile applications. <br />
          With a strong foundation in the{" "}
          <span className="text-customGreen">
            {" "}
            HTML, CSS, JavaScript, PHP, MERN stack and Java{" "}
          </span>
          I have worked on a diverse range of projects, including game
          development, hospital management systems, and e-commerce platforms. My
          skills in React, MongoDB, Tailwind CSS, and mobile app development
          enable me to create dynamic, responsive, and user-friendly solutions.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
