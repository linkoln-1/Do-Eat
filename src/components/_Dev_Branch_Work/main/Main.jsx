import React from "react";
import Content from "./Sort";
import styles from "./main.module.scss";
function Main() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.main}>
          <div className={styles["main-text"]}>
            Think <br /> Global -<br /> Eat Local
          </div>
        </div>
      </div>
      <Content />
    </>
  );
}

export default Main;
