
// components/Modals/ProjectFolder.js
import React from "react";
import Draggable from "react-draggable";
import folderImage from "../../assets/folder.png";

const ProjectFolder = ({ setOpenFolder, setOpenProject }) => {
  return (
    <Draggable>
      <div className="absolute top-2/4 left-1/4 bg-gray-800 p-4 rounded-lg shadow-lg w-196 h-172">
        {/* Title Bar */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">Projects</span>
          <button
            className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => setOpenFolder(null)}
          >
            ✖
          </button>
        </div>

        {/* Project Folders */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          {/* Chat App */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onDoubleClick={() => setOpenProject("ChatApp")}
          >
            <img src={folderImage} alt="Chat App" className="w-16 h-16" />
            <span className="text-white text-sm">Chat App</span>
          </div>
          {/* Xenon */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onDoubleClick={() => setOpenProject("Xenon")}
          >
            <img src={folderImage} alt="Xenon" className="w-16 h-16" />
            <span className="text-white text-sm">Xenon</span>
          </div>
          {/* Steganography Tool */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onDoubleClick={() => setOpenProject("Steganography")}
          >
            <img src={folderImage} alt="Steganography Tool" className="w-16 h-16" />
            <span className="text-white text-sm">Steganography Tool</span>
          </div>
          {/* Tetris */}
          <div
            className="flex flex-col items-center cursor-pointer"
            onDoubleClick={() => setOpenProject("Tetris")}
          >
            <img src={folderImage} alt="Tetris" className="w-16 h-16" />
            <span className="text-white text-sm">Tetris</span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ProjectFolder;
