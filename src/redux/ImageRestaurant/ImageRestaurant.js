const initialState = {
  ImageRestaurant: [],
  loading: false,
};

export const ImageRestaurant = (state = initialState, action) => {
  switch (action.type) {
    case "image/load/start":
      return {
        ...state,
        loading: true,
      };

    case "image/load/success":
      return {
        ...state,
        ImageRestaurant: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default ImageRestaurant;
