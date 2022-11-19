import * as React from "react";

import { contextGame } from "../../context/game/ContextGame";

import "./Points.scss";

import PointItem from "./item/PointItem";

//
export interface PointsProps {}

//
function Points({}: PointsProps) {
  //
  const { arr_point, handleChoose } = React.useContext(contextGame);

  //
  return (
    <div className="Points">
      <div className="Points_contain">
        {arr_point.map((points, y) => (
          <div key={y} className="Points_y">
            {points.map((point, x) => (
              <div
                key={x}
                className="Points_item"
                style={{ width: `${100 / points.length}%` }}
              >
                <div className="Points_item_contain">
                  <div className="Points_point">
                    <PointItem
                      point={point}
                      x={x}
                      y={y}
                      handleChoose={handleChoose}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Points;
