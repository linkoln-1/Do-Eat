import React from "react";
import styles from "./cards.module.scss";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToPutRatinges } from "../../../redux/RatingReducer/ratingAction";
function Cards({ restaurant }) {
  const dispatch = useDispatch();
  const rating = useSelector((state) => {
    const items = state.rating.rating.filter(
      (item) => item.cafeId === restaurant.id
    );
    return (
      items.reduce((value, item) => {
        return item.rating + value;
      }, 0) / items.length
    );
  });
  const id = restaurant.id;
  const one = rating.toFixed(1);
  const Click = (rating) => {
    dispatch(ToPutRatinges(id, rating));
  };
  
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={restaurant.url} alt="" />
        <div className={styles["div"]}>
          <NavLink to={`/${restaurant.id}`} className={styles["NavLink-Style"]}>
            <div className={styles["card-name"]}>{restaurant.title}</div>
          </NavLink>
          <div className={styles["card-address"]}>{restaurant.address}</div>
          <div className={styles["falsch"]} />
          <div className={styles["card-rating"]}>
            <Rating
              className={styles["Star"]}
              initialRating={one}
              onClick={Click}
              emptySymbol={"fa fa-star star_gray"}
              fullSymbol={"fa fa-star"}
            />
            <div>
              <p>{one}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
