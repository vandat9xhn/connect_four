import * as React from "react";

import "./Game.scss";

import Points from "../points/Points";

//
export interface GameProps {}

//
function Game({}: GameProps) {
  //
  return (
    <div>
      <div></div>

      <div className="Game_main">
        <div></div>

        <div className="Game_points">
          <Points />
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Game;
