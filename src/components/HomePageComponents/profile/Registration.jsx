import React, { useEffect, useState } from "react";
import styles from "./profile.module.scss";
function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("эмайл не может быть пустым");
  const [formValid, setFormValid] = useState(false);
  const [passwordError, setPasswordError] = useState(
    "пароль не может быть пустым"
  );
  const handler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);


  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("некорректный эмайл");
    } else {
      setEmailError("");
    }
  };
  const paswodrHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value > 8) {
      setPasswordError("пароль должен быть не меньше 3 и длинне 8");
      if (!e.target.value) {
        setPasswordError("пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };
  const handleAdd = (e) => {
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
  }
  console.log(email);
  return (
    <div className={styles.registration}>
        <h1>Регистрация</h1>
        {/* {emailDirty && emailError && (
          <span className={styles.error}>{emailError}</span>
        )} */}
        <input
          onChange={emailHandler}
          value={email}
          onBlur={(e) => handler(e)}
          name="email"
          type="text"
          placeholder="Введите свой емаил"
        />
        {/* {passwordDirty && passwordError && (
          <span className={styles.error}>{passwordError}</span>
        )} */}
        <input
          onChange={paswodrHandler}
          value={password}
          onBlur={(e) => handler(e)}
          name="password"
          type="password"
          placeholder="Введите свой пароль"
        />
        <button onClick={handleAdd} disabled={!formValid}>регистрация</button>
        <span className={styles.pass}><a href="#">забыл пароль</a></span>
    </div>
  );
}

export default Registration;
