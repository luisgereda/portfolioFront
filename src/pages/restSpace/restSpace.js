import { useDispatch, useSelector } from "react-redux";
import { fetchRestSpace } from "../../store/restSpace/actions";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectRestaurant } from "../../store/restSpace/selectors";
import Reviews from "../../components/restSpace/reviews";
import FormRest from "../../components/restSpace/formRes";
import { myData, addFav, deleteFav } from "../../store/user/actions";
import { selecFav } from "../../store/user/selector";
import FormRestPhoto from "../../components/restSpace/formResPhoto";
import PhotosCountry from "../../components/countrySpace/countryphotos";
import { Icon } from "leaflet";
import "./restSpace.css";

export default function RestSpace() {
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const { id } = useParams();
  const [show, setShow] = useState(true);
  const favorites = useSelector(selecFav);

  const isFavorite = favorites?.map((rest) => rest.id).includes(parseInt(id));

  const setFav = () => {
    console.log("hola");
    !isFavorite ? dispatch(addFav(id)) : dispatch(deleteFav(id));
  };

  useEffect(() => {
    dispatch(fetchRestSpace(id));
    dispatch(myData());
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="space">
        <div className="rest-photo">
          <img src={restaurant.photo} alt={restaurant.name} />
        </div>
        <div className="rest-space">
          <div className="detail">
            <span>
              <img
                className="logo"
                src={restaurant.logo}
                alt={restaurant.name}
              ></img>
            </span>
            <div>
              <div className="rest-header">
                <h1>{restaurant.name}</h1>{" "}
                <button onClick={setFav}>{isFavorite ? "♥" : "♡"}</button>
              </div>
              <h2>
                {restaurant.address} {restaurant.city} {restaurant.country}
                <br />
                {restaurant.phone}
                <br />
                {restaurant.openingH}
                <br />
                <a href={`${restaurant.website}`} target="_blank">
                  Mira su pagina web
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="show">
        <button
          onClick={(e) => {
            setShow(!show);
          }}
        >
          {show ? "Ver fotos" : "Ver reviews"}
        </button>
      </div>
      {show ? (
        <div className="wrapperHome">
          <div className="review-body">
            <h1>
              {restaurant.reviews === []
                ? " "
                : "Lo que dicen nuestros chacales:"}
            </h1>
            {restaurant.reviews?.map((review) => (
              <Reviews
                key={review.id}
                title={review.title}
                photo={review.photo}
                stars={review.stars}
                date={review.date}
                review={review.review}
                name={review.user?.name}
              />
            ))}

            <div className="forms">
              <FormRest />
            </div>
          </div>
        </div>
      ) : (
        <div className="home-container">
          <div className="wrapperHome">
            {restaurant.photos?.map((photo) => (
              <PhotosCountry
                key={photo.id}
                hearts={photo.hearts}
                title={photo.title}
                description={photo.description}
                image={photo.imageUrl}
                rest={restaurant.name}
                date={photo.createdAt}
              ></PhotosCountry>
            ))}
            <div className="forms">
              <FormRestPhoto />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
