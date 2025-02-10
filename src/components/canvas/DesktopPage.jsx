

// // pages/DesktopPage.js
// import React, { useState } from "react";
// import BackgroundImg from "../../assets/bg.jpg";
// import folderImage from "../../assets/folder.png";
// import textFileImage from "../../assets/txtfile.png";
// import DesktopIcons from "../canvas/DesktopIcons";
// import ProjectFolder from "../Modals/ProjectFolder";
// import TextFileModal from "../Modals/TextFileModal.jsx";
// import Taskbar from "../Taskbar/Taskbar";

// const DesktopPage = ({ onClose }) => {
//   const [icons] = useState([
//     { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
//     { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
//     { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
//   ]);
//   const [openFolder, setOpenFolder] = useState(null);
//   const [openProject, setOpenProject] = useState(null);
//   // const [openFolder, setOpenFolder] = useState("Projects"); 

//   const handleIconDoubleClick = (name) => {
//     if (name === "Projects") setOpenFolder("Projects");
//     else if (name === "about.txt") setOpenProject("AboutFile");
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full h-full flex flex-col" style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
//       <DesktopIcons icons={icons} onDoubleClick={handleIconDoubleClick} />
//       {openFolder === "Projects" && <ProjectFolder setOpenFolder={setOpenFolder} setOpenProject={setOpenProject} />}
//       {openProject === "AboutFile" && <TextFileModal setOpenProject={setOpenProject} />}
//       <Taskbar onClose={onClose} />
//     </div>
//   );
// };

// export default DesktopPage;



// // pages/DesktopPage.js
// import React, { useState } from "react";
// import BackgroundImg from "../../assets/bg.jpg";
// import folderImage from "../../assets/folder.png";
// import textFileImage from "../../assets/txtfile.png";
// import DesktopIcons from "../canvas/DesktopIcons";
// import ProjectFolder from "../Modals/ProjectFolder";
// import TextFileModal from "../Modals/TextFileModal.jsx";
// import Taskbar from "../Taskbar/Taskbar";
// import ChatAppModal from "../Modals/ChatAppModal";  // Import the new ChatAppModal

// const DesktopPage = ({ onClose }) => {
//   const [icons] = useState([
//     { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
//     { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
//     { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
//   ]);
  
//   // Manage state for which folder/modal is open.
//   const [openFolder, setOpenFolder] = useState("Projects");
//   const [openProject, setOpenProject] = useState(null);

//   // Handle double-click on desktop icons.
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
      
//       {/* Render the Projects Folder */}
//       {openFolder === "Projects" && (
//         <ProjectFolder
//           setOpenFolder={setOpenFolder}
//           setOpenProject={setOpenProject}
//         />
//       )}

//       {/* Render the about.txt modal */}
//       {openProject === "AboutFile" && (
//         <TextFileModal setOpenProject={setOpenProject} />
//       )}
      
//       {/* Render the Chat App modal */}
//       {openProject === "ChatApp" && (
//         <ChatAppModal setOpenProject={setOpenProject} />
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
import textFileImage from "../../assets/txtfile.png";
import DesktopIcons from "../canvas/DesktopIcons";
import ProjectFolder from "../Modals/ProjectFolder";
import TextFileModal from "../Modals/TextFileModal.jsx";
import ChatAppModal from "../Modals/ChatAppModal";
import ChatAppInfoModal from "../Modals/ChatAppInfoModal"; // <-- Import added
import Taskbar from "../Taskbar/Taskbar";

const DesktopPage = ({ onClose }) => {
  const [icons] = useState([
    { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
    { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
    { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
  ]);
  
  const [openFolder, setOpenFolder] = useState("Projects");
  const [openProject, setOpenProject] = useState(null);

  const handleIconDoubleClick = (name) => {
    if (name === "Projects") setOpenFolder("Projects");
    else if (name === "about.txt") setOpenProject("AboutFile");
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

      {openProject === "ChatAppDescription" && (
        <ChatAppInfoModal setOpenProject={setOpenProject} />
      )}

      <Taskbar onClose={onClose} />
    </div>
  );
};

export default DesktopPage;
