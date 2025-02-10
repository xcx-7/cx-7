// components/Modals/TextFileModal.js
import React from "react";
import Draggable from "react-draggable";

const TextFileModal = ({ setOpenProject }) => {
  return (
    <>
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-gray-900 p-4 rounded-lg shadow-lg w-96 h-72">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">about.txt</span>
          <button className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600" onClick={() => setOpenProject(null)}>✖</button>
        </div>
        <div className="mt-4 text-white text-sm">This is a short description about me Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit illum. Pariatur cupiditate deleniti corrupti impedit, quae alias sequi ipsum esse exercitationem ab, maxime accusamus? In quasi eum cupiditate possimus! </div>
      </div>
    </Draggable>
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-gray-900 p-4 rounded-lg shadow-lg w-96 h-72">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">about.txt</span>
          <button className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600" onClick={() => setOpenProject(null)}>✖</button>
        </div>
        <div className="mt-4 text-white text-sm">This is a short description about me Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sit illum. Pariatur cupiditate deleniti corrupti impedit, quae alias sequi ipsum esse exercitationem ab, maxime accusamus? In quasi eum cupiditate possimus! </div>
      </div>
    </Draggable>
    </>

    
  );
};

export default TextFileModal;