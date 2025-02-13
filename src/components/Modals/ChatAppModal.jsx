

// // components/Modals/ChatAppModal.js
// import React, { useState } from "react";
// import Draggable from "react-draggable";
// import chatAppLogo from "../../assets/chat-app-logo.png";
// import textFileImage from "../../assets/txtfile.png";
// import projectScreenshot from "../../assets/project-screenshot.png";

// const ChatAppModal = ({ setOpenProject }) => {
//   const [showImage, setShowImage] = useState(false);
//   const [lastClickTime, setLastClickTime] = useState(0);

//   // Custom double-click handler for the Info.txt element
//   const handleInfoClick = () => {
//     const now = new Date().getTime();
//     console.log("Info.txt clicked!");
//     if (now - lastClickTime < 300) {
//       console.log("Double click detected! Opening Info Modal...");
//       // If two clicks occur within 300ms, consider it a double-click.
//       setOpenProject("ChatAppDescription");
//     }
//     setLastClickTime(now);
//   };

//   return (
//     // Using cancel prop to avoid dragging on elements we want to double-click.
//     <Draggable cancel=".draggable-ignore">
//       <div className="absolute top-1/4 left-1/3 bg-gray-800 p-4 rounded-lg shadow-lg w-80 h-60 z-50">
//         {/* Title Bar */}
//         <div className="flex justify-between items-center border-b pb-2">
//           <span className="text-white font-semibold">Chat App</span>
//           <button
//             className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
//             onClick={() => setOpenProject(null)}
//           >
//             ✖
//           </button>
//         </div>

//         {/* Files inside Chat App Folder */}
//         <div className="mt-4 grid grid-cols-3 gap-4">
//           {/* 1. Blink (Chat App Logo) */}
//           <div
//             className="flex flex-col items-center cursor-pointer"
//             onClick={() =>
//               window.open("https://your-chatapp-url.com", "_blank")
//             }
//           >
//             <img src={chatAppLogo} alt="Blink" className="w-16 h-16" />
//             <span className="text-white text-sm font-semibold">Blink</span>
//           </div>

//           {/* 2. Info.txt (using custom double-click handler) */}
//           <div
//             className="draggable-ignore flex flex-col items-center cursor-pointer"
//             onClick={handleInfoClick}
//           >
//             <img
//               src={textFileImage}
//               alt="Chat App Info"
//               className="w-16 h-16"
//             />
//             <span className="text-white text-sm">Info.txt</span>
//           </div>

//           {/* 3. Screenshot */}
//           <div
//             className="flex flex-col items-center cursor-pointer"
//             onClick={() => setShowImage(true)}
//           >
//             <img
//               src={projectScreenshot}
//               alt="Screenshot"
//               className="w-16 h-16"
//             />
//             <span className="text-white text-sm">Screenshot</span>
//           </div>
//         </div>

//         {/* Full-screen image modal */}
//         {showImage && (
//           <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
//             <div className="relative">
//               <img
//                 src={projectScreenshot}
//                 alt="Enlarged Screenshot"
//                 className="max-w-5xl max-h-136"
//               />
//               <button
//                 className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
//                 onClick={() => setShowImage(false)}
//               >
//                 ✖
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </Draggable>
//   );
// };

// export default ChatAppModal;












// components/Modals/ChatAppModal.js
import React, { useState } from "react";
import Draggable from "react-draggable";
import chatAppLogo from "../../assets/chat-app-logo.png";
import textFileImage from "../../assets/txtfile.png";
import projectScreenshot from "../../assets/project-screenshot.png";

const ChatAppModal = ({ setOpenProject }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <Draggable cancel=".draggable-ignore">
      <div className="absolute top-20 left-1/3 bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl w-11/12 max-w-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-600 pb-2">
          <span className="text-xl font-bold text-white">Chat App</span>
          <button
            className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            onClick={() => setOpenProject(null)}
          >
            ✖
          </button>
        </div>
        {/* Content */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          {/* Chat App Launcher */}
          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition transform"
            onClick={() =>
              window.open("https://your-chatapp-url.com", "_blank")
            }
          >
            <img src={chatAppLogo} alt="Chat App" className="w-16 h-16" />
            <span className="mt-1 text-white text-sm font-semibold">Chat</span>
          </div>
          {/* Info.txt */}
          <div
            className="draggable-ignore flex flex-col items-center cursor-pointer hover:scale-105 transition transform"
            onDoubleClick={() => setOpenProject("ChatAppDescription")}
          >
            <img src={textFileImage} alt="Info.txt" className="w-16 h-16" />
            <span className="mt-1 text-white text-sm">Info.txt</span>
          </div>
          {/* Screenshot */}
          <div
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition transform"
            onClick={() => setShowImage(true)}
          >
            <img src={projectScreenshot} alt="Screenshot" className="w-16 h-16" />
            <span className="mt-1 text-white text-sm">Screenshot</span>
          </div>
        </div>
        {/* Full-screen Screenshot Modal */}
        {showImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
            <div className="relative">
              <img
                src={projectScreenshot}
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

export default ChatAppModal;
