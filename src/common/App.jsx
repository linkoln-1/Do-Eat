import DetailedInformation from "../components/DetailedInformationsPageComponents/index";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRating } from "../redux/RestaurantReducer/ratingAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRating())
  },[dispatch]);
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
