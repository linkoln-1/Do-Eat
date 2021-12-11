import proxy from "../proxy";
export const loadContactInfo = () => {
 return (dispatch) => {
  dispatch({ type: 'info/load/start' });

  fetch(`${proxy}/ContactInfo`)
    .then((response) => response.json())
    .then((json) => {
     dispatch({
      type: 'info/load/success',
      payload: json,
     });
    });
 };
};
