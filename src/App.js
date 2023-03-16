import "./App.css";
import { Board } from "./components/Board.jsx";
import { ScoreBoard } from "./components/ScoreBoard.jsx";
import { ResetGame } from "./components/ResetGame";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState(
    localStorage.getItem("scores")
      ? JSON.parse(localStorage.getItem("scores"))
      : {
          xScore: 0,
          oScore: 0,
        }
  );
  const [gameOver, setGameOver] = useState(false);
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  localStorage.setItem("scores", JSON.stringify(scores));

  const handleBoxClick = (idx) => {
    const updatedBoard = board.map((value, i) => {
      if (i === idx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    if (!updatedBoard.includes(null)) {
      resetBoard()
      return 
    }


    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "X") {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      } else {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };


  return (
    <div className="App">
      <ScoreBoard
        scores={JSON.parse(localStorage.getItem("scores"))}
        xPlaying={xPlaying}
      />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      {gameOver && <ResetGame scores={scores} resetBoard={resetBoard} />}
    </div>
  );
}

export default App;
