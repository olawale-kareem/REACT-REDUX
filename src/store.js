import { createStore, applyMiddleware } from "redux";
import allReducers from "./redux/reducers/index";
import thunk from "redux-thunk";

const middlewares = [thunk];
const store = createStore(allReducers, applyMiddleware(...middlewares));
export default store;



