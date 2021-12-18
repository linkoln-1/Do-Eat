import React from "react";
import styles from "./profile.module.scss";
import profile from "..//..//..//img/profile-img.png";
function Profile() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const city = localStorage.getItem("city");
  const clear = () => {
    localStorage.clear("name");
    localStorage.clear("email");
    localStorage.clear("city");
  };
  return (
    <div className={styles.profile}>
      <div className={styles.image}>
        <img src={profile} alt="" />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.mail}>
        <span>почта:</span> {email}
      </div>
      <div className={styles.city}>
        <span>г :</span> {city}
      </div>
      <a href="/">
        <div onClick={clear} className={styles.logout}>
          Выйти
        </div>
      </a>
    </div>
  );
}

export default Profile;
