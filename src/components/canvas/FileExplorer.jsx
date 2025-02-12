// components/FileExplorer.js
import React from "react";
import Draggable from "react-draggable";

const files = [
  { id: 1, name: "Document.txt", type: "file" },
  { id: 2, name: "Photos", type: "folder" },
  { id: 3, name: "Music", type: "folder" },
];

const FileExplorer = ({ setOpenProject }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-lg shadow-xl w-96 h-80">
        <div className="flex justify-between items-center bg-blue-600 text-white p-2 rounded">
          <span className="font-bold">File Explorer</span>
          <button onClick={() => setOpenProject(null)} className="bg-red-500 px-2 py-1 rounded hover:bg-red-600">✖</button>
        </div>
        <ul className="mt-4">
          {files.map((file) => (
            <li key={file.id} className="p-1 border-b">
              {file.type === "folder" ? "📁" : "📄"} {file.name}
            </li>
          ))}
        </ul>
      </div>
    </Draggable>
  );
};

export default FileExplorer;
