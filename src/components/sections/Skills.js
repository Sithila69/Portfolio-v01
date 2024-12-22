const Skills = () => (
  <div className="min-h-screen flex items-center justify-center p-8">
    <div className="max-w-6xl w-full">
      <h2 className="text-4xl font-bold mb-12 text-[#00ff95]">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-[#00ff95]">
            Technologies
          </h3>
          <p className="text-lg text-gray-300">
            WebGL • Three.js • TensorFlow.js • WebAssembly
          </p>
        </div>
        <div className="bg-[#111] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-[#00ff95]">
            Languages
          </h3>
          <p className="text-lg text-gray-300">
            JavaScript • Python • Rust • C++
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Skills;
