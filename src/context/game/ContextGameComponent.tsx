import * as React from "react";

import { contextGame } from "./ContextGame";
import { useGame } from "../../hooks/useGame";

//
export interface ContextGameComponentProps {
  children: React.ReactElement;
}

//
function ContextGameComponent({ children }: ContextGameComponentProps) {
  //
  const data = useGame();

  //
  return <contextGame.Provider value={data}>{children}</contextGame.Provider>;
}

export default ContextGameComponent;
