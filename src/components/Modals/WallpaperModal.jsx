// components/Modals/WallpaperModal.js
import React from "react";
import Draggable from "react-draggable";
import wallpaper1 from "../../assets/bg.jpg";
import wallpaper2 from "../../assets/another-bg.jpg"; // Make sure to add another wallpaper in your assets

const WallpaperModal = ({ onClose, onSelect }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-gray-800 p-4 rounded-lg shadow-lg w-96 h-auto">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">Choose Wallpaper</span>
          <button
            className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={onClose}
          >
            ✖
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div
            className="cursor-pointer"
            onClick={() => {
              onSelect(wallpaper1);
              onClose();
            }}
          >
            <img
              src={wallpaper1}
              alt="Wallpaper 1"
              className="w-full h-32 object-cover rounded"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              onSelect(wallpaper2);
              onClose();
            }}
          >
            <img
              src={wallpaper2}
              alt="Wallpaper 2"
              className="w-full h-32 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default WallpaperModal;
