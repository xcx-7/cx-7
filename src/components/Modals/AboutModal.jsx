
import React from "react";
import Draggable from "react-draggable";

const AboutModal = ({ setOpenProject }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl w-96">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <span className="text-xl font-bold text-white">about.txt</span>
          <button
            onClick={() => setOpenProject(null)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            ✖
          </button>
        </div>
        {/* Content */}
        <div className="mt-4 text-white text-sm">
          This is a short description about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.
        </div>
      </div>
    </Draggable>
  );
};

export default AboutModal;
