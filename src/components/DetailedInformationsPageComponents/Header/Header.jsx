import React from "react";
import logo from "../../../img/logo.png";
import basket from "../../../img/image1.png";
import profile from "../../../img/profile.png";
import "../scss/header.scss";

function Header(props) {
  return (
    <div>
      <div className="header">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div>
          <img src={basket} alt="basket" />
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
