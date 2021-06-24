const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "countries/fetched":
      return [...action.payload];
    case "photo/posted":
      return [...action.payload, ...state];
    case "country/created":
      return [...state, action.payload];
    default:
      return state;
  }
};
