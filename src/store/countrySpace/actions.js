import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectCountries } from "./selectors";
import { selectToken } from "../../store/user/selector";
import { selectUserId } from "../../store/user/selector";

const fetchedCountries = (countries) => {
  return {
    type: "countries/fetched",
    payload: countries,
  };
};

const photoCountryPosted = (photo) => {
  return {
    type: "photoCountry/posted",
    payload: photo,
  };
};

const countryCreated = (country) => {
  return {
    type: "country/created",
    payload: country,
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

export const postPhotoCountry = (
  title,
  description,
  country,
  city,
  imageUrl
) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    const userId = selectUserId(getState());
    const countries = selectCountries(getState());
    const checkCountry = countries.find((data) => data.name === country);

    console.log(
      title,
      description,
      country,
      city,
      imageUrl,
      token,
      userId,
      checkCountry
    );
    try {
      if (checkCountry) {
        const countrySpaceId = checkCountry.id;
        const response3 = await axios.post(
          `${apiUrl}/country/photos`,
          { title, description, city, imageUrl, userId, countrySpaceId },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(photoCountryPosted(response3.data));
      } else {
        const response3 = await axios.post(
          `${apiUrl}/country/photos`,
          {
            title,
            description,
            city,
            imageUrl,
            userId,
            country,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(countryCreated(response3.data));
      }
    } catch (e) {
      console.log(e);
    }
  };
};
