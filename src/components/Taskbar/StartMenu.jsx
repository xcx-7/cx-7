

// // components/StartMenu.js
// import React from "react";

// const StartMenu = ({ onClose, setOpenProject }) => {
//   return (
//     <div className="absolute bottom-12 left-2 w-56 bg-gray-800 text-white rounded-lg shadow-lg p-2">
//       <ul>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("Calculator")}
//           >
//             Calculator
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("PaintApp")}
//           >
//             Paint
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("Notepad")}
//           >
//             Notepad
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("Calendar")}
//           >
//             Calendar
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("TicTacToe")}
//           >
//             Tic Tac Toe
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("About")}
//           >
//             About
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => onClose()}
//           >
//             Exit
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default StartMenu;
























// // components/StartMenu.js
// import React from "react";

// const StartMenu = ({ onClose, setOpenProject }) => {
//   return (
//     <div className="absolute bottom-12 left-2 w-56 bg-gray-800 text-white rounded-lg shadow-lg p-2">
//       <ul>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("Calculator")}
//           >
//             Calculator
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("Notepad")}
//           >
//             Notepad
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("Calendar")}
//           >
//             Calendar
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("TicTacToe")}
//           >
//             Tic Tac Toe
//           </button>
//         </li>
//         {/* New File Explorer Option */}
//         {/* <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("FileExplorer")}
//           >
//             File Explorer
//           </button>
//         </li> */}
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => setOpenProject("About")}
//           >
//             About
//           </button>
//         </li>
//         <li>
//           <button
//             className="w-full text-left px-4 py-2 hover:bg-gray-700"
//             onClick={() => onClose()}
//           >
//             Exit
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default StartMenu;















// components/StartMenu.js
import React from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaCalendarAlt,
  FaGamepad,
  FaInfoCircle,
  FaPowerOff,
} from "react-icons/fa";

const StartMenu = ({ onClose, setOpenProject }) => {
  return (
    <div className="absolute bottom-12 left-2 w-56 bg-gray-800 text-white rounded-lg shadow-lg p-2">
      <ul>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
            onClick={() => setOpenProject("Calculator")}
          >
            <FaCalculator /> <span>Calculator</span>
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
            onClick={() => setOpenProject("Notepad")}
          >
            <FaFileAlt /> <span>Notepad</span>
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
            onClick={() => setOpenProject("Calendar")}
          >
            <FaCalendarAlt /> <span>Calendar</span>
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
            onClick={() => setOpenProject("TicTacToe")}
          >
            <FaGamepad /> <span>Tic Tac Toe</span>
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
            onClick={() => setOpenProject("About")}
          >
            <FaInfoCircle /> <span>About</span>
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
            onClick={() => onClose()}
          >
            <FaPowerOff /> <span>Shut Down</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
