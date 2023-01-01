import * as React from "react";

import { handleChooseType, Point } from "../../../types";

import PointItemInner from "./inner/PointItemInner";

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

      <div className="PointItem_inner">
        <PointItemInner point={point} />
      </div>
    </div>
  );
}

export default PointItem;
