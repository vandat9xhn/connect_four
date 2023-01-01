import * as React from "react";

import "./Header.scss";

//
export interface HeaderProps {}

//
function Header({}: HeaderProps) {
  //
  return (
    <div className="Header flex space-between">
      <div>Menu</div>

      <div>...</div>

      <div>Restart</div>
    </div>
  );
}

export default Header;
