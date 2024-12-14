import React, { useState } from "react";
import "./Tictactoe.css";

export default function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 board
  const [isXNext, setIsXNext] = useState(true); // Track who's next
  const [winner, setWinner] = useState(null); // Track the winner
  const [winningPattern, setWinningPattern] = useState([]); // Track winning pattern

  // Check if there's a winner
  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal top-left to bottom-right
      [2, 4, 6], // Diagonal top-right to bottom-left
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningPattern(combination); // Save the winning pattern
        return board[a]; // Return the winner ('X' or 'O')
      }
    }
    return null;
  };

  // Handle a square click
  const handleClick = (index) => {
    if (board[index] || winner) return; // Ignore if square is filled or game is over

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(!isXNext); // Switch turns
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningPattern([]);
  };

  // Determine the class for each square
  const getSquareClass = (index) => {
    if (winningPattern.includes(index)) {
      // Add strike classes based on the winning pattern
      if (winningPattern[0] === 0 && winningPattern[1] === 1 && winningPattern[2] === 2)
        return "square strike-horizontal";
      if (winningPattern[0] === 3 && winningPattern[1] === 4 && winningPattern[2] === 5)
        return "square strike-horizontal";
      if (winningPattern[0] === 6 && winningPattern[1] === 7 && winningPattern[2] === 8)
        return "square strike-horizontal";
      if (winningPattern[0] === 0 && winningPattern[1] === 3 && winningPattern[2] === 6)
        return "square strike-vertical";
      if (winningPattern[0] === 1 && winningPattern[1] === 4 && winningPattern[2] === 7)
        return "square strike-vertical";
      if (winningPattern[0] === 2 && winningPattern[1] === 5 && winningPattern[2] === 8)
        return "square strike-vertical";
      if (winningPattern[0] === 0 && winningPattern[1] === 4 && winningPattern[2] === 8)
        return "square strike-diagonal-tl-br";
      if (winningPattern[0] === 2 && winningPattern[1] === 4 && winningPattern[2] === 6)
        return "square strike-diagonal-tr-bl";
    }
    return "square"; // Default class
  };

  return (
    <div className="tic-tac-toe text-center">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <div
            key={index}
            className={getSquareClass(index)}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner && <h2 className="winner">Winner: {winner}</h2>}
      {!winner && !board.includes(null) && (
        <h2 className="winner">It's a Draw!</h2>
      )}
      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}
