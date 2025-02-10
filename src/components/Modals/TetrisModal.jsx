// components/Modals/TetrisModal.js
import React, { useState } from "react";
import Draggable from "react-draggable";
import tetrisLogo from "../../assets/tetris-logo.png"; // replace with your asset
import textFileImage from "../../assets/txtfile.png";
import tetrisScreenshot from "../../assets/tetris-screenshot.png"; // replace with your asset

const TetrisModal = ({ setOpenProject }) => {
  const [showImage, setShowImage] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleInfoClick = () => {
    const now = new Date().getTime();
    if (now - lastClickTime < 300) {
      setOpenProject("TetrisDescription");
    }
    setLastClickTime(now);
  };

  return (
    <Draggable cancel=".draggable-ignore">
      <div className="absolute top-1/4 left-1/3 bg-gray-800 p-4 rounded-lg shadow-lg w-80 h-60 z-50">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">Tetris</span>
          <button
            className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => setOpenProject(null)}
          >
            ✖
          </button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => window.open("https://sohelikona.github.io/tetris/", "_blank")}
          >
            <img src={tetrisLogo} alt="Tetris" className="w-16 h-16" />
            <span className="text-white text-sm font-semibold">Tetris</span>
          </div>
          <div
            className="draggable-ignore flex flex-col items-center cursor-pointer"
            onClick={handleInfoClick}
          >
            <img src={textFileImage} alt="Tetris Info" className="w-16 h-16" />
            <span className="text-white text-sm">Info.txt</span>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setShowImage(true)}
          >
            <img src={tetrisScreenshot} alt="Tetris Screenshot" className="w-16 h-16" />
            <span className="text-white text-sm">Screenshot</span>
          </div>
        </div>
        {showImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
            <div className="relative">
              <img
                src={tetrisScreenshot}
                alt="Enlarged Tetris Screenshot"
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

export default TetrisModal;
