const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "countries/fetched":
      return [...action.payload];
    default:
      return state;
  }
};
