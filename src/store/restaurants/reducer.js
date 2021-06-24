const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "restaurants/fetched":
      return [...action.payload];

    default:
      return state;
  }
};