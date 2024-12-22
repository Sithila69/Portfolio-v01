import React from "react";
import { motion } from "framer-motion";

const Projects = ({ openProject }) => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description:
        "Interactive 3D visualization of neural network architecture using WebGL",
      content:
        "<p>Detailed description of the Neural Network Visualizer project.</p>",
    },
    {
      title: "Quantum Computing Simulator",
      description:
        "Browser-based quantum circuit simulator with real-time visualization",
      content:
        "<p>Detailed description of the Quantum Computing Simulator project.</p>",
    },
    {
      title: "AI Music Generator",
      description: "Real-time music generation using machine learning models",
      content: "<p>Detailed description of the AI Music Generator project.</p>",
    },
  ];

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

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      {/* Adding a unique key to force re-mount */}
      <motion.div
        key={new Date().getTime()} // Ensures animations re-trigger on section load
        className="max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-[#00ff95] text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#111] p-8 rounded-2xl cursor-pointer transform hover:shadow-xl hover:shadow-[#00ff95]/10"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => openProject(project.content)}
            >
              <motion.h3
                className="text-2xl font-semibold mb-4 text-[#00ff95] text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
              >
                {project.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
