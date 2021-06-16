import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ marginBottom: 30 }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore/Restaunrats">Explora Restaurantes</NavLink>
    </div>
  );
}
