import counterReducer from "./counter";
import authReducer from "./auth";
import apiReducer from "./apiReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  authReducer,
  apiReducer,
});
export default allReducers;