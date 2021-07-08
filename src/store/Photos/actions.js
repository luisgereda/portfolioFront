import { apiUrl } from "../../config/constants";
import axios from "axios";

const fetchedPhotos = (photos) => {
  return {
    type: "photos/fetched",
    payload: photos,
  };
};

const totalPhotos = (total) => {
  return {
    type: "photos/total",
    payload: total,
  };
};

export const fetchPhotos = () => {
  return async (dispatch, getState) => {
    const offset = getState().photos.photos.length;
    try {
      const response = await axios.get(
        `${apiUrl}/spaces/photos?offset=${offset}&limit=12`
      );
      console.log(response.data);
      dispatch(fetchedPhotos(response.data.images));
      dispatch(totalPhotos(response.data.total));
    } catch (e) {
      console.log(e.message);
    }
  };
};
