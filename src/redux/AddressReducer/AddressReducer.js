const initialState = {
  addresses: [],
  loading: false,
};

export const addressess = (state = initialState, action) => {
  switch (action.type) {
    case "addresses/load/start":
      return {
        ...state,
        loading: true,
      };

    case "addresses/load/success":
      return {
        ...state,
        addresses: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default addressess;
