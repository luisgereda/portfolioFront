import { deleteFav } from "../../store/user/actions";
import { useDispatch } from "react-redux";

export default function Favoritos(props) {
  const dispatch = useDispatch();

  return (
    <div className="fav-cards">
      <img className="logo" src={props.logo} alt={props.name} />
      <div className="fav-details">
        <h1>{props.name}</h1>
        <div className="card">
          <div className="fav-bottom">
            <p>
              {props.address}
              <br />
              {props.city}, {props.country}
              <br />
              {props.phone}
              <br />
              {props.openingH}
            </p>

            <a href={`${props.website}`} target="_blank">
              {" "}
              Mira su web
            </a>
          </div>
          <button
            onClick={(e) => dispatch(deleteFav(props.id))}
            className="remove"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}
