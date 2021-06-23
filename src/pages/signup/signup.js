import React, { useState, useEffect } from "react";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  //   useEffect(() => {
  //     if (token !== null) {
  //       history.push("/");
  //     }
  //   }, [token, history]);

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

  const selectCountry = (event) => {
    setCountry(event.target.value);
  };

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, country));

    setEmail("");
    setPassword("");
    setName("");
    setCountry("");
  }

  return (
    <div>
      <form>
        <h1>Crea una cuenta:</h1>
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Ingresa tu Email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>contraseña:</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <label>Pais:</label>
        <select onChange={selectCountry} value={country}>
          {countries?.map((country, index) => (
            <option value={country.country} key={index}>
              {" "}
              {country.country}
            </option>
          ))}
        </select>
        <button type="submit" onClick={submitForm}>
          Crear cuenta
        </button>
        <div>
          <h3>¿Ya tienes una cuenta?</h3>
          <Link to="/login"> Ingresa aqui</Link>
        </div>
      </form>
    </div>
  );
}
