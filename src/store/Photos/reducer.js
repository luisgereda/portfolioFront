const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "photos/fetched":
      return [...action.payload];

    default:
      return state;
  }
};
