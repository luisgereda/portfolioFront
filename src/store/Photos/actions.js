import { apiUrl } from "../../config/constants";
import axios from "axios";

const fetchedPhotos = (photos) => {
  return {
    type: "photos/fetched",
    payload: photos,
  };
};

export const fetchPhotos = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/photos`);
      dispatch(fetchedPhotos(response.data));
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };
};
