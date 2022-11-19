import * as React from "react";
import { COLOR_POINT } from "../../../data/point";

import { handleChooseType, Point } from "../../../types";

import "./PointItem.scss";

//
export interface PointItemProps {
  point: Point;
  x: number;
  y: number;
  handleChoose: handleChooseType;
}

//
function PointItem({ point, x, y, handleChoose }: PointItemProps) {
  //
  const onClick = () => {
    handleChoose({ x, y });
  };

  //
  return (
    <div
      className="PointItem"
      onClick={onClick}
      style={{ pointerEvents: point.which_player ? "none" : undefined }}
    >
      <div className="PointItem_outer"></div>

      <div
        className="PointItem_inner"
        style={{
          backgroundColor:
            point.which_player === ""
              ? undefined
              : COLOR_POINT[point.which_player],
        }}
      ></div>
    </div>
  );
}

export default PointItem;
