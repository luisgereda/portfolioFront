import { selectTotal } from "./selectors";

const initialState = { photos: [], total: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "photos/fetched":
      return { ...state, photos: [...state.photos, ...action.payload] };
    case "photos/total":
      return {
        ...state,
        total: [action.payload],
      };

    default:
      return state;
  }
};
