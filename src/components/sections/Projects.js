import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiBiolink } from "react-icons/si";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Add technologies to each project
  const projects = [
    {
      id: 1,
      title: "Love Letter Builder",
      description:
        "A 2-player game where players select words to craft a personalized love letter together.",
      content:
        "A fun and interactive 2-player game where players collaborate to build a heartfelt love letter. Each player selects words to form unique sentences, creating a personalized and meaningful message. This game is designed for couples to express their creativity and affection in a playful way.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Socket.io",
        "Express",
      ],
      links: [
        {
          title: "Github",
          link: "https://github.com/Sithila69/love-letter-builder.git",
        },
        {
          title: "Live Demo",
          link: "https://loveletterbuilder.vercel.app/",
        },
      ],
    },
    {
      id: 2,
      title: "Customer Support Center",
      description:
        "Support dashboard with live chat and ticket-raising system for game store assistance",
      content:
        "The Game Store Support dashboard enables support agents to manage customer queries and provide timely assistance. It includes a live chat bot for instant responses to common customer inquiries and a ticket-raising system for more complex issues. Support agents can view and respond to customer messages, categorize support tickets, and track the status of ongoing issues. Only users with the 'Support Agent' role have access to the dashboard, ensuring secure handling of customer data. Automated notifications alert agents to new tickets and updates.",
      technologies: [
        "MERN Stack",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Vite",
        "Hero UI",
      ],
      links: [
        {
          title: "Github",
          link: "https://github.com/Dileep-s-Works/Game-Store-MERN-ITP.git",
        },
        {
          title: "Live Demo",
          link: "https://bytebandits.me:550/support",
        },
      ],
    },
    {
      id: 3,
      title: "Blood Donation Camp Tracker",
      description:
        "Web app for locating and tracking nearby blood donation camps using Google Maps",
      content:
        "The Blood Donation Camp Tracker allows users to find ongoing blood donation camps in their area. Using Google Maps API, users can view nearby camps, see their schedules, and get directions. Donors can register their location during signup and view only the camps within a specific radius. The app also allows camp organizers to list and manage their camps, ensuring up-to-date information for all users. MongoDB is used for storing camp data, and the app is built with Next.js and React for a smooth user experience.",
      technologies: [
        "Next.js",
        "Google Maps API",
        "MongoDB",
        "Tailwind CSS",
        "Geolocation API",
      ],
      links: [
        {
          title: "Github",
          link: "https://github.com/LifeFlow-blood-donation/LifeFlow-v1-org.git",
        },
        {
          title: "Live Demo",
          link: "https://lifeflow-woad.vercel.app",
        },
      ],
    },
  ];

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

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

  // const cardVariants = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: { opacity: 1, scale: 1 },
  //   hover: { scale: 1.05, transition: { duration: 0.3 } },
  //   tap: { scale: 0.95 },
  // };

  // Improved animation variants for smoother transitions
  const expandedCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const handleCardClick = (project, e) => {
    if (selectedProject?.id === project.id) {
      setSelectedProject(null);
      return;
    }

    setSelectedProject(project);
  };

  const closeExpandedCard = (e) => {
    e.stopPropagation();
    setSelectedProject(null);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      <motion.div
        className="max-w-6xl w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h3
          className="text-2xl font-bold text-white mb-8 flex items-center"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-[#00ff95] to-[#00ccff] bg-clip-text text-transparent">
            Featured Projects
          </span>
          <div className="h-px bg-gradient-to-r from-[#00ff95]/50 to-transparent flex-grow ml-4"></div>
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          key={new Date().getTime()}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#111] rounded-xl overflow-hidden border border-gray-800 group"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -15px rgba(0, 255, 149, 0.2)",
              }}
              onClick={() => handleCardClick(project)}
            >
              <div className="h-48 bg-gradient-to-br from-[#00ff95]/10 to-[#111] relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/70">
                  <button className="px-4 py-2 bg-[#00ff95] rounded-lg text-black font-medium">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-[#1a1a1a] text-[#00ff95] border border-[#00ff95]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
            >
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closeExpandedCard}
                initial={{ backdropFilter: "blur(0px)" }}
                animate={{ backdropFilter: "blur(5px)" }}
                exit={{ backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="bg-[#1a1a1a] rounded-2xl max-w-3xl w-full relative z-40 overflow-hidden"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={expandedCardVariants}
                style={{
                  backgroundImage:
                    "radial-gradient(circle at bottom right, rgba(0, 255, 149, 0.08), transparent 40%)",
                }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff95] to-transparent"></div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#00ff95] opacity-5 blur-xl"></div>

                <div className="p-8 md:p-12">
                  <motion.button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl bg-[#111] w-8 h-8 rounded-full flex items-center justify-center"
                    onClick={closeExpandedCard}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.3 } }}
                  >
                    ✕
                  </motion.button>

                  <motion.h2
                    className="text-3xl font-bold mb-6 text-[#00ff95]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      },
                    }}
                  >
                    {selectedProject.title}
                  </motion.h2>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3, staggerChildren: 0.05 },
                    }}
                  >
                    {selectedProject.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="text-sm px-3 py-1 rounded-full bg-[#242424] text-[#00ff95] border border-[#00ff95]/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: 0.3 + index * 0.05 },
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="text-gray-200 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.4 } }}
                  >
                    <p>{selectedProject.content}</p>

                    <div className="mt-8 flex flex-wrap justify-end gap-4">
                      {selectedProject.links.map((linkItem, index) => {
                        const isSoon = linkItem.link === "soon";

                        return (
                          <div key={index} className="relative group">
                            <motion.a
                              href={isSoon ? "#" : linkItem.link}
                              target={isSoon ? "_self" : "_blank"}
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center px-4 py-2 rounded-lg
                                transition-all duration-300 relative overflow-hidden
                                border ${
                                  isSoon
                                    ? "border-gray-500 bg-[#222] text-gray-400 cursor-not-allowed"
                                    : "border-[#00ff95] bg-[#1a1a1a] text-white hover:bg-[#00ff95] hover:text-[#1a1a1a]"
                                }`}
                              whileHover={
                                isSoon
                                  ? {}
                                  : {
                                      scale: 1.05,
                                      boxShadow:
                                        "0px 0px 15px rgba(0, 255, 149, 0.3)",
                                    }
                              }
                              whileTap={isSoon ? {} : { scale: 0.95 }}
                              onClick={(e) => isSoon && e.preventDefault()}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.5 + index * 0.1 },
                              }}
                            >
                              {linkItem.title === "Github" ? (
                                <SiGithub className="w-5 h-5 mr-2" />
                              ) : (
                                <SiBiolink className="w-5 h-5 mr-2" />
                              )}
                              <span>{linkItem.title}</span>

                              {isSoon && (
                                <span className="ml-2 text-xs px-2 py-0.5 bg-gray-700 rounded-full">
                                  Coming Soon
                                </span>
                              )}
                            </motion.a>

                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 whitespace-nowrap z-50 pointer-events-none">
                              {isSoon
                                ? "Coming Soon"
                                : linkItem.title === "Github"
                                ? "Visit GitHub Repository"
                                : "View Live Demo"}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
