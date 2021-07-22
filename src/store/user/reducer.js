const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  photos: null,
  restSpaces: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "login/success":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case "Logout":
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case "user/data":
      return { ...state, ...action.payload };
    case "photo/deleted":
      return {
        ...state,
        photos: state.photos.filter((photo) => {
          return photo.id !== action.payload;
        }),
      };
    case "favorite/added":
      return { ...state, restSpaces: [...state.restSpaces, action.payload] };
    case "favorite/remove":
      const esto = parseInt(action.payload);
      const newArray = state.restSpaces.filter((rest) => rest.id !== esto);
      return {
        ...state,
        restSpaces: newArray,
      };

    default:
      return state;
  }
};
