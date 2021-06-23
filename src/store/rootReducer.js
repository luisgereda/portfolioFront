import { combineReducers } from "redux";
import restSpace from "./restSpace/reducer";
import countries from "./countrySpace/reducer";
import photos from "./Photos/reducer";
import user from "./user/reducer";

export default combineReducers({
  user,
  restSpace,
  countries,
  photos,
});
