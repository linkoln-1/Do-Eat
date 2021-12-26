import React from "react";
import styles from "./header.module.scss";
import logo from "../../../img/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  const name = localStorage.getItem("name");
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
      </NavLink>
      <div className={styles.options}>
        <div>
          <i className="fa fa-shopping-basket" aria-hidden="true" />
        </div>
          <div>         
              <i className="fa fa-user-circle" aria-hidden="true" />
      </div>
    </div>
    </div>
  );
}

export default Header;
