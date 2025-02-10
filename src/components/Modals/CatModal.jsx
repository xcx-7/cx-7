// components/Modals/CatModal.js
import React from "react";
import Draggable from "react-draggable";
import catImage from "../../assets/cat.jpg"; // Ensure this path is correct

const CatModal = ({ setOpenProject }) => {
  return (
    <Draggable>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
        <div className="relative">
          <img
            src={catImage}
            alt="Cat"
            className="max-w-full max-h-screen rounded shadow-lg"
          />
          <button
            className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => setOpenProject(null)}
          >
            ✖
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default CatModal;
