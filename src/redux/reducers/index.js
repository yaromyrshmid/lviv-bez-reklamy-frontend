import { combineReducers } from "redux";
import markerReducer from "./markerReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  markers: markerReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
