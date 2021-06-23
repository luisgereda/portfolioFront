import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postPhotoCountry } from "../../store/countrySpace/actions";

export default function FormCountry() {
  const [title, setTitle] = useState("");
  const [description, setDecription] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [city, setCities] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    async function GetCountries() {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      console.log(response.data.data);
      setCountries(response.data.data);
    }
    GetCountries();
  }, []);

  const newPhoto = (event) => {
    event.preventDefault();
    dispatch(postPhotoCountry(title, description, country, city, imageUrl));
    setTitle("");
    setDecription("");
    setCountry("");
    setCities("");
    setImageUrl("");
  };

  const selectCountry = (event) => {
    setCountry(event.target.value);
  };

  const citiesOptions = countries.find((data) => data.country === country);

  const selectCity = (event) => {
    setCities(event.target.value);
  };

  return (
    <div>
      <h1>Comparte tus fotos con nosotros:</h1>
      <form onSubmit={newPhoto}>
        <label>Pais:</label>
        <select onChange={selectCountry} value={country}>
          {countries?.map((country, index) => (
            <option value={country.country} key={index}>
              {" "}
              {country.country}
            </option>
          ))}
        </select>
        <label>City:</label>
        <select onChange={selectCity} value={city}>
          {citiesOptions?.cities.map((city, index) => (
            <option value={city} key={index}>
              {city}
            </option>
          ))}
        </select>
        <label>Titulo:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDecription(event.target.value)}
        ></input>
        <label>Imagen</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
