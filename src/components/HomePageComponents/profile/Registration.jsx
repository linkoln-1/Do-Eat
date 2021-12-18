import React, { useEffect, useState } from "react";
import styles from "./profile.module.scss";
import { NavLink } from "react-router-dom";
function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
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
  const passwodrHandler = (e) => {
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
  const handleAdd = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("name", value);
    localStorage.setItem("city", city);
  };
  const handleName = (e) => {
    setValue(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className={styles.registration}>
      <h1>Регистрация</h1>
      <input
        type="text"
        placeholder="Введите имя и фамилию"
        value={value}
        onChange={handleName}
      />
      <input
        onChange={emailHandler}
        value={email}
        onBlur={(e) => handler(e)}
        name="email"
        type="text"
        placeholder="Введите емаил"
      />
      <input
        onChange={passwodrHandler}
        value={password}
        onBlur={(e) => handler(e)}
        name="password"
        type="password"
        placeholder="Введите пароль"
      />
      <input
        type="city"
        placeholder="Город"
        value={city}
        onChange={handleCity}
      />
      <a href="/">
        <div className={styles.send} onClick={handleAdd} disabled={!formValid}>
          Регистрация
        </div>
      </a>
      <div className={styles.pass}></div>
    </div>
  );
}

export default Registration;
