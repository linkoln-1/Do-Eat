import DetailedInformation from "../components/DetailedInformationsPageComponents/index";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "../components/HomePageComponents/header/Header";
import "./common.pagination.style.scss";
import Registration from "../components/HomePageComponents/profile/Registration";

function App() {
  return (
    <div>
      <Header />
      {/*Здесь будут все роутинг маршрутизаторы*/}
      <Routes>
        {/* {loggin ? <Route path="/registration" element={<Profile />} /> : <Route path="/registration" element={<Registration />} />} */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailedInformation />} />
      </Routes>
    </div>
  );
}

export default App;
