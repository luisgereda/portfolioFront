const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "countries/fetched":
      return [...action.payload];
    case "photoCountry/posted":
      const updatedCountries = state.map((country) => {
        if (country.id === action.payload.countrySpaceId) {
          return { ...country, photos: [...country.photos, action.payload] };
        } else {
          return country;
        }
      });

      return updatedCountries;
    case "country/created":
      return [...state, action.payload];
    default:
      return state;
  }
};
