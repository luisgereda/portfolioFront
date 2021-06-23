import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ marginBottom: 30, marginLeft: 30 }}>
      <NavLink
        to="/"
        style={{ marginRight: 30 }}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/explore/restaurantes"
        style={{ marginRight: 30 }}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Explora Restaurantes
      </NavLink>
      <NavLink
        to="/explore/paises"
        style={{ marginRight: 30 }}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Explora Cocina en Casa
      </NavLink>
      <NavLink
        to="/micuenta"
        style={{ marginRight: 30 }}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Mi cuenta
      </NavLink>
      <NavLink
        to="/login"
        style={{ marginRight: 30 }}
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Login
      </NavLink>
    </div>
  );
}
