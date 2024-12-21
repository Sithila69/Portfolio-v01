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
    <div>
      <h2 className="text-3xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] p-8 rounded-lg"
            onClick={() => openProject(project.content)} // Trigger openProject with content
          >
            <h3 className="text-xl mb-4">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
