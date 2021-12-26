import proxys from "../proxy";

export const RegistrationUser = (login, password, address, name, navigate) => {
  return (dispatch) => {
    dispatch({ type: "registration/start" });
    fetch(`${proxys}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        login,
        password,
        address,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "registration/success", payload: json });
      });
  };
};
