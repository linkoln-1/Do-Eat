import proxys from "../proxy";

export const loadRating = () => {
  return (dispatch) => {
    dispatch({ type: "rating/load/start" });
    fetch(`${proxys}/Rating`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "rating/load/success",
          payload: json,
        });
      });
  };
};

export const ToPutRatinges = (id, rating) => {
  return (dispatch) => {
    dispatch({
      type: "rating/send/start",
    });
    fetch(`${proxys}/Rating`, {
      method: "POST",
      body: JSON.stringify({
        cafeId: id,
        rating: rating,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "rating/send/success",
          payload: json,
        });
      });
  };
};
