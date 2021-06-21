const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "Restaurant/fetched":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
