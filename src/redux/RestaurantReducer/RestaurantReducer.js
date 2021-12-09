const initialState = {
  restaurant: [],
  loading: false,
};

export const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case "cafe/load/start":
      return {
        ...state,
        loading: true,
      };

    case "cafe/load/success":
      return {
        ...state,
        restaurant: action.payload,
        loading: false,
      };

    case "postCafe/send/start":
      return {
        ...state,
        loading: true,
      };

    case "postCafe/send/success":
      return {
        ...state,
        restaurant: [...state.restaurant, action.payload],
        loading: false,
      };

    default:
      return state;
  }
};

export default restaurant;
