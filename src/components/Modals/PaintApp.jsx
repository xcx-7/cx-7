// components/Modals/PaintApp.js
import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";

const PaintApp = ({ setOpenProject }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    setIsDrawing(true);
    draw(e);
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Get canvas position
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  return (
    <Draggable>
      <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-lg shadow-xl">
        <div className="flex justify-between items-center bg-purple-600 text-white p-2 rounded">
          <span className="font-bold">Paint</span>
          <button onClick={() => setOpenProject(null)} className="bg-red-500 px-2 py-1 rounded hover:bg-red-600">✖</button>
        </div>
        <canvas
          ref={canvasRef}
          width={500}
          height={400}
          className="border mt-2"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
        />
      </div>
    </Draggable>
  );
};

export default PaintApp;
