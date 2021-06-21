import { apiUrl } from "../../config/constants";

import axios from "axios";

const fetchedRest = (restaurant) => {
  return {
    type: "Restaurant/fetched",
    payload: restaurant,
  };
};

export const fetchRestSpace = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/restaurants/${id}`);
      dispatch(fetchedRest(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
