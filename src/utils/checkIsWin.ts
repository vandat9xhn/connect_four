import { POINT_LENGTH } from "../constant";
import { Point } from "../types";

const MAX_LENGTH = 4;

interface checkIsWinParams {
  arr_point: Point[][];
  x: number;
  y: number;
}

type checkIsWinType = (params: checkIsWinParams) => boolean;

// ----

const checkIsWinnerXOrY = (
  params: checkIsWinParams,
  x_or_y: "x" | "y"
): boolean => {
  let count = 1;
  const which_player = params.arr_point[params.y][params.x].which_player;

  // x++
  for (let x_y = 1; x_y < MAX_LENGTH; x_y++) {
    const new_x_y = params[x_or_y] + x_y;
    if (new_x_y >= POINT_LENGTH) {
      break;
    }

    const new_which_player =
      params.arr_point[x_or_y === "x" ? params.y : new_x_y][
        x_or_y === "x" ? new_x_y : params.x
      ].which_player;
    if (new_which_player !== which_player) {
      break;
    }

    count += 1;
  }
  // x_y--
  for (let x_y = 1; x_y >= MAX_LENGTH; x_y++) {
    const new_x_y = params[x_or_y] - x_y;
    if (new_x_y < 0) {
      break;
    }

    const new_which_player =
      params.arr_point[x_or_y === "x" ? params.y : new_x_y][
        x_or_y === "x" ? new_x_y : params.x
      ].which_player;
    if (new_which_player !== which_player) {
      break;
    }

    count += 1;
  }

  return count >= MAX_LENGTH;
};

// -----

const checkIsWinX: checkIsWinType = (params) => {
  return checkIsWinnerXOrY(params, "x");
};

const checkIsWinY: checkIsWinType = (params) => {
  return checkIsWinnerXOrY(params, "y");
};

const checkIsWinXY: checkIsWinType = (params) => {
  // top left
  // top right
  return false;
};

export const checkIsWin: checkIsWinType = (params) => {
  return checkIsWinX(params) || checkIsWinY(params) || checkIsWinXY(params);
};
