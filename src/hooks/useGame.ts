import { useEffect, useState } from "react";
import { POINT_LENGTH } from "../constant";

import { GameObj, handleChooseType } from "../types";
import { checkIsWin } from "../utils/checkIsWin";

const getInitialArrPoint = (): GameObj["arr_point"] => {
  const arr_point: GameObj["arr_point"] = [];
  // make rows; x, y from 0 -> 6
  for (let y = 0; y < POINT_LENGTH; y++) {
    arr_point.push([]);
    for (let x = 0; x < POINT_LENGTH; x++) {
      arr_point[y].push({ which_player: "" });
    }
  }

  return arr_point;
};

//
export function useGame() {
  //
  const [state_obj, setStateObj] = useState<GameObj>(() => {
    const new_arr_point = getInitialArrPoint();

    return {
      arr_point: new_arr_point,
      cur_player: "player1",
      c_state: "waiting",
      winner: "",
    };
  });

  //
  useEffect(() => {
    // const new_arr_point = getInitialArrPoint();
    // setStateObj((state_obj) => {
    //   return {
    //     ...state_obj,
    //     arr_point: new_arr_point,
    //   };
    // });
  }, []);

  // ----

  const waitingInitial = () => {
    setStateObj((state_obj) => {
      return {
        ...state_obj,
        c_state: "playing",
        cur_player: "player1",
      };
    });
  };

  const handleChoose: handleChooseType = ({ x, y }) => {
    setStateObj((state_obj) => {
      const new_arr_point = [...state_obj.arr_point];
      new_arr_point[y][x].which_player = state_obj.cur_player;

      const new_cur_player =
        state_obj.cur_player === "player1" ? "player2" : "player1";
      const is_winner = checkIsWin({ arr_point: new_arr_point, x, y });
      const new_winner = is_winner ? state_obj.cur_player : "";

      if (new_winner) {
        alert(`${new_winner} is winner`);
        return {
          ...state_obj,
          arr_point: getInitialArrPoint(),
          c_state: "playing",
          cur_player: new_cur_player,
        };
      }

      return {
        ...state_obj,
        arr_point: new_arr_point,
        c_state: "playing",
        cur_player: new_cur_player,
        // winner: new_winner,
      };
    });
  };

  // ---

  return {
    ...state_obj,

    waitingInitial,
    handleChoose,
  };
}

//
export type useGameResult = ReturnType<typeof useGame>;
