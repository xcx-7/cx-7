
// components/Modals/TetrisInfoModal.js
import React from "react";
import Draggable from "react-draggable";

const TetrisInfoModal = ({ setOpenProject }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl w-96">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <span className="text-xl font-bold text-white">Info.txt - Tetris</span>
          <button
            onClick={() => setOpenProject(null)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            ✖
          </button>
        </div>
        {/* Content */}
        <div className="mt-4 text-white text-sm">
          Tetris is a classic game reimagined with a modern twist. Enjoy the responsive controls and sleek design.
        </div>
      </div>
    </Draggable>
  );
};

export default TetrisInfoModal;
