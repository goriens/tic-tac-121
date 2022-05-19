import React, { useState } from "react";

export const GameOver = ({ restartGame, player, draw }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="game-over">
      {!draw && <span>{player ? "O Win" : "X Win"}</span>}
      {draw && <span>DRAW GAME 😜 </span>}
      <button className="btn" onClick={restartGame}>
        RESTART
      </button>
    </div>
  );
};
