import React, { useEffect } from "react";
import Cards from "../components/HomePageComponents/cards/Cards";
import Main from "../components/HomePageComponents/main/Main";
import Footer from "../components/HomePageComponents/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { LoadRestaurant } from "../redux/RestaurantReducer/RestaurantAction";
import { loadRating } from "../redux/RatingReducer/ratingAction";
import Pagination from '@mui/material/Pagination';
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Registration from "../components/HomePageComponents/profile/Registration";

function HomePage() {
  const restaurant = useSelector((state) => state.restaurants.restaurant);
  const [currentPage, setCurrentPage] = useState(1)
  const [cardPerPage] = useState(6)
  const indexOfLastPost = currentPage * cardPerPage;
  const indexOfFirstPost = indexOfLastPost - cardPerPage;
  const restaurante = restaurant.slice(indexOfFirstPost,indexOfLastPost)
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const dispatch = useDispatch();
  // Тут будут все диспатчи
  useEffect(() => {
    dispatch(LoadRestaurant());
    dispatch(loadRating());
  }, [dispatch]);

  return (
    <div>
      <Main />
      {restaurante.map((cafe) => {
        return <Cards restaurant={cafe} key={cafe.id} />;
      })}
      <div className="pagination">
      <Pagination
          count={2}
          onChange={handleChange}
          color={'primary'}
        />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
