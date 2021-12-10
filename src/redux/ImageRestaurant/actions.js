import proxys from "../proxy";
export const loadBigImage = () => {
  return (dispatch) => {
    dispatch({ type: "image/load/start" });

    fetch(`${proxys}/bigImages`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "image/load/success",
          payload: json,
        });
      });
  };
};
