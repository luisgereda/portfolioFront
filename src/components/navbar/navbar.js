import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "../../store/user/selector";
import { logOut } from "../../store/user/actions";

export default function Navbar() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <img
        src="https://res.cloudinary.com/dyzzo8hq1/image/upload/v1624529209/logo_circular_bldtpz.png"
        alt="Este pechito come peruano"
        className="logo"
      ></img>
      <ul>
        <li>
          <NavLink
            className="navlink"
            exact
            to="/"
            activeStyle={{ fontWeight: "bold", color: "blue" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            to="/explore/restaurantes"
            activeStyle={{ fontWeight: "bold", color: "blue" }}
          >
            Explora Restaurantes
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            to="/explore/paises"
            activeStyle={{ fontWeight: "bold", color: "blue" }}
          >
            Explora Cocina en Casa
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            to="/micuenta"
            activeStyle={{ fontWeight: "bold", color: "blue" }}
          >
            Mi cuenta
          </NavLink>
        </li>
        <li>
          {name ? (
            ((<h4 style={{ color: "white" }}>hola {name}</h4>),
            (
              <button className="logout" onClick={() => dispatch(logOut())}>
                Logout
              </button>
            ))
          ) : (
            <NavLink
              className="navlink"
              to="/login"
              activeStyle={{ fontWeight: "bold", color: "blue" }}
            >
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}
