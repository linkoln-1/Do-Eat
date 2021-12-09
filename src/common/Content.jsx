import React, { useEffect } from "react";
import Cards from "../components/_Dev_Branch_Work/cards/Cards";
import Header from "../components/_Dev_Branch_Work/header/Header";
import Main from "../components/_Dev_Branch_Work/main/Main";
import Footer from "../components/_Dev_Branch_Work/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { LoadRestaurant } from "../redux/RestaurantReducer/RestaurantAction";
function Content() {
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

export default Content;
