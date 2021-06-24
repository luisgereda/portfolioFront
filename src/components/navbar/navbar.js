import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://res.cloudinary.com/dyzzo8hq1/image/upload/v1624529209/logo_circular_bldtpz.png"
        alt="Este pechito come peruano"
        className="logo-navbar"
      ></img>
      <NavLink
        className="navlink"
        exact
        to="/"
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Home
      </NavLink>
      <NavLink
        className="navlink"
        to="/explore/restaurantes"
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Explora Restaurantes
      </NavLink>
      <NavLink
        className="navlink"
        to="/explore/paises"
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Explora Cocina en Casa
      </NavLink>
      <NavLink
        className="navlink"
        to="/micuenta"
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Mi cuenta
      </NavLink>
      <NavLink
        className="navlink"
        to="/login"
        activeStyle={{ fontWeight: "bold", color: "blue" }}
      >
        Login
      </NavLink>
    </div>
  );
}
