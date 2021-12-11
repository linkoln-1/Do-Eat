import DetailedInformation from "../components/DetailedInformationsPageComponents/index";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "../components/HomePageComponents/header/Header"

function App() {

  return (
    <div>
      <Header />
      {/*Здесь будут все роутинг маршрутизаторы*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailedInformation />} />
      </Routes>
    </div>
  );
}

export default App;
