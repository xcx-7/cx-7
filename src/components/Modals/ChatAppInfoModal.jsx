
import React from "react";
import Draggable from "react-draggable";

const ChatAppInfoModal = ({ setOpenProject }) => {
  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl w-96">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <span className="text-xl font-bold text-white">Info.txt - Chat App</span>
          <button
            onClick={() => setOpenProject(null)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            ✖
          </button>
        </div>
        {/* Content */}
        <div className="mt-4 text-white text-sm">
          This Chat App is built using the MERN stack. It features real-time messaging, socket connections, and an intuitive user interface.
        </div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nam facere delectus rerum quidem. Perferendis, asperiores cumque. Est consequuntur harum sunt, qui consectetur commodi repudiandae impedit nemo, tempore optio veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur impedit quam nisi maiores ab obcaecati ratione laboriosam iusto error qui magni, eius fugiat veritatis voluptate! Incidunt dignissimos mollitia quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magni maxime iusto non deleniti magnam iste, neque quo impedit in tempora quod doloremque doloribus nostrum rem voluptas, alias voluptatem totam!
      </div>
    </Draggable>
  );
};

export default ChatAppInfoModal;
