// components/Taskbar/Taskbar.js
import React from "react";

const Taskbar = ({ onClose }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-gray bg-opacity-80 h-14 flex items-center px-4">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-800 px-3 py-1 text-white font-semibold rounded cursor-pointer hover:bg-gray-700">Start</div>
        <div className="flex space-x-3">
          <div className="bg-gray-700 px-4 py-1 text-white rounded-lg cursor-pointer hover:bg-gray-600">📁 Explorer</div>
          <div className="bg-gray-700 px-4 py-1 text-white rounded-lg cursor-pointer hover:bg-gray-600">🌐 Browser</div>
        </div>
      </div>
      <button className="ml-auto bg-red-600 px-4 py-2 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700" onClick={onClose}>⏻ Exit</button>
    </div>
  );
};

export default Taskbar;
