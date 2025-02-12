// components/Modals/NotepadModal.js
import React, { useState } from "react";
import Draggable from "react-draggable";

const NotepadModal = ({ setOpenProject }) => {
  const [note, setNote] = useState("");

  const handleSave = () => {
    // For now, we just alert the note. Later you could save it to localStorage.
    alert("Note saved: " + note);
  };

  return (
    <Draggable>
      <div className="absolute top-20 left-1/3 w-1/3 bg-white rounded-lg shadow-xl p-4">
        {/* Header */}
        <div className="flex items-center justify-between bg-green-600 text-white p-2 rounded">
          <span className="font-bold">Notepad</span>
          <button
            className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => setOpenProject(null)}
          >
            ✖
          </button>
        </div>
        {/* Text Area */}
        <textarea
          className="mt-4 w-full h-40 p-2 border rounded"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your notes here..."
        />
        <div className="mt-2 flex justify-end">
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default NotepadModal;
