
// // pages/DesktopPage.js
// import React, { useState } from "react";
// import BackgroundImg from "../../assets/bg.jpg";
// import folderImage from "../../assets/folder.png";
// import cat from "../../assets/cat.jpg";
// import textFileImage from "../../assets/txtfile.png";
// import DesktopIcons from "../canvas/DesktopIcons";
// import ProjectFolder from "../Modals/ProjectFolder";
// import TextFileModal from "../Modals/TextFileModal.jsx";
// import ChatAppModal from "../Modals/ChatAppModal";
// import ChatAppInfoModal from "../Modals/ChatAppInfoModal";
// import XenonModal from "../Modals/XenonModal";
// import XenonInfoModal from "../Modals/XenonInfoModal";
// import SteganographyModal from "../Modals/SteganographyModal";
// import SteganographyInfoModal from "../Modals/SteganographyInfoModal";
// import TetrisModal from "../Modals/TetrisModal";
// import TetrisInfoModal from "../Modals/TetrisInfoModal";
// import ContactFolder from "../Modals/ContactFolder";         // <-- Import Contacts folder
// import ContactInfoModal from "../Modals/ContactInfoModal"; 
// import CatModal from "../Modals/CatModal";
// import BrowserModal from "../Modals/BrowserModala";

// import Taskbar from "../Taskbar/Taskbar";

// const DesktopPage = ({ onClose }) => {
//   const [icons] = useState([
//     { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
//     { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
//     { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
//     { id: 5, name: "Browser", top: 700, left: 50, img: textFileImage },
//     { id: 4, name: "cat.png", top: 300, left: 400, img: cat },

//   ]);
  
//   const [openFolder, setOpenFolder] = useState(null);
//   const [openProject, setOpenProject] = useState(null);

//   const handleIconDoubleClick = (name) => {
//     if (name === "Projects") setOpenFolder("Projects");
//     if (name === "Browser") setOpenProject("Browser");
//     else if (name === "about.txt") setOpenProject("AboutFile");
//     else if (name === "Contacts") setOpenProject("ContactsFolder");
//     else if (name === "cat.png") setOpenProject("Cat"); 
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
//       {openProject === "Xenon" && (
//         <XenonModal setOpenProject={setOpenProject} />
//       )}
//       {openProject === "Steganography" && (
//         <SteganographyModal setOpenProject={setOpenProject} />
//       )}
//       {openProject === "Tetris" && (
//         <TetrisModal setOpenProject={setOpenProject} />
//       )}

//       {openProject === "ChatAppDescription" && (
//         <ChatAppInfoModal setOpenProject={setOpenProject} />
//       )}
//       {openProject === "XenonDescription" && (
//         <XenonInfoModal setOpenProject={setOpenProject} />
//       )}
//       {openProject === "SteganographyDescription" && (
//         <SteganographyInfoModal setOpenProject={setOpenProject} />
//       )}
//       {openProject === "TetrisDescription" && (
//         <TetrisInfoModal setOpenProject={setOpenProject} />
//       )}
//       {openProject === "Cat" && (
//       <CatModal setOpenProject={setOpenProject} />
//       )}
//       {openProject === "ContactsFolder" && (
//         <ContactFolder setOpenProject={setOpenProject} />
//       )}
//         {openProject === "ContactInfo" && (
//         <ContactInfoModal setOpenProject={setOpenProject} />
//       )}
//       {openProject === "Browser" && <BrowserModal setOpenProject={setOpenProject} />}

//       <Taskbar onClose={onClose} />
//     </div>
//   );
// };

// export default DesktopPage;















