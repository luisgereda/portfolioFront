import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./exploreRest.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../store/restaurants/actions";
import { selectRestaurants } from "../../store/restaurants/selectors";
import { Link } from "react-router-dom";
import { GeoSearchControl, MapBoxProvider } from "leaflet-geosearch";
import { Icon } from "leaflet";

export default function Restaurants() {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const restIcon = new Icon({
    iconUrl:
      "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1624529209/logo_circular_bldtpz.png",
    iconSize: [60, 60],
  });

  const SearchField = ({ apiKey }) => {
    const provider = new MapBoxProvider({
      params: {
        access_token: apiKey,
      },
    });
    const searchControl = new GeoSearchControl({
      provider: provider,
      style: "button",
      autoComplete: false,
      searchLabel: "Busca tu ciudad",
      autoClose: true,
    });

    const map = useMap();
    useEffect(() => {
      map.addControl(searchControl);
      return () => map.removeControl(searchControl);
    }, []);

    return null;
  };

  return (
    <div>
      <div className="header-explore">
        <h1>Encuentra tu restaurante favorito:</h1>
        <br />
        <button onClick={(e) => setShowSearch(!showSearch)} value={showSearch}>
          Has click aqui para buscar tu ciudad favorita
        </button>
      </div>

      <div className="map">
        <MapContainer
          center={[52.37243, 4.89973]}
          zoom={13}
          scrollWheelZoom={true}
        >
          {showSearch && (
            <SearchField
              apiKey={
                "pk.eyJ1IjoibGdwODgiLCJhIjoiY2txdDdxaXd5MW94dDJ6cWhxNmNoaWU4dyJ9.UXNiCWckQueO1FYpbbdKVA"
              }
            />
          )}
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {restaurants &&
            restaurants.map((restaurant) => (
              <Marker
                key={restaurant.id}
                position={[restaurant.latitude, restaurant.longitude]}
                icon={restIcon}
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
    </div>
  );
}
