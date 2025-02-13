// components/Modals/FileExplorer.js
import React, { useState } from "react";
import Draggable from "react-draggable";

// A simple static file structure for demonstration
const fileStructure = {
  "C:": {
    "Documents": {
      "Resume.docx": "file",
      "Budget.xlsx": "file",
    },
    "Pictures": {
      "Vacation": {
        "Beach.png": "file",
        "Mountains.png": "file"
      },
      "Profile.jpg": "file"
    },
    "Programs": {
      "app.exe": "file",
      "setup.msi": "file"
    }
  }
};

const FileExplorer = ({ setOpenProject }) => {
  // currentPath holds an array of folder names representing our navigation
  const [currentPath, setCurrentPath] = useState(["C:"]);

  // Helper to retrieve the current directory's content based on currentPath
  const getCurrentDirectory = () => {
    let currentDir = fileStructure;
    currentPath.forEach((folder) => {
      currentDir = currentDir[folder];
    });
    return currentDir;
  };

  const currentDir = getCurrentDirectory();

  // Navigate back one level (if possible)
  const goBack = () => {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, currentPath.length - 1));
    }
  };

  // Open a folder by adding it to currentPath
  const openFolder = (folderName) => {
    setCurrentPath([...currentPath, folderName]);
  };

  return (
    <Draggable cancel=".draggable-ignore">
      <div className="absolute top-10 left-1/4 bg-white p-4 rounded-lg shadow-xl w-3/4 h-3/4 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center bg-blue-600 text-white p-2 rounded">
          <div className="flex items-center">
            <button
              onClick={goBack}
              className="bg-gray-400 px-2 py-1 mr-2 rounded hover:bg-gray-500"
              disabled={currentPath.length <= 1}
            >
              Back
            </button>
            <span>File Explorer - {currentPath.join("\\")}</span>
          </div>
          <button
            onClick={() => setOpenProject(null)}
            className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
          >
            ✖
          </button>
        </div>
        {/* Main Content */}
        <div className="mt-4 grid grid-cols-4 gap-4">
          {Object.entries(currentDir).map(([name, typeOrContent]) => {
            const isFolder = typeof typeOrContent === "object";
            return (
              <div
                key={name}
                className="flex flex-col items-center cursor-pointer hover:bg-gray-200 p-2 rounded"
                onDoubleClick={() => {
                  if (isFolder) {
                    openFolder(name);
                  } else {
                    alert(`Opening file: ${name}`);
                  }
                }}
              >
                <div className="text-4xl">
                  {isFolder ? "📁" : "📄"}
                </div>
                <span className="text-sm">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Draggable>
  );
};

export default FileExplorer;
