import React, { useEffect } from "react";
import Cards from "../components/HomePageComponents/cards/Cards";
import Header from "../components/HomePageComponents/header/Header";
import Main from "../components/HomePageComponents/main/Main";
import Footer from "../components/HomePageComponents/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { LoadRestaurant } from "../redux/RestaurantReducer/RestaurantAction";
function HomePage() {
  const restaurant = useSelector((state) => state.restaurants.restaurant);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadRestaurant());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main />
      {restaurant.map((cafe) => {
        return <Cards restaurant={cafe} key={cafe.id} />;
      })}
      <Footer />
    </div>
  );
}

export default HomePage;
