import { useState, useEffect } from "react";
import { login } from "../../store/user/actions";
import { selectToken, selectUserName } from "../../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  const history = useHistory();

  useEffect(() => {
    if (user !== null) {
      history.push("/");
    }
  }, [user, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <form>
        <h1>Login</h1>
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
        <button type="submit" onClick={submitForm}>
          Loggeate
        </button>
        <div>
          <h3>¿No tienes una cuenta?</h3>
          <Link to="/signup"> Registrate aqui</Link>
        </div>
      </form>
    </div>
  );
}
