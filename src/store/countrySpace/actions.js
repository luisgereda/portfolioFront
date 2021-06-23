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

const photoPosted = (photo) => {
  return {
    type: "photo/posted",
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
    try {
      const token = selectToken(getState());
      const userId = selectUserId(getState());
      const countries = selectCountries(getState());
      const checkCountry = countries.find((data) => data.name === country);
      if (checkCountry) {
        const countrySpaceId = checkCountry.id;
        const response3 = await axios.post(
          `${apiUrl}/country/photos`,
          { title, description, city, imageUrl, userId, countrySpaceId },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(photoPosted(response3.data));
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

      // console.log(
      //   userId,
      //   title,
      //   description,
      //   imageUrl,
      //   city,
      //   countrySpaceId,
      //   country
      // );

      // checkCountry
      //   ? (response3 = await axios.post(
      //       `${apiUrl}/country/photos`,
      //       { title, description, city, imageUrl, userId, countrySpaceId },
      //       {
      //         headers: { Authorization: `Bearer ${token}` },
      //       }
      //     ))
      //   : (response3 = await axios.post(
      //       `${apiUrl}/country/photos`,
      //       {
      //         title,
      //         description,
      //         city,
      //         imageUrl,
      //         userId,
      //         country,
      //         countrySpaceId,
      //       },
      //       {
      //         headers: { Authorization: `Bearer ${token}` },
      //       }
      //     ));

      // console.log(response3.data);
      // dispatch(photoPosted(response3.data));
    } catch (e) {
      console.log(e);
    }
  };
};
