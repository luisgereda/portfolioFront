const initialState = {
  reviews: [],
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "Restaurant/fetched":
      return { ...state, ...action.payload };
    case "review/posted":
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
      };

    case "photo/posted":
      return {
        ...state,
        photos: [...state.photos, action.payload],
      };

    default:
      return state;
  }
};
