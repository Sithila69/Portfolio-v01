import React, { useState } from "react";
import { FaDownload, FaCheck, FaSpinner } from "react-icons/fa";

const DownloadResume = () => {
  const [state, setState] = useState("ready"); // ready, loading, success

  const handleDownload = () => {
    if (state !== "ready") return;

    setState("loading");

    // Simulate a delay for the download process
    setTimeout(() => {
      // Create and trigger download
      const resumeUrl = "/files/Resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Sithila_Nethmina.pdf";
      link.click();

      setState("success");

      // Reset state after 2 seconds
      setTimeout(() => {
        setState("ready");
      }, 2000);
    }, 1000);
  };

  // Render icon based on state
  const renderIcon = () => {
    if (state === "loading") {
      return <FaSpinner className="w-5 h-5 animate-spin" />;
    } else if (state === "success") {
      return <FaCheck className="w-5 h-5" />;
    } else {
      return <FaDownload className="w-5 h-5" />;
    }
  };

  return (
    <div className="fixed top-4 right-12 z-[1000]">
      <div className="relative group">
        <button
          onClick={handleDownload}
          disabled={state !== "ready"}
          className="w-10 h-10 flex items-center justify-center rounded-lg
            transition-all duration-300 overflow-hidden
            border border-[#00ff95] bg-[#1a1a1a] text-white hover:bg-[#00ff95] hover:text-[#1a1a1a]
            disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {renderIcon()}
        </button>

        <div className="absolute top-full right-0 transform translate-x-2 bg-[#1a1a1a] text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 whitespace-nowrap z-50 pointer-events-none max-w-xs sm:max-w-md">
          Download my resume
        </div>
      </div>
    </div>
  );
};

export default DownloadResume;
