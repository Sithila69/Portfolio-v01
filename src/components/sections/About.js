import { useState } from "react";
import {
  MessageSquare,
  Briefcase,
  ChevronRight,
  Award,
  Monitor,
  Phone,
  PhoneCall,
  Target,
  Trophy,
  Calendar,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

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

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechVision Inc.",
      period: "2021 - Present",
      description:
        "Leading UI/UX implementation for enterprise web applications with React and TypeScript.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Full Stack Developer",
      company: "WebSolutions LLC",
      period: "2018 - 2021",
      description:
        "Developed custom e-commerce solutions using the MERN stack and integrated payment gateways.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "Payment APIs"],
    },
    {
      title: "Junior Developer",
      company: "CodeCraft Studios",
      period: "2016 - 2018",
      description:
        "Built responsive websites and contributed to mobile app development using React Native.",
      technologies: [
        "React Native",
        "JavaScript",
        "CSS3",
        "Mobile Development",
      ],
    },
  ];

  const educationItems = [
    {
      degree: "Information Technology (Undergraduate)",
      institution: "SLIIT",
      year: "2022 - Present",
      description:
        "Specialized in Information Technology with focus on web technologies and software engineering principles.",
      highlights: ["Web Development", "Database Systems"],
    },
  ];

  const achievements = [
    {
      title: "Project Excellence Award",
      organization: "TechVision Inc.",
      year: "2023",
      description:
        "Recognized for delivering a complex enterprise dashboard ahead of schedule with exceptional user experience.",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub Community",
      year: "2022-Present",
      description:
        "Active contributor to React ecosystem projects with 50+ merged pull requests.",
    },
    {
      title: "Hackathon Winner",
      organization: "CodeFest 2021",
      year: "2021",
      description:
        "First place in web development category for building an innovative e-commerce solution.",
    },
  ];

  const handleContactScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const tabContent = {
    journey: (
      <motion.div
        key={`journey-${new Date().getTime()}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            variants={itemVariants}
            className="relative pl-6 border-l border-gray-800"
          >
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#00ff95]"></div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h4 className="text-white text-lg font-semibold">
                  {exp.title}
                </h4>
                <div className="flex items-center text-[#00ff95] mb-2">
                  <Briefcase size={14} className="mr-2" />
                  <span className="font-medium">{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                {exp.period}
              </div>
            </div>
            <p className="text-gray-400 mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#00ff95]/10 text-[#00ff95] text-xs rounded-md border border-[#00ff95]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
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
            <h4 className="text-white text-lg font-semibold mb-2">
              {edu.degree}
            </h4>
            <div className="flex items-center text-[#00ff95] mb-2">
              <Award size={14} className="mr-2" />
              <span className="font-medium">{edu.institution}</span>
              <span className="text-gray-400 ml-2">| {edu.year}</span>
            </div>
            <p className="text-gray-400 mb-3">{edu.description}</p>
            <div className="flex flex-wrap gap-2">
              {edu.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-md border border-blue-500/20"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    achievements: (
      <motion.div
        key={`achievements-${new Date().getTime()}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            variants={itemVariants}
            className="relative pl-6 border-l border-gray-800"
          >
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#00ff95]"></div>
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-white text-lg font-semibold">
                {achievement.title}
              </h4>
              <div className="flex items-center text-gray-400 text-sm">
                <Trophy size={14} className="mr-1" />
                {achievement.year}
              </div>
            </div>
            <div className="flex items-center text-[#00ff95] mb-2">
              <Target size={14} className="mr-2" />
              <span className="font-medium">{achievement.organization}</span>
            </div>
            <p className="text-gray-400">{achievement.description}</p>
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
                          continuous learning in the ever-evolving tech
                          landscape.
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
                      <MapPin size={20} className="text-[#00ff95] mt-1" />
                      <div>
                        <h4 className="text-white font-medium">Location</h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Based in Sri Lanka, available for remote collaboration
                          worldwide.
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
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.button
                    className="w-full mt-8 bg-gradient-to-r from-[#00ff95] to-[#00ccff] py-3 px-6 rounded-lg text-black font-medium flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#00ff95]/25 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleContactScroll}
                  >
                    <PhoneCall size={18} />
                    <span>Let's Connect</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Journey Tabs */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <div className="bg-gradient-to-br from-[#00ff95]/30 to-[#111] p-px rounded-2xl h-full">
              <div className="bg-[#111] rounded-2xl p-8 h-full">
                <div className="flex space-x-2 mb-8 border-b border-gray-800 pb-4">
                  {[/*"journey", "achievements"*/ "education"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                        activeTab === tab
                          ? "bg-gradient-to-r from-[#00ff95]/20 to-transparent text-[#00ff95]"
                          : "text-gray-400 hover:text-white"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === "journey" && <Briefcase size={18} />}
                      {tab === "education" && <Award size={18} />}
                      {tab === "achievements" && <Trophy size={18} />}
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
      </div>
    </motion.section>
  );
};

export default About;
