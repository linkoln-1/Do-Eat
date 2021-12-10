import proxys from "../proxy";
export const loadAddress = () => {
  return (dispatch) => {
    dispatch({ type: "addresses/load/start" });

    fetch(`${proxys}/addresses`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "addresses/load/success",
          payload: json,
        });
      });
  };
};
