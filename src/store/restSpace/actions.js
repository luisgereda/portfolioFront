import { apiUrl } from "../../config/constants";
import { selectUserId } from "../../store/user/selector";
import { selectRestaurantId, selectRestaurantCity } from "./selectors";
import axios from "axios";
import { selectToken } from "../user/selector";

const fetchedRest = (restaurant) => {
  return {
    type: "Restaurant/fetched",
    payload: restaurant,
  };
};

const reviewPosted = (review) => {
  return {
    type: "review/posted",
    payload: review,
  };
};

const photoPosted = (photo) => {
  return {
    type: "photo/posted",
    payload: photo,
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

export const postReview = (title, review, date, imageUrl, stars) => {
  return async (dispatch, getState) => {
    try {
      const token = selectToken(getState());
      const userId = selectUserId(getState());
      const restSpaceId = selectRestaurantId(getState());
      console.log(userId, title, review, date, imageUrl, stars, restSpaceId);
      const response2 = await axios.post(
        `${apiUrl}/restaurant/review`,
        { title, review, date, stars, imageUrl, userId, restSpaceId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response2.data);
      dispatch(reviewPosted(response2.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const postPhotoRest = (title, description, imageUrl) => {
  return async (dispatch, getState) => {
    try {
      console.log("hola");
      const token = selectToken(getState());
      const userId = selectUserId(getState());
      const restSpaceId = selectRestaurantId(getState());
      const city = selectRestaurantCity(getState());
      console.log(userId, title, description, imageUrl, city, restSpaceId);

      const response3 = await axios.post(
        `${apiUrl}/restaurant/photos`,
        { title, description, city, imageUrl, userId, restSpaceId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("response", response3.data);
      dispatch(photoPosted(response3.data));
    } catch (e) {
      console.log(e);
    }
  };
};
