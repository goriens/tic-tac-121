import React from "react";

export const Square = ({ grid, handleClick }) => {
  return (
    <div>
      <div className="board">
        {grid.map((item, index) => {
          if (item === "") {
            return (
              <div
                className="square"
                key={index}
                onClick={() => handleClick(index)}
              >
                {item}
              </div>
            );
          } else {
            return (
              <div className="square" key={index}>
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