// // pages/DesktopPage.js
// import React, { useState } from "react";
// import BackgroundImg from "../../assets/bg.jpg";
// import folderImage from "../../assets/folder.png";
// import cat from "../../assets/cat.jpg";
// import textFileImage from "../../assets/txtfile.png";
// import DesktopIcons from "../canvas/DesktopIcons";
// import ProjectFolder from "../Modals/ProjectFolder";
// import TextFileModal from "../Modals/TextFileModal.jsx";
// import ChatAppModal from "../Modals/ChatAppModal";
// import ChatAppInfoModal from "../Modals/ChatAppInfoModal";
// import XenonModal from "../Modals/XenonModal";
// import XenonInfoModal from "../Modals/XenonInfoModal";
// import SteganographyModal from "../Modals/SteganographyModal";
// import SteganographyInfoModal from "../Modals/SteganographyInfoModal";
// import TetrisModal from "../Modals/TetrisModal";
// import TetrisInfoModal from "../Modals/TetrisInfoModal";
// import CatModal from "../Modals/CatModal";
// import ContactFolder from "../Modals/ContactFolder";
// import ContactInfoModal from "../Modals/ContactInfoModal";
// import BrowserModal from "../Modals/BrowserModal";
// import CalculatorModal from "../Modals/CalculatorModal";
// import Taskbar from "../Taskbar/Taskbar";

// const DesktopPage = ({ onClose }) => {
//   const [icons] = useState([
//     { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
//     { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
//     { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
//     { id: 4, name: "cat.png", top: 400, left: 50, img: cat },
//     { id: 5, name: "Browser", top: 500, left: 50, img: textFileImage } // Use your browser icon image if available
//   ]);
  
//   // No modal open by default.
//   const [openFolder, setOpenFolder] = useState(null);
//   const [openProject, setOpenProject] = useState(null);

//   const handleIconDoubleClick = (name) => {
//     if (name === "Projects") setOpenFolder("Projects");
//     else if (name === "Contacts") setOpenProject("ContactsFolder");
//     else if (name === "about.txt") setOpenProject("AboutFile");
//     else if (name === "cat.png") setOpenProject("Cat");
//     else if (name === "Browser") setOpenProject("Browser");
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
//         <ProjectFolder setOpenFolder={setOpenFolder} setOpenProject={setOpenProject} />
//       )}
//       {openProject === "AboutFile" && <TextFileModal setOpenProject={setOpenProject} />}
//       {openProject === "ChatApp" && <ChatAppModal setOpenProject={setOpenProject} />}
//       {openProject === "Xenon" && <XenonModal setOpenProject={setOpenProject} />}
//       {openProject === "Steganography" && <SteganographyModal setOpenProject={setOpenProject} />}
//       {openProject === "Tetris" && <TetrisModal setOpenProject={setOpenProject} />}
//       {openProject === "ChatAppDescription" && <ChatAppInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "XenonDescription" && <XenonInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "SteganographyDescription" && <SteganographyInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "TetrisDescription" && <TetrisInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "Cat" && <CatModal setOpenProject={setOpenProject} />}
//       {openProject === "ContactsFolder" && <ContactFolder setOpenProject={setOpenProject} />}
//       {openProject === "ContactInfo" && <ContactInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "Browser" && <BrowserModal setOpenProject={setOpenProject} />}
//       {openProject === "Calculator" && <CalculatorModal setOpenProject={setOpenProject} />}
      
//       <Taskbar onClose={onClose} setOpenProject={setOpenProject} />
//     </div>
//   );
// };

// export default DesktopPage;











// // pages/DesktopPage.js
// import React, { useState } from "react";
// import BackgroundImg from "../../assets/bg.jpg";
// import Browser from "../../assets/browser.png";

// import folderImage from "../../assets/folder.png";
// import cat from "../../assets/cat.jpg";
// import textFileImage from "../../assets/txtfile.png";
// import DesktopIcons from "../canvas/DesktopIcons";
// import ProjectFolder from "../Modals/ProjectFolder";
// import TextFileModal from "../Modals/TextFileModal.jsx";
// import ChatAppModal from "../Modals/ChatAppModal";
// import ChatAppInfoModal from "../Modals/ChatAppInfoModal";
// import XenonModal from "../Modals/XenonModal";
// import XenonInfoModal from "../Modals/XenonInfoModal";
// import SteganographyModal from "../Modals/SteganographyModal";
// import SteganographyInfoModal from "../Modals/SteganographyInfoModal";
// import TetrisModal from "../Modals/TetrisModal";
// import TetrisInfoModal from "../Modals/TetrisInfoModal";
// import CatModal from "../Modals/CatModal";
// import ContactFolder from "../Modals/ContactFolder";
// import ContactInfoModal from "../Modals/ContactInfoModal";
// import BrowserModal from "../Modals/BrowserModal";
// import CalculatorModal from "../Modals/CalculatorModal";
// import CalendarModal from "../Modals/CalendarModal";
// import TicTacToeModal from "../Modals/TicTacToeModal";

