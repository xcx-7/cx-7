
// // pages/DesktopPage.js
// import React, { useState } from "react";
// import BackgroundImg from "../../assets/bg.jpg";
// import folderImage from "../../assets/folder.png";
// import textFileImage from "../../assets/txtfile.png";
// import DesktopIcons from "../canvas/DesktopIcons";
// import ProjectFolder from "../Modals/ProjectFolder";
// import TextFileModal from "../Modals/TextFileModal.jsx";
// import ChatAppModal from "../Modals/ChatAppModal";
// import ChatAppInfoModal from "../Modals/ChatAppInfoModal"; // <-- Import added
// import Taskbar from "../Taskbar/Taskbar";

// const DesktopPage = ({ onClose }) => {
//   const [icons] = useState([
//     { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
//     { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
//     { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
    
//   ]);
  
//   const [openFolder, setOpenFolder] = useState("Projects");
//   const [openProject, setOpenProject] = useState(null);

//   const handleIconDoubleClick = (name) => {
//     if (name === "Projects") setOpenFolder("Projects");

//     else if (name === "about.txt") setOpenProject("AboutFile");

//   };

//   return (
//     <div
//       className="fixed top-0 left-0 w-full h-full flex flex-col"
//       style={{
//         backgroundImage: `url(${BackgroundImg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <DesktopIcons icons={icons} onDoubleClick={handleIconDoubleClick} />
      
//       {openFolder === "Projects" && (
//         <ProjectFolder
//           setOpenFolder={setOpenFolder}
//           setOpenProject={setOpenProject}
//         />
//       )}

//       {openProject === "AboutFile" && (
//         <TextFileModal setOpenProject={setOpenProject} />
//       )}
      
//       {openProject === "ChatApp" && (
//         <ChatAppModal setOpenProject={setOpenProject} />
//       )}

//       {openProject === "ChatAppDescription" && (
//         <ChatAppInfoModal setOpenProject={setOpenProject} />
//       )}

//       <Taskbar onClose={onClose} />
//     </div>
//   );
// };

// export default DesktopPage;



















// pages/DesktopPage.js
import React, { useState } from "react";
import BackgroundImg from "../../assets/bg.jpg";
import folderImage from "../../assets/folder.png";
import cat from "../../assets/cat.jpg";
import textFileImage from "../../assets/txtfile.png";
import DesktopIcons from "../canvas/DesktopIcons";
import ProjectFolder from "../Modals/ProjectFolder";
import TextFileModal from "../Modals/TextFileModal.jsx";
import ChatAppModal from "../Modals/ChatAppModal";
import ChatAppInfoModal from "../Modals/ChatAppInfoModal";
import XenonModal from "../Modals/XenonModal";
import XenonInfoModal from "../Modals/XenonInfoModal";
import SteganographyModal from "../Modals/SteganographyModal";
import SteganographyInfoModal from "../Modals/SteganographyInfoModal";
import TetrisModal from "../Modals/TetrisModal";
import TetrisInfoModal from "../Modals/TetrisInfoModal";
import ContactFolder from "../Modals/ContactFolder";         // <-- Import Contacts folder
import ContactInfoModal from "../Modals/ContactInfoModal"; 
import CatModal from "../Modals/CatModal";

import Taskbar from "../Taskbar/Taskbar";

const DesktopPage = ({ onClose }) => {
  const [icons] = useState([
    { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
    { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
    { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
    { id: 4, name: "cat.png", top: 300, left: 400, img: cat },

  ]);
  
  const [openFolder, setOpenFolder] = useState("Projects");
  const [openProject, setOpenProject] = useState(null);

  const handleIconDoubleClick = (name) => {
    if (name === "Projects") setOpenFolder("Projects");
    else if (name === "about.txt") setOpenProject("AboutFile");
    else if (name === "cat.png") setOpenProject("Cat"); 
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex flex-col"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <DesktopIcons icons={icons} onDoubleClick={handleIconDoubleClick} />
      
      {openFolder === "Projects" && (
        <ProjectFolder
          setOpenFolder={setOpenFolder}
          setOpenProject={setOpenProject}
        />
      )}

      {openProject === "AboutFile" && (
        <TextFileModal setOpenProject={setOpenProject} />
      )}
      
      {openProject === "ChatApp" && (
        <ChatAppModal setOpenProject={setOpenProject} />
      )}
      {openProject === "Xenon" && (
        <XenonModal setOpenProject={setOpenProject} />
      )}
      {openProject === "Steganography" && (
        <SteganographyModal setOpenProject={setOpenProject} />
      )}
      {openProject === "Tetris" && (
        <TetrisModal setOpenProject={setOpenProject} />
      )}

      {openProject === "ChatAppDescription" && (
        <ChatAppInfoModal setOpenProject={setOpenProject} />
      )}
      {openProject === "XenonDescription" && (
        <XenonInfoModal setOpenProject={setOpenProject} />
      )}
      {openProject === "SteganographyDescription" && (
        <SteganographyInfoModal setOpenProject={setOpenProject} />
      )}
      {openProject === "TetrisDescription" && (
        <TetrisInfoModal setOpenProject={setOpenProject} />
      )}
{openProject === "Cat" && (
  <CatModal setOpenProject={setOpenProject} />
)}
      <Taskbar onClose={onClose} />
    </div>
  );
};

export default DesktopPage;
