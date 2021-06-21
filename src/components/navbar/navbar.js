import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ marginBottom: 30, marginLeft: 30, marginRight: 30 }}>
      <NavLink
        to="/"
        exact
        to={"/"}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/explore/restaurantes"
        exact
        to={"/explore/restaurantes"}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Explora Restaurantes
      </NavLink>
      <NavLink
        to="/explore/paises"
        exact
        to={"/explore/paises"}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Explora Cocina en Casa
      </NavLink>
      <NavLink
        to="/micuenta"
        exact
        to={"/mi cuenta"}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Mi cuenta
      </NavLink>
      <NavLink
        to="/login"
        exact
        to={"/Login"}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Login
      </NavLink>
    </div>
  );
}
