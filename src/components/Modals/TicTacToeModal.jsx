// components/Modals/TicTacToeModal.js
import React, { useState } from "react";

// Helper to determine if someone has won
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const TicTacToeModal = ({ setOpenProject }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="fixed top-20 left-1/3 w-1/3 bg-grey rounded-lg shadow-xl p-4">
      <div className="flex items-center justify-between bg-blue-600 text-white p-2 rounded">
        <span className="font-bold">Tic Tac Toe</span>
        <button
          className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
          onClick={() => setOpenProject(null)}
        >
          ✖
        </button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1">
        {squares.map((value, i) => (
          <button
            key={i}
            className="w-full h-16 border flex items-center justify-center text-2xl"
            onClick={() => handleClick(i)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="mt-4 text-center">
        {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
      </div>
      <div className="mt-2 flex justify-center">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={resetGame}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToeModal;
