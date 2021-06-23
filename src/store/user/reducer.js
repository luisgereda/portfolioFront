const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  photos: null,
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

    default:
      return state;
  }
};
