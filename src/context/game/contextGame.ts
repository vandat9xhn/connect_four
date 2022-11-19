import * as React from "react";

import { useGameResult } from "../../hooks/useGame";

//
export const contextGame = React.createContext<useGameResult>(null);
