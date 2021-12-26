const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  loading: false,
  authorization: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "registration/start":
      return {
        ...state,
        loading: true,
      };
    case "registration/success":
      return {
        ...state,
        loading: false,
        user: action.payload,
        token: action.payload.id,
      };

      default:
        return state;
  }
};

export default reducer;