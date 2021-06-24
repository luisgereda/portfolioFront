import { apiUrl } from "../../config/constants";
import axios from "axios";

const fetchedRestaurants = (restaurants) => {
  return {
    type: "restaurants/fetched",
    payload: restaurants,
  };
};

export const fetchRestaurants = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/restaurants`);
      dispatch(fetchedRestaurants(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};