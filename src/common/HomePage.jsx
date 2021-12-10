import React, { useEffect } from "react";
import Cards from "../components/HomePageComponents/cards/Cards";
import Main from "../components/HomePageComponents/main/Main";
import Footer from "../components/HomePageComponents/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { LoadRestaurant } from "../redux/RestaurantReducer/RestaurantAction";
import { loadRating } from "../redux/RatingReducer/ratingAction";

function HomePage() {
  const restaurant = useSelector((state) => state.restaurants.restaurant);
  const dispatch = useDispatch();
  // Тут будут все диспатчи
  useEffect(() => {
    dispatch(LoadRestaurant());
    dispatch(loadRating());
  }, [dispatch]);

  return (
    <div>
      <Main />
      {restaurant.map((cafe) => {
        return <Cards restaurant={cafe} key={cafe.id} />;
      })}
      <Footer />
    </div>
  );
}

export default HomePage;
