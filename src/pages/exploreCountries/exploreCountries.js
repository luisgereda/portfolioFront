import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../store/countrySpace/actions";
import { selectCountries } from "../../store/countrySpace/selectors";
import Logos from "../../components/countrySpace/countryLogos";
import PhotosCountry from "../../components/countrySpace/countryphotos";
import FormCountry from "../../components/countrySpace/form";
import "./exploreCountries.css";

export default function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const [id, setId] = useState(1);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const country = countries.find((country) => country.id === id);

  return (
    <div className="container">
      <div>
        {countries.map((country, index) => (
          <button
            onClick={() => setId(country.id)}
            key={index}
            className="logos"
          >
            <Logos logo={country.logo} name={country.name} />
          </button>
        ))}
      </div>
      <div className="photos">
        <div className="row">
          {!country
            ? "loading"
            : country.photos.map((photos, index) => (
                <div className="col-md-6 col-lg-4">
                  <PhotosCountry
                    key={index}
                    image={photos.imageUrl}
                    // hearts={photos.hearts}
                    city={photos.city}
                    title={photos.title}
                    description={photos.description}
                    name={photos.photos?.name}
                    date={photos.createdAt}
                  ></PhotosCountry>
                </div>
              ))}
        </div>
      </div>
      <div>
        <FormCountry></FormCountry>
      </div>
    </div>
  );
}
