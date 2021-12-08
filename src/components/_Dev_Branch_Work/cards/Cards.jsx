import React from "react";
import styles from "./cards.module.scss";
import restaurant from "../../../img/restaurant.png";
import { NavLink } from "react-router-dom";

function Cards() {
  return (
    <div className={styles.cards}>
      <NavLink to="/DetailedInformation">
        <div className={styles.card}>
          <div className={styles["card-image"]}>
            <img src={restaurant} alt="" />
          </div>
          <div>
            <div className={styles["card-name"]}>шашлык у тимура</div>
            <div className={styles["card-desc"]}>
              лучший шашлык в Грозном,работаем с 9:00 до 22:00, у нас лучшие
              цены и качество обслуживания
            </div>
            <div className={styles["card-rating"]}>1</div>
          </div>
        </div>
      </NavLink>

      <div className={styles.card}>
        <div className={styles["card-image"]}>
          <img src={restaurant} alt="" />
        </div>
        <div>
          <div className={styles["card-name"]}>шашлык у тимура</div>
          <div className={styles["card-desc"]}>
            лучший шашлык в Грозном,работаем с 9:00 до 22:00, у нас лучшие цены
            и качество обслуживания
          </div>
          <div className={styles["card-rating"]}>1</div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles["card-image"]}>
          <img src={restaurant} alt="" />
        </div>
        <div>
          <div className={styles["card-name"]}>шашлык у тимура</div>
          <div className={styles["card-desc"]}>
            лучший шашлык в Грозном,работаем с 9:00 до 22:00, у нас лучшие цены
            и качество обслуживания
          </div>
          <div className={styles["card-rating"]}>1</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