// import Taskbar from "../Taskbar/Taskbar";

// const DesktopPage = ({ onClose }) => {
//   const [icons] = useState([
//     { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
//     { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
//     { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
//     { id: 4, name: "cat.png", top: 400, left: 50, img: cat },
//     { id: 5, name: "Browser", top: 500, left: 50, img: Browser } // Use your preferred browser icon image
//   ]);
  
//   // No modal open by default.
//   const [openFolder, setOpenFolder] = useState(null);
//   const [openProject, setOpenProject] = useState(null);

//   const handleIconDoubleClick = (name) => {
//     if (name === "Projects") setOpenFolder("Projects");
//     else if (name === "Contacts") setOpenProject("ContactsFolder");
//     else if (name === "about.txt") setOpenProject("AboutFile");
//     else if (name === "cat.png") setOpenProject("Cat");
//     else if (name === "Browser") setOpenProject("Browser");
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
//         <ProjectFolder setOpenFolder={setOpenFolder} setOpenProject={setOpenProject} />
//       )}
//       {openProject === "AboutFile" && <TextFileModal setOpenProject={setOpenProject} />}
//       {openProject === "ChatApp" && <ChatAppModal setOpenProject={setOpenProject} />}
//       {openProject === "Xenon" && <XenonModal setOpenProject={setOpenProject} />}
//       {openProject === "Steganography" && <SteganographyModal setOpenProject={setOpenProject} />}
//       {openProject === "Tetris" && <TetrisModal setOpenProject={setOpenProject} />}
//       {openProject === "ChatAppDescription" && <ChatAppInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "XenonDescription" && <XenonInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "SteganographyDescription" && <SteganographyInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "TetrisDescription" && <TetrisInfoModal setOpenProject={setOpenProject} />}
//       {openProject === "Cat" && <CatModal setOpenProject={setOpenProject} />}
//       {openProject === "ContactsFolder" && <ContactFolder setOpenProject={setOpenProject} />}
//       {/* {openProject === "ContactInfo" && <ContactInfoModal setOpenProject={setOpenProject} />} */}
//       {openProject === "ContactInfo" && (
//   <ContactInfoModal setOpenProject={setOpenProject} />
// )}
//       {openProject === "Browser" && <BrowserModal setOpenProject={setOpenProject} />}
//       {openProject === "Calculator" && <CalculatorModal setOpenProject={setOpenProject} />}
//       {openProject === "Calendar" && <CalendarModal setOpenProject={setOpenProject} />}
//       {openProject === "TicTacToe" && <TicTacToeModal setOpenProject={setOpenProject} />}
      
//       <Taskbar onClose={onClose} setOpenProject={setOpenProject} />
//     </div>
//   );
// };

// export default DesktopPage;









// pages/DesktopPage.js
import React, { useState } from "react";
import BackgroundImg from "../../assets/bg.jpg";
import Browser from "../../assets/browser.png";
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
import CatModal from "../Modals/CatModal";
import ContactFolder from "../Modals/ContactFolder";
import ContactInfoModal from "../Modals/ContactInfoModal";
import BrowserModal from "../Modals/BrowserModal";
import CalculatorModal from "../Modals/CalculatorModal";
import CalendarModal from "../Modals/CalendarModal";
import TicTacToeModal from "../Modals/TicTacToeModal";
import AboutModal from "../Modals/AboutModal";
import Taskbar from "../Taskbar/Taskbar";
import DesktopContextMenu from "../canvas/DesktopContextMenu";
import WallpaperModal from "../Modals/WallpaperModal";
// import Notification from "../components/Notification";
import NotepadModal from "../Modals/NotepadModal";
import WeatherWidget from "../canvas/WeatherWidget";
import Notification from "../canvas/Notification";


