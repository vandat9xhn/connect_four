import * as React from "react";

import { IS_MOBILE } from "./constant";
import "./styles/main.scss";

import ContextGameComponent from "./context/game/ContextGameComponent";
import Game from "./components/game/Game";

import design_pc from "../design/connect_four.webp";

//
export interface AppProps {}

//
function App({}: AppProps) {
  //
  React.useLayoutEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.dataset.theme = "1";

    if (IS_MOBILE) {
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("device-mobile");
    }
  }, []);

  //
  return (
    <ContextGameComponent>
      <div>
        <div className="App">
          <div className="App_contain">
            <Game />
          </div>
        </div>

        <div className="display-noe">
          <img src={design_pc} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </ContextGameComponent>
  );
}

export default App;
