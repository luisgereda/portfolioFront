import { combineReducers } from "redux";
import restSpace from "./restSpace/reducer";
import countries from "./countrySpace/reducer";
import photos from "./Photos/reducer";

export default combineReducers({
  restSpace,
  countries,
  photos,
});
