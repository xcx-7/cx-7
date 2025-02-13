

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
























// components/StartMenu.js
import React from "react";

const StartMenu = ({ onClose, setOpenProject }) => {
  return (
    <div className="absolute bottom-12 left-2 w-56 bg-gray-800 text-white rounded-lg shadow-lg p-2">
      <ul>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => setOpenProject("Calculator")}
          >
            Calculator
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => setOpenProject("Notepad")}
          >
            Notepad
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => setOpenProject("Calendar")}
          >
            Calendar
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => setOpenProject("TicTacToe")}
          >
            Tic Tac Toe
          </button>
        </li>
        {/* New File Explorer Option */}
        {/* <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => setOpenProject("FileExplorer")}
          >
            File Explorer
          </button>
        </li> */}
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => setOpenProject("About")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => onClose()}
          >
            Exit
          </button>
        </li>
      </ul>
    </div>
  );
};

export default StartMenu;
