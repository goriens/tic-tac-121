import React from "react";
import { useState } from "react";
import { GameOver } from "./GameOver";
import { Square } from "./Square";

const INITIAL = "";
const X_PLAYER = "❎";
const O_PLAYER = "🟢";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const Game = () => {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinish, setGameFinish] = useState(false);
  const [draw, setDraw] = useState(false);
  const [history, setHistory] = useState([]);

  function restartGame() {
    setGrid(Array(9).fill(INITIAL));
    setGameFinish(false);
    setDraw(false);
  }
  function isGameOver() {
    if (!gameFinish) {
      //X win ??
      for (var i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER
        ) {
          setGameFinish(true);
          //  console.log("X WOn");
          return;
        }
      }
      for (var i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER
        ) {
          setGameFinish(true);
          //  console.log("O WOn");
          return;
        }
      }
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGameFinish(true);
        //console.log("drav");
      }
    }
  }
  isGameOver();
  const handleClick = (id) => {
    //console.log("inside");
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  };

  return (
    <div>
      {gameFinish && (
        <GameOver restartGame={restartGame} player={player} draw={draw} />
      )}
      <Square grid={grid} handleClick={handleClick} />
    </div>
  );
};
