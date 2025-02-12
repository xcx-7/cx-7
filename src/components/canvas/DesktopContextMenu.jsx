// components/DesktopContextMenu.js
import React from "react";

const DesktopContextMenu = ({ x, y, onClose, onChangeWallpaper, onAbout }) => {
  return (
    <div
      className="absolute bg-gray-800 text-white rounded shadow-lg p-2 z-50"
      style={{ top: y, left: x }}
      onClick={onClose}
    >
      <ul>
        <li
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onChangeWallpaper();
            onClose();
          }}
        >
          Change Wallpaper
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            window.location.reload(); // Refresh the desktop
          }}
        >
          Refresh
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onAbout();
            onClose();
          }}
        >
          About
        </li>
      </ul>
    </div>
  );
};

export default DesktopContextMenu;
