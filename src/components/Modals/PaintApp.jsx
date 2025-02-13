// // components/Modals/PaintApp.js
// import React, { useRef, useEffect, useState } from "react";
// import Draggable from "react-draggable";

// const PaintApp = ({ setOpenProject }) => {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);

//   const startDrawing = (e) => {
//     setIsDrawing(true);
//     draw(e);
//   };

//   const endDrawing = () => {
//     setIsDrawing(false);
//     const ctx = canvasRef.current.getContext("2d");
//     ctx.beginPath();
//   };

//   const draw = (e) => {
//     if (!isDrawing) return;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     // Get canvas position
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     ctx.lineWidth = 2;
//     ctx.lineCap = "round";
//     ctx.strokeStyle = "black";

//     ctx.lineTo(x, y);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//   };

//   return (
//     <Draggable>
//       <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-lg shadow-xl">
//         <div className="flex justify-between items-center bg-purple-600 text-white p-2 rounded">
//           <span className="font-bold">Paint</span>
//           <button onClick={() => setOpenProject(null)} className="bg-red-500 px-2 py-1 rounded hover:bg-red-600">✖</button>
//         </div>
//         <canvas
//           ref={canvasRef}
//           width={500}
//           height={400}
//           className="border mt-2"
//           onMouseDown={startDrawing}
//           onMouseUp={endDrawing}
//           onMouseMove={draw}
//         />
//       </div>
//     </Draggable>
//   );
// };

// export default PaintApp;






















// // components/Modals/PaintApp.js
// import React, { useRef, useState } from "react";
// import Draggable from "react-draggable";

// const PaintApp = ({ setOpenProject }) => {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [strokeColor, setStrokeColor] = useState("black");
//   const [lineWidth, setLineWidth] = useState(2);

//   // Start drawing when mouse is pressed
//   const startDrawing = (e) => {
//     setIsDrawing(true);
//     draw(e); // Initial drawing point
//   };

//   // Stop drawing when mouse is released
//   const endDrawing = () => {
//     setIsDrawing(false);
//     const ctx = canvasRef.current.getContext("2d");
//     ctx.beginPath();
//   };

//   // Draw on the canvas as the mouse moves
//   const draw = (e) => {
//     if (!isDrawing) return;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     ctx.lineWidth = lineWidth;
//     ctx.lineCap = "round";
//     ctx.strokeStyle = strokeColor;

//     ctx.lineTo(x, y);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//   };

//   // Clear the canvas
//   const clearCanvas = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   };

//   return (
//     <Draggable cancel=".draggable-ignore">
//       <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-lg shadow-xl w-11/12 max-w-2xl">
//         {/* Header with title and buttons */}
//         <div className="flex justify-between items-center bg-purple-600 text-white p-2 rounded-t">
//           <span className="font-bold">Paint</span>
//           <div className="flex space-x-2">
//             <button
//               onClick={clearCanvas}
//               className="bg-blue-500 px-2 py-1 rounded hover:bg-blue-600"
//             >
//               Clear
//             </button>
//             <button
//               onClick={() => setOpenProject(null)}
//               className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
//             >
//               ✖
//             </button>
//           </div>
//         </div>

//         {/* Toolbar for controls */}
//         <div className="p-2">
//           <div className="flex space-x-4 mb-2">
//             <div>
//               <label className="block text-sm">Color:</label>
//               <input
//                 type="color"
//                 value={strokeColor}
//                 onChange={(e) => setStrokeColor(e.target.value)}
//                 className="border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm">Line Width:</label>
//               <input
//                 type="number"
//                 value={lineWidth}
//                 onChange={(e) => setLineWidth(Number(e.target.value))}
//                 className="border rounded w-16"
//                 min="1"
//                 max="10"
//               />
//             </div>
//           </div>
//           {/* Canvas */}
//           <canvas
//             ref={canvasRef}
//             width={800}
//             height={500}
//             className="border rounded w-full"
//             onMouseDown={startDrawing}
//             onMouseUp={endDrawing}
//             onMouseMove={draw}
//           />
//         </div>
//       </div>
//     </Draggable>
//   );
// };

// export default PaintApp;






// components/Modals/PaintApp.js
import React, { useRef, useState } from "react";

const PaintApp = ({ setOpenProject }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeColor, setStrokeColor] = useState("black");
  const [lineWidth, setLineWidth] = useState(2);

  // Start drawing when mouse is pressed
  const startDrawing = (e) => {
    setIsDrawing(true);
    draw(e); // Capture the initial point
  };

  // Stop drawing when mouse is released
  const endDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
  };

  // Draw on the canvas as the mouse moves
  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = strokeColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  // Clear the canvas
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-lg shadow-xl w-11/12 max-w-2xl">
      {/* Header with title and buttons */}
      <div className="flex justify-between items-center bg-purple-600 text-white p-2 rounded-t">
        <span className="font-bold">Paint</span>
        <div className="flex space-x-2">
          <button
            onClick={clearCanvas}
            className="bg-blue-500 px-2 py-1 rounded hover:bg-blue-600"
          >
            Clear
          </button>
          <button
            onClick={() => setOpenProject(null)}
            className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
          >
            ✖
          </button>
        </div>
      </div>

      {/* Toolbar for controls */}
      <div className="p-2">
        <div className="flex space-x-4 mb-2">
          <div>
            <label className="block text-sm">Color:</label>
            <input
              type="color"
              value={strokeColor}
              onChange={(e) => setStrokeColor(e.target.value)}
              className="border rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Line Width:</label>
            <input
              type="number"
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e.target.value))}
              className="border rounded w-16"
              min="1"
              max="10"
            />
          </div>
        </div>
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="border rounded w-full"
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
        />
      </div>
    </div>
  );
};

export default PaintApp;
