// // components/Modals/ProjectFolder.js
// import React from "react";
// import Draggable from "react-draggable";
// import folderImage from "../../assets/folder.png";

// const ProjectFolder = ({ setOpenFolder, setOpenProject }) => {
//   return (
//     <Draggable>
//       <div className="absolute top-1/4 left-1/4 bg-gray-800 p-4 rounded-lg shadow-lg w-96 h-72">
//         <div className="flex justify-between items-center border-b pb-2">
//           <span className="text-white font-semibold">Projects</span>
//           <button className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600" onClick={() => setOpenFolder(null)}>✖</button>
//         </div>
//         <div className="mt-4 grid grid-cols-3 gap-4">
//           <div className="flex flex-col items-center cursor-pointer" onDoubleClick={() => setOpenProject("ChatApp") }>
//             <img src={folderImage} alt="Chat App" className="w-16 h-16" />
//             <span className="text-white text-sm">Chat App</span>
//           </div>
//           <div className="flex flex-col items-center cursor-pointer" onDoubleClick={() => setOpenProject("ChatBot") }>
//             <img src={folderImage} alt="Chat Bot" className="w-16 h-16" />
//             <span className="text-white text-sm">Chat Bot</span>
//           </div>
//         </div>
//       </div>
//     </Draggable>
//   );
// };

// export default ProjectFolder;




// // components/Modals/ProjectFolder.js
// import React from "react";
// import Draggable from "react-draggable";
// import folderImage from "../../assets/folder.png";

// const ProjectFolder = ({ setOpenFolder, setOpenProject }) => {
//   const handleChatAppDoubleClick = () => {
//     console.log("Chat App folder double-clicked");
//     setOpenProject("ChatApp");
//   };

//   return (
//     <Draggable>
//       <div className="absolute top-1/4 left-1/4 bg-gray-800 p-4 rounded-lg shadow-lg w-96 h-72">
//         {/* Title Bar */}
//         <div className="flex justify-between items-center border-b pb-2">
//           <span className="text-white font-semibold">Projects</span>
//           <button
//             className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
//             onClick={() => setOpenFolder(null)}
//           >
//             ✖
//           </button>
//         </div>

//         {/* Project Folders */}
//         <div className="mt-4 grid grid-cols-3 gap-4">
//           {/* Chat App Folder */}
//           <div
//             className="flex flex-col items-center cursor-pointer"
//             onDoubleClick={handleChatAppDoubleClick}
//           >
//             <img src={folderImage} alt="Chat App" className="w-16 h-16" />
//             <span className="text-white text-sm">Chat App</span>
//           </div>
//           {/* Chat Bot Folder */}
//           <div
//             className="flex flex-col items-center cursor-pointer"
//             onDoubleClick={() => setOpenProject("ChatBot")}
//           >
//             <img src={folderImage} alt="Chat Bot" className="w-16 h-16" />
//             <span className="text-white text-sm">Chat Bot</span>
//           </div>
//         </div>
//       </div>
//     </Draggable>
//   );
// };

// export default ProjectFolder;








// components/Modals/ProjectFolder.js
import React from "react";
import Draggable from "react-draggable";
import folderImage from "../../assets/folder.png";

const ProjectFolder = ({ setOpenFolder, setOpenProject }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-gray-800 p-4 rounded-lg shadow-lg w-96 h-72">
        {/* Title Bar */}
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">Projects</span>
          <button
            className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => setOpenFolder(null)}
          >
            ✖
          </button>
        </div>

        {/* Project Folders */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div
            className="flex flex-col items-center cursor-pointer"
            onDoubleClick={() => setOpenProject("ChatApp")}
          >
            <img src={folderImage} alt="Chat App" className="w-16 h-16" />
            <span className="text-white text-sm">Chat App</span>
          </div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onDoubleClick={() => setOpenProject("ChatBot")}
          >
            <img src={folderImage} alt="Chat Bot" className="w-16 h-16" />
            <span className="text-white text-sm">Chat Bot</span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default ProjectFolder;
