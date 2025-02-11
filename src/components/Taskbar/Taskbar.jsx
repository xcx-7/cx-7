
// // components/Taskbar.js
// import React, { useState, useEffect } from "react";
// import StartMenu from "./StartMenu"; // Your existing Start Menu component

// const Taskbar = ({ onClose, setOpenProject }) => {
//   const [time, setTime] = useState(new Date());
//   const [startMenuOpen, setStartMenuOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const formattedTime = time.toLocaleTimeString();

//   return (
//     <div className="fixed bottom-0 left-0 w-full h-12 bg-gray-900 flex items-center px-4 text-white">
//       {/* Start Button */}
//       <button
//         className="bg-gray-800 px-4 py-1 rounded hover:bg-gray-700"
//         onClick={() => setStartMenuOpen(!startMenuOpen)}
//       >
//         Start
//       </button>

//       {/* Taskbar Browser Icon */}
//       <div
//         className="bg-gray-700 px-4 py-1 text-white rounded-lg cursor-pointer hover:bg-gray-600 ml-4"
//         onClick={() => setOpenProject("Browser")}
//       >
//         🌐 Browser
//       </div>

//       {/* Show Start Menu if Open */}
//       {startMenuOpen && <StartMenu onClose={onClose} />}

//       {/* Timer */}
//       <div className="ml-auto text-lg font-mono">{formattedTime}</div>
//     </div>
//   );
// };

// export default Taskbar;



// components/Taskbar.js
import React, { useState, useEffect } from "react";
import StartMenu from "./StartMenu";

const Taskbar = ({ onClose, setOpenProject }) => {
  const [time, setTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="fixed bottom-0 left-0 w-full h-12 bg-gray-900 flex items-center px-4 text-white">
      {/* Start Button */}
      <button
        className="bg-gray-800 px-4 py-1 rounded hover:bg-gray-700"
        onClick={() => setStartMenuOpen(!startMenuOpen)}
      >
        Start
      </button>

      {/* Taskbar Browser Icon */}
      <div
        className="bg-gray-700 px-4 py-1 text-white rounded-lg cursor-pointer hover:bg-gray-600 ml-4"
        onClick={() => setOpenProject("Browser")}
      >
        🌐 Browser
      </div>

      {/* Show Start Menu if Open */}
      {startMenuOpen && (
        <StartMenu onClose={onClose} setOpenProject={setOpenProject} />
      )}

      {/* Timer */}
      <div className="ml-auto text-lg font-mono">{formattedTime}</div>
    </div>
  );
};

export default Taskbar;
