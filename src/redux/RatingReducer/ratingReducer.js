const initialState = {
  rating: [],
  loading: false,
};

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "rating/load/start":
      return {
        ...state,
        loading: true,
      };
    case "rating/load/success":
      return {
        ...state,
        loading: false,
        rating: action.payload,
      };
    case "rating/send/start":
      return {
        ...state,
        loading: true,
      };
    case "rating/send/success":
      return {
        ...state,
        rating: [...state.rating, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default ratingReducer;
