

// components/Modals/SteganographyModal.js
import React, { useState } from "react";
import Draggable from "react-draggable";
import steganographyLogo from "../../assets/steganography-logo.png"; // Replace with your asset
import textFileImage from "../../assets/txtfile.png";
import steganographyScreenshot from "../../assets/steganography-screenshot.png"; // Replace with your asset

const SteganographyModal = ({ setOpenProject }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <Draggable cancel=".draggable-ignore">
      <div className="absolute top-20 left-1/3 bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl w-11/12 max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-600 pb-2">
          <span className="text-xl font-bold text-white">Steganography Tool</span>
          <button
            className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            onClick={() => setOpenProject(null)}
          >
            ✖
          </button>
        </div>
        {/* Content */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          {/* Tool Launcher */}
          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition transform"
            onClick={() =>
              window.open("https://steganographyliv.netlify.app/", "_blank")
            }
          >
            <img src={steganographyLogo} alt="Steganography" className="w-16 h-16" />
            <span className="mt-1 text-white text-sm font-semibold">Tool</span>
          </div>
          {/* Info.txt */}
          <div
            className="draggable-ignore flex flex-col items-center cursor-pointer hover:scale-105 transition transform"
            onDoubleClick={() => setOpenProject("SteganographyDescription")}
          >
            <img src={textFileImage} alt="Info.txt" className="w-16 h-16" />
            <span className="mt-1 text-white text-sm">Info.txt</span>
          </div>
          {/* Screenshot */}
          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition transform"
            onClick={() => setShowImage(true)}
          >
            <img src={steganographyScreenshot} alt="Screenshot" className="w-16 h-16" />
            <span className="mt-1 text-white text-sm">Screenshot</span>
          </div>
        </div>
        {showImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
            <div className="relative">
              <img
                src={steganographyScreenshot}
                alt="Enlarged Screenshot"
                className="max-w-5xl max-h-136"
              />
              <button
                className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                onClick={() => setShowImage(false)}
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default SteganographyModal;
