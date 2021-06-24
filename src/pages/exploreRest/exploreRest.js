import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./exploreRest.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../store/restaurants/actions";
import { selectRestaurants } from "../../store/restaurants/selectors";
import { Link } from "react-router-dom";

export default function Restaurants() {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div>
      <h1>Encuentra tu restaurante favorito:</h1>
      <MapContainer
        center={[52.37243, 4.89973]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {restaurants &&
          restaurants.map((restaurant) => (
            <Marker
              key={restaurant.id}
              position={[restaurant.latitude, restaurant.longitude]}
            >
              <Popup>
                <Link to={`/restaurants/${restaurant.id}`}>
                  {restaurant.name}
                </Link>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
