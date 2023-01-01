import * as React from "react";

import { COLOR_POINT } from "../../../../data/point";
import { Point } from "../../../../types";

import "./PointItemInner.scss";

//
export interface PointItemInnerProps {
  point: Point;
}

//
function PointItemInner({ point }: PointItemInnerProps) {
  //
  return (
    <div
      className={`PointItemInner ${
        point.which_player ? "PointItemInner-chosen" : ""
      }`}
      style={{
        backgroundColor:
          point.which_player === ""
            ? undefined
            : COLOR_POINT[point.which_player],
      }}
    ></div>
  );
}

export default PointItemInner;
