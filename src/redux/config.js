import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import restaurant from "./RestaurantReducer/RestaurantReducer";
import rating from "./RatingReducer/ratingReducer";
import addressess from "./AddressReducer/AddressReducer";
import { ImageRestaurant } from "./ImageRestaurantReducer/ImageRestaurant";
import ContactInfo from "./ContactInformationReducer/ContactInfoReducer";
import reducer from "./registration/reducer"

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReduce = combineReducers({
  restaurants: restaurant,

  rating: rating,
  addresses: addressess,
  ImageRestaurants: ImageRestaurant,
  ContactInformation: ContactInfo,
  registration: reducer
});

const store = createStore(rootReduce, applyMiddleware(thunk, logger));

export default store;
