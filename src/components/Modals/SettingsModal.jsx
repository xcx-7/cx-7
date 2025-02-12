// components/Modals/SettingsModal.js
import React from "react";
import Draggable from "react-draggable";

const SettingsModal = ({ setOpenProject, theme, setTheme }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center bg-indigo-600 text-white p-2 rounded">
          <span className="font-bold">Settings</span>
          <button onClick={() => setOpenProject(null)} className="bg-red-500 px-2 py-1 rounded hover:bg-red-600">✖</button>
        </div>
        <div className="mt-4">
          <div>
            <label className="mr-2">Theme:</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="border p-1"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          {/* More settings can go here */}
        </div>
      </div>
    </Draggable>
  );
};

export default SettingsModal;
