import DetailedInformation from "../components/DetailedInformationsPageComponents/index";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <div>
      {/*Здесь будут все роутинг маршрутизаторы*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DetailedInformation" element={<DetailedInformation />} />
      </Routes>
    </div>
  );
}

export default App;
