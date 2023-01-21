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

    if (new_x_y > POINT_LENGTH) {
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
  for (let x_y = 1; x_y < MAX_LENGTH; x_y++) {
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

  // console.log(x_or_y, count);

  return count >= MAX_LENGTH;
};

// -----

const checkIsWinX: checkIsWinType = (params) => {
  return checkIsWinnerXOrY(params, "x");
};

const checkIsWinY: checkIsWinType = (params) => {
  return checkIsWinnerXOrY(params, "y");
};

const checkIsWinXYLeft: checkIsWinType = (params) => {
  let count = 1;
  const which_player = params.arr_point[params.y][params.x].which_player;

  //
  for (let i = 1; i < MAX_LENGTH; i++) {
    const new_x = params.x - i;
    const new_y = params.y - i;
    if (new_x < 0 || new_y < 0) {
      break;
    }

    const new_which_player = params.arr_point[new_y][new_x].which_player;
    if (new_which_player !== which_player) {
      break;
    }

    count += 1;
  }
  for (let i = 1; i < MAX_LENGTH; i++) {
    const new_x = params.x + i;
    const new_y = params.y + i;
    if (new_x > POINT_LENGTH || new_y > POINT_LENGTH) {
      break;
    }

    const new_which_player = params.arr_point[new_y][new_x].which_player;
    if (new_which_player !== which_player) {
      break;
    }

    count += 1;
  }

  return count >= MAX_LENGTH;
};

const checkIsWinXYRight: checkIsWinType = (params) => {
  let count = 1;
  const which_player = params.arr_point[params.y][params.x].which_player;

  //
  for (let i = 1; i < MAX_LENGTH; i++) {
    const new_x = params.x - i;
    const new_y = params.y + i;
    if (new_x < 0 || new_y > POINT_LENGTH) {
      break;
    }

    const new_which_player = params.arr_point[new_y][new_x].which_player;
    if (new_which_player !== which_player) {
      break;
    }

    count += 1;
  }
  for (let i = 1; i < MAX_LENGTH; i++) {
    const new_x = params.x + i;
    const new_y = params.y - i;
    if (new_x > POINT_LENGTH || new_y < 0) {
      break;
    }

    const new_which_player = params.arr_point[new_y][new_x].which_player;
    if (new_which_player !== which_player) {
      break;
    }

    count += 1;
  }

  return count >= MAX_LENGTH;
};

const checkIsWinXY: checkIsWinType = (params) => {
  return checkIsWinXYLeft(params) || checkIsWinXYRight(params);
};

export const checkIsWin: checkIsWinType = (params) => {
  return checkIsWinX(params) || checkIsWinY(params) || checkIsWinXY(params);
};
