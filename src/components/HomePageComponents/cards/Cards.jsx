import React from "react";
import styles from "./cards.module.scss";
import { NavLink } from "react-router-dom";
function Cards({ restaurant }) {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={restaurant.url} alt="" />
        <div className={styles["div"]}>
          <NavLink to={`/${restaurant.id}`} className={styles["NavLink-Style"]}>
            <div className={styles["card-name"]}>{restaurant.title}</div>
          </NavLink>
          <div className={styles["card-address"]}>{restaurant.address}</div>
          <div className={styles["falsch"]} />
          <div className={styles["card-rating"]}></div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
