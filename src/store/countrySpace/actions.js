import { apiUrl } from "../../config/constants";
import axios from "axios";

const fetchedCountries = (countries) => {
  return {
    type: "countries/fetched",
    payload: countries,
  };
};

export const fetchCountries = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/countries`);
      dispatch(fetchedCountries(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
