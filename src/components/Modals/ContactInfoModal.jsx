// components/Modals/ContactInfoModal.js
import React from "react";
import Draggable from "react-draggable";

const ContactInfoModal = ({ setOpenProject }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-gray-900 p-4 rounded-lg shadow-lg w-96 h-72">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">Info.txt</span>
          <button
            className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
            onClick={() => setOpenProject(null)}
          >
            ✖
          </button>
        </div>
        <div className="mt-4 text-white text-sm">
          You can contact me at: <br />
          Email: your.email@example.com <br />
          Phone: (123) 456-7890 <br />
          Alternatively, reach out via any of the social media links provided.
        </div>
      </div>
    </Draggable>
  );
};

export default ContactInfoModal;
