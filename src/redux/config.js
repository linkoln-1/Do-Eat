import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";
import restaurant from "./RestaurantReducer/RestaurantReducer";
import rating from "./RestaurantReducer/ratingReducer"

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReduce = combineReducers({
  restaurants: restaurant,
  rating: rating
});

const store = createStore(rootReduce, applyMiddleware(thunk, logger));

export default store;
