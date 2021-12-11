import React from "react";
import "../scss/whereWe.scss";
import { useDispatch, useSelector } from "react-redux";
import { ToPutRatinges } from "../../../redux/RatingReducer/ratingAction";
import Rating from "react-rating";

function WhereWe({ address, id }) {
  const dispatch = useDispatch();
  const rating = useSelector((state) => {
    const items = state.rating.rating.filter(
      (item) => item.cafeId === address.id
    );
    return (
      items.reduce((value, item) => {
        return item.rating + value;
      }, 0) / items.length
    );
  });
  const initialRating = rating.toFixed(1);

  const handleClick = (rating) => {
    dispatch(ToPutRatinges(id, rating));
  };

  return (
    <div className="where__we">
      <div className="ClockMap">
        <div className="addresses">
          <i className="fa fa-location-arrow" aria-hidden="true"/>
          <span>{address.location}</span>
        </div>

        <div className="rating">
          <Rating
            className="Star"
            initialRating={initialRating}
            onClick={(e) => handleClick(e)}
            emptySymbol={"fa fa-star star_gray"}
            fullSymbol={"fa fa-star"}
          />
          <div>
            <p>Рейтинг {initialRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereWe;
