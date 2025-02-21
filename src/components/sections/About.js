import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  MessageSquare,
  Briefcase,
  ChevronRight,
  Award,
  // Zap,
  Monitor,
  Phone,
  PhoneCall,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    { name: "HTML/CSS", level: 98 },
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "PHP", level: 75 },
    { name: "Java", level: 65 },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechVision Inc.",
      period: "2021 - Present",
      description:
        "Leading UI/UX implementation for enterprise web applications with React and TypeScript.",
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions LLC",
      period: "2018 - 2021",
      description:
        "Developed custom e-commerce solutions using the MERN stack and integrated payment gateways.",
    },
    {
      title: "Junior Developer",
      company: "CodeCraft Studios",
      period: "2016 - 2018",
      description:
        "Built responsive websites and contributed to mobile app development using React Native.",
    },
  ];

  const educationItems = [
    {
      degree: "Information Technology (Undergraduate)",
      institution: "SLIIT",
      year: "2022 - Present",
      description:
        "Specialized in Information Technology with focus on web technologies.",
    },
    // {
    //   degree: "Bachelor of Computer Engineering",
    //   institution: "State University",
    //   year: "2011 - 2015",
    //   description:
    //     "Graduated with honors, participated in ACM programming competitions.",
    // },
  ];
  const handleContactScroll = () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom
      behavior: "smooth", // Smooth scrolling
    });
  };
  const tabContent = {
    skills: (
      <motion.div
        key={`experience-${new Date().getTime()}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="space-y-2"
          >
            <div className="flex justify-between">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00ff95] to-[#00ccff]"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        key={`experience-${new Date().getTime()}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.title}
            variants={itemVariants}
            className="relative pl-6 border-l border-gray-800"
          >
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#00ff95]"></div>
            <h4 className="text-white text-lg font-semibold">{exp.title}</h4>
            <div className="flex items-center text-[#00ff95] mb-2">
              <Briefcase size={14} className="mr-2" />
              <span>
                {exp.company} | {exp.period}
              </span>
            </div>
            <p className="text-gray-400">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    ),
    education: (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {educationItems.map((edu) => (
          <motion.div
            key={edu.degree}
            variants={itemVariants}
            className="relative pl-6 border-l border-gray-800"
          >
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#00ff95]"></div>
            <h4 className="text-white text-lg font-semibold">{edu.degree}</h4>
            <div className="flex items-center text-[#00ff95] mb-2">
              <Award size={14} className="mr-2" />
              <span>
                {edu.institution} | {edu.year}
              </span>
            </div>
            <p className="text-gray-400">{edu.description}</p>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <motion.section
      className="py-20 px-4 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Personal Bio Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00ff95]/30 to-[#111] p-px rounded-2xl">
                <div className="bg-[#111] rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff95] to-transparent"></div>

                  {/* <motion.div
                    className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#222] p-1 relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00ff95] to-[#00ccff] overflow-hidden">
                      <div className="flex items-center justify-center h-full text-2xl font-bold text-[#111]">
                        JS
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#111] rounded-full flex items-center justify-center border-2 border-[#00ff95]">
                      <Zap size={16} className="text-[#00ff95]" />
                    </div>
                  </motion.div> */}

                  <motion.h2
                    className="text-2xl md:text-3xl font-bold mb-2 text-white text-center"
                    variants={headingVariants}
                  >
                    Sithila Nethmina
                  </motion.h2>
                  <p className="text-[#00ff95] text-center mb-4 font-medium">
                    Full Stack Developer
                  </p>

                  <div className="space-y-4 mt-8">
                    <motion.div
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                    >
                      <MessageSquare
                        size={20}
                        className="text-[#00ff95] mt-1"
                      />
                      <div>
                        <h4 className="text-white font-medium">About Me</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mt-1">
                          A passionate developer with 3+ years of experience
                          creating innovative web and mobile solutions.
                          Committed to clean code, user-centered design, and
                          continuous learning.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                    >
                      <Monitor size={20} className="text-[#00ff95] mt-1" />
                      <div>
                        <h4 className="text-white font-medium">
                          Specialization
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mt-1">
                          Full-stack web development with expertise in the React
                          ecosystem, Next.js, Node.js backends, and responsive
                          design. Experienced in building e-commerce platforms
                          and game-related applications. Proficient in
                          integrating databases like MongoDB and working with
                          modern JavaScript tools and frameworks.
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-3"
                      variants={itemVariants}
                    >
                      <Phone size={20} className="text-[#00ff95] mt-1" />
                      <div>
                        <h4 className="text-white font-medium">Contact</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          <span className="block">kms123sithila@gmail.com</span>
                          <span className="block">+94 75 633 5168</span>
                          <span className="block">Sri Lanka</span>
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.button
                    className="w-full mt-8 bg-gradient-to-r from-[#00ff95] to-[#00ccff] py-3 px-6 rounded-lg text-black font-medium flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleContactScroll}
                  >
                    <PhoneCall size={18} />
                    <span>Contact Me</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills, Experience, Education Tabs */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <div className="bg-gradient-to-br from-[#00ff95]/30 to-[#111] p-px rounded-2xl h-full">
              <div className="bg-[#111] rounded-2xl p-8 h-full">
                <div className="flex space-x-2 mb-8 border-b border-gray-800 pb-4">
                  {["skills", /*"experience",*/ "education"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                        activeTab === tab
                          ? "bg-gradient-to-r from-[#00ff95]/20 to-transparent text-[#00ff95]"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === "skills" && <Code size={18} />}
                      {tab === "experience" && <Briefcase size={18} />}
                      {tab === "education" && <Award size={18} />}
                      <span className="capitalize">{tab}</span>
                      {activeTab === tab && <ChevronRight size={16} />}
                    </button>
                  ))}
                </div>

                <div className="min-h-[400px]">{tabContent[activeTab]}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Showcase */}
        {/* <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
          >
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="bg-[#111] rounded-xl overflow-hidden border border-gray-800 group"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -15px rgba(0, 255, 149, 0.2)",
                }}
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
                    Project {project}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    A comprehensive solution for [problem domain] built with
                    React, Node.js, and MongoDB.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB"].map((tech) => (
                      <span
                        key={tech}
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
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default About;
