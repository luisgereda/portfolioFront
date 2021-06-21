import { useState, useEffect } from "react";
import axios from "axios";

export default function FormCountry() {
  const [title, setTitle] = useState("");
  const [description, setDecription] = useState("");
  const [country, setCountry] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

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
        <select onChange={selectCity} value={cities}>
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
        <input type="text"></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
