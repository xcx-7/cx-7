// components/Modals/AboutModal.js
import React from "react";
import Draggable from "react-draggable";

const AboutModal = ({ setOpenProject }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-gray-900 p-4 rounded-lg shadow-lg w-96 h-72">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">About</span>
          <button
            className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => setOpenProject(null)}
          >
            ✖
          </button>
        </div>
        <div className="mt-4 text-white text-sm">
          This is a custom desktop environment built using React. Enjoy
          customizing your OS and exploring the features!
        </div>
      </div>
    </Draggable>
  );
};

export default AboutModal;
