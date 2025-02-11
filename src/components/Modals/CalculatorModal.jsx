// components/Modals/CalculatorModal.js
import React, { useState } from "react";

const CalculatorModal = ({ setOpenProject }) => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setExpression("");
    } else if (value === "=") {
      try {
        const result = eval(expression); // eval is used only for demo purposes
        setExpression(String(result));
      } catch (err) {
        setExpression("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="fixed top-20 left-1/3 w-1/3 h-1/2 bg-gray-900 text-white p-4 rounded-lg shadow-xl">
      <div className="flex items-center bg-blue-600 p-2 rounded">
        <span className="font-bold flex-grow">Calculator</span>
        <button
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          onClick={() => setOpenProject(null)}
        >
          ✖
        </button>
      </div>
      <div className="mt-4 bg-gray-700 p-2 rounded text-right text-xl">
        {expression || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {[
          "7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "C", "+"
        ].map((item, index) => (
          <button
            key={index}
            className="bg-gray-800 p-2 rounded hover:bg-gray-700"
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </button>
        ))}
        <button
          className="col-span-4 bg-blue-600 p-2 rounded hover:bg-blue-700"
          onClick={() => handleButtonClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default CalculatorModal;
