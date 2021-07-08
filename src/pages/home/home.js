import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectPhotos, selectTotal } from "../../store/Photos/selectors";
import { fetchPhotos } from "../../store/Photos/actions";
import PhotosCountry from "../../components/countrySpace/countryphotos";
import { fetchRestaurants } from "../../store/restaurants/actions";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(fetchPhotos());
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div>
      <h1 className="header">¡Bienvenidos a Este Pechito Come Peruano! </h1>
      <p className="sub-header">
        Busca tu restaurante favorito, comparte tus experiencias y sube fotos
      </p>
      <div className="home-container">
        <div className="wrapperHome">
          {photos.map((photos) => (
            <PhotosCountry
              key={photos.id}
              image={photos.imageUrl}
              rest={!photos.restSpace ? "" : photos.restSpace.name}
              country={
                photos.countrySpace
                  ? photos.countrySpace?.name
                  : photos.restSpace?.country
              }
              city={photos.restSpace ? photos.restSpace.city : photos.city}
              hearts={photos.hearts}
              title={photos.title}
              description={photos.description}
              date={photos.createdAt}
            />
          ))}
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={(e) => {
            dispatch(fetchPhotos());
          }}
        >
          Mira mas (total:{total})
        </button>
        <Link to={"explore/restaurantes"}>
          <button>Explora Restaurantes</button>
        </Link>
        <Link to={"/explore/paises"}>
          <button>Explora Cocina en Casa</button>
        </Link>
      </div>
    </div>
  );
}
