import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger/src";
import thunk from "redux-thunk";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReduce = combineReducers({});

const store = createStore(rootReduce, applyMiddleware(thunk, logger));

export default store;
