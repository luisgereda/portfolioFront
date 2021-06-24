import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectPhotos } from "../../store/Photos/selectors";
import { fetchPhotos } from "../../store/Photos/actions";
import PhotosHome from "../../components/photos/photos";
import { fetchRestaurants } from "../../store/restaurants/actions";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);

  useEffect(() => {
    dispatch(fetchPhotos());
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="header">¡Bienvenidos a Este Pechito Come Peruano! </h1>
      <p>
        Busca tu restaurante favorito, comparte tus experiencias y sube fotos
      </p>
      <div className="photos">
        <div className="row">
          {photos.map((photos) => (
            <div className="col-md-6 col-lg-4">
              <PhotosHome
                key={photos.id}
                imageUrl={photos.imageUrl}
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
              />
            </div>
          ))}
        </div>
      </div>
      <div className="buttons">
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
