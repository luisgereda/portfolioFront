import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../store/countrySpace/actions";
import { selectCountries } from "../../store/countrySpace/selectors";
import Logos from "../../components/countrySpace/countryLogos";
import PhotosCountry from "../../components/countrySpace/countryphotos";
import FormCountry from "../../components/countrySpace/form";

export default function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const [id, setId] = useState(1);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const country = countries.find((country) => country.id === id);

  // console.log("findcountry", country);

  // console.log("id", id);

  return (
    <div>
      <div>
        {countries.map((country, index) => (
          <button onClick={() => setId(country.id)} key={index}>
            <Logos logo={country.logo} name={country.name} />
          </button>
        ))}
      </div>
      <div>
        {!country
          ? "loading"
          : country.photos.map((photos, index) => (
              <PhotosCountry
                key={index}
                image={photos.imageUrl}
                hearts={photos.hearts}
                city={photos.city}
                title={photos.title}
                description={photos.description}
                name={photos.user?.name}
                date={photos.createdAt}
              ></PhotosCountry>
            ))}
      </div>
      <div>
        <FormCountry></FormCountry>
      </div>
    </div>
  );
}
