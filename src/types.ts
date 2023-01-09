export type WhichPlayer = "player1" | "player2";
export type C_State = "waiting" | "playing" | "ending";

export type ColorPoint = {
  [x in WhichPlayer]: string;
};

export interface Point {
  which_player: "" | WhichPlayer;
}

export interface GameObj {
  c_state: C_State;
  arr_point: Point[][];
  cur_player: WhichPlayer;
  winner: 'player1' | 'player2' | ''
}

//

export type handleChooseType = ({ x, y }: { x: number; y: number }) => void;
