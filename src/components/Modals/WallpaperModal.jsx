// components/Modals/WallpaperModal.js
import React from "react";
import Draggable from "react-draggable";
import wallpaper1 from "../../assets/bg.jpg";
import wallpaper2 from "../../assets/another-bg.jpg"; // Make sure to add another wallpaper in your assets
import wallpaper3 from "../../assets/bg-2.jpg"; 
import wallpaper4 from "../../assets/bg-3.jpg"; 
import wallpaper5 from "../../assets/bg-4.jpg"; 
import wallpaper6 from "../../assets/bg-5.jpg"; 
import wallpaper7 from "../../assets/bg-6.jpg"; 
import wallpaper8 from "../../assets/bg-7.jpg"; 
import wallpaper9 from "../../assets/bg-8.jpg"; 
import wallpaper10 from "../../assets/bg-9.jpg"; 


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
          <div
            className="cursor-pointer"
            onClick={() => {
              onSelect(wallpaper3);
              onClose();
            }}
          >
            <img
              src={wallpaper3}
              alt="Wallpaper 3"
              className="w-full h-32 object-cover rounded"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              onSelect(wallpaper4);
              onClose();
            }}
          >
            <img
              src={wallpaper4}
              alt="Wallpaper 3"
              className="w-full h-32 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default WallpaperModal;
