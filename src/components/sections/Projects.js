import React from "react";

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

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold mb-12 text-[#00ff95]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] p-8 rounded-2xl cursor-pointer transform hover:scale-105 transition-all hover:shadow-xl hover:shadow-[#00ff95]/10"
              onClick={() => openProject(project.content)}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#00ff95]">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
