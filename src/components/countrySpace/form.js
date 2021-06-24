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
  const [url, setUrl] = useState("");
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

  async function newPhoto(event) {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "soqj5w68");
    data.append("cloud_name", "dyzzo8hq1");
    try {
      const response2 = await axios.post(
        "https://api.cloudinary.com/v1_1/dyzzo8hq1/image/upload",
        data
      );
      console.log(response2.data.url);
      setImageUrl(response2.data.url);
    } catch (e) {
      console.log(e);
    }
  }

  const newReview = (event) => {
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
      <form onSubmit={newReview}>
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
        <input type="file" onChange={newPhoto}></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
