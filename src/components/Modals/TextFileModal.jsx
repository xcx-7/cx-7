// components/Modals/TextFileModal.js
import React from "react";
import Draggable from "react-draggable";

const TextFileModal = ({ setOpenProject }) => {
  return (
    <>
    <Draggable>
      {/* <div className="absolute top-1/4 left-1/4 bg-gray-900 p-4 rounded-lg shadow-lg w-96 h-72">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-white font-semibold">about.txt</span>
          <button className="text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600" onClick={() => setOpenProject(null)}>✖</button>
        </div>
        <div className="mt-4 text-white text-sm">
        Heyyy, this is me—CX-7.
I study business, but honestly, I’m more into tech, investments, and figuring things out on my own terms. Big fan of Robert Kiyosaki. I learn what interests me—whether it's coding, finance, or just random deep dives into the internet.

I like experimenting with Unity, trying to make games... until the errors and bugs make me rage-quit. Maybe someday, I’ll actually create a game worth playing. For now, I mostly build and deploy websites using the MERN stack, Kubernetes, Jenkins, and NGINX.

I also explore the dark web and chat with random people there—just for fun (or maybe curiosity is my biggest flaw). And yeah, I’m a total introvert, so this is probably the most you’ll hear from me.

Anyway, that’s me. If you’re here to check out my work, feel free to explore. Maybe we’ll build something cool together. </div>
      </div> */}
            <div className="absolute top-1/4 left-1/3 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl w-96">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <span className="text-xl font-bold text-white">about.txt</span>
          <button
            onClick={() => setOpenProject(null)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            ✖
          </button>
        </div>
        {/* Content */}
        <div className="mt-4 text-white text-sm">
          <h1>Heyyy, this is me—CX-7.</h1>
          
I study business, but honestly, I’m more into tech, investments, and figuring things out on my own terms. Big fan of Robert Kiyosaki. I learn what interests me—whether it's coding, finance, or just random deep dives into the internet.

I like experimenting with Unity, trying to make games... until the errors and bugs make me rage-quit. Maybe someday, I’ll actually create a game worth playing. For now, I mostly build and deploy websites using the MERN stack, Kubernetes, Jenkins, and NGINX.

I also explore the dark web and chat with random people there—just for fun (or maybe curiosity is my biggest flaw). And yeah, I’m a total introvert, so this is probably the most you’ll hear from me.

Anyway, that’s me. If you’re here to check out my work, feel free to explore. Maybe we’ll build something cool together.
        </div>
      </div>
    </Draggable>
    </>

    
  );
};

export default TextFileModal;