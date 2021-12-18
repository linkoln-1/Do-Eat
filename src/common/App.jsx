import DetailedInformation from "../components/DetailedInformationsPageComponents/index";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "../components/HomePageComponents/header/Header";
import "./common.pagination.style.scss";
import { useState } from "react";
import Registration from "../components/HomePageComponents/profile/Registration";
import Profile from "../components/HomePageComponents/profile/Profile";
function App() {
  const loggin = localStorage.getItem('name')
  return (
    <div>
      <Header />
      {/*Здесь будут все роутинг маршрутизаторы*/}
      <Routes>
        {loggin ? <Route path="/registration" element={<Profile />} /> : <Route path="/registration" element={<Registration />} />}
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailedInformation />} />
      </Routes>
    </div>
  );
}

export default App;