const DesktopPage = ({ onClose }) => {
  const [icons] = useState([
    { id: 1, name: "Projects", top: 100, left: 50, img: folderImage },
    { id: 2, name: "Contacts", top: 200, left: 50, img: folderImage },
    { id: 3, name: "about.txt", top: 300, left: 50, img: textFileImage },
    { id: 4, name: "cat.png", top: 400, left: 50, img: cat },
    { id: 5, name: "Browser", top: 500, left: 50, img: Browser }
  ]);
  
  // Modal and UI states
  const [openFolder, setOpenFolder] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [wallpaper, setWallpaper] = useState(BackgroundImg);
  const [showWallpaperModal, setShowWallpaperModal] = useState(false);

  const handleIconDoubleClick = (name) => {
    if (name === "Projects") setOpenFolder("Projects");
    else if (name === "Contacts") setOpenProject("ContactsFolder");
    else if (name === "about.txt") setOpenProject("AboutFile");
    else if (name === "cat.png") setOpenProject("Cat");
    else if (name === "Browser") setOpenProject("Browser");
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex flex-col"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY });
      }}
      onClick={() => setContextMenu(null)}
    >
      <DesktopIcons icons={icons} onDoubleClick={handleIconDoubleClick} />
      
      {openFolder === "Projects" && (
        <ProjectFolder setOpenFolder={setOpenFolder} setOpenProject={setOpenProject} />
      )}
      {openProject === "AboutFile" && <TextFileModal setOpenProject={setOpenProject} />}
      {openProject === "ChatApp" && <ChatAppModal setOpenProject={setOpenProject} />}
      {openProject === "Xenon" && <XenonModal setOpenProject={setOpenProject} />}
      {openProject === "Steganography" && <SteganographyModal setOpenProject={setOpenProject} />}
      {openProject === "Tetris" && <TetrisModal setOpenProject={setOpenProject} />}
      {openProject === "ChatAppDescription" && <ChatAppInfoModal setOpenProject={setOpenProject} />}
      {openProject === "XenonDescription" && <XenonInfoModal setOpenProject={setOpenProject} />}
      {openProject === "SteganographyDescription" && <SteganographyInfoModal setOpenProject={setOpenProject} />}
      {openProject === "TetrisDescription" && <TetrisInfoModal setOpenProject={setOpenProject} />}
      {openProject === "Cat" && <CatModal setOpenProject={setOpenProject} />}
      {openProject === "ContactsFolder" && <ContactFolder setOpenProject={setOpenProject} />}
      {openProject === "ContactInfo" && <ContactInfoModal setOpenProject={setOpenProject} />}
      {openProject === "Browser" && <BrowserModal setOpenProject={setOpenProject} />}
      {openProject === "Calculator" && <CalculatorModal setOpenProject={setOpenProject} />}
      {openProject === "Calendar" && <CalendarModal setOpenProject={setOpenProject} />}
      {openProject === "TicTacToe" && <TicTacToeModal setOpenProject={setOpenProject} />}
      {openProject === "About" && <AboutModal setOpenProject={setOpenProject} />}
      {openProject === "Notepad" && <NotepadModal setOpenProject={setOpenProject} />}
      {<Notification message="Welcome to your custom desktop!" duration={4000} />}
      
      {showWallpaperModal && (
        <WallpaperModal
          onClose={() => setShowWallpaperModal(false)}
          onSelect={(selected) => setWallpaper(selected)}
        />
      )}
      
      {contextMenu && (
        <DesktopContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
          onChangeWallpaper={() => setShowWallpaperModal(true)}
          onAbout={() => setOpenProject("About")}
        />
      )}
      
      <Taskbar onClose={onClose} setOpenProject={setOpenProject} />
    </div>
  );
};

export default DesktopPage;
