import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectPhotos } from "../../store/Photos/selectors";
import { fetchPhotos } from "../../store/Photos/actions";
import PhotosHome from "../../components/photos/photos";

export default function Home() {
  const date = Date();
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  console.log(date);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <div>
      <h1>hola, hoy es </h1>
      {date}

      <div>
        {photos.map((photos) => (
          <PhotosHome
            key={photos.id}
            imageUrl={photos.imageUrl}
            rest={!photos.restSpace ? "" : photos.restSpace.name}
            country={
              photos.countrySpace
                ? photos.countrySpace?.name
                : photos.resSpace?.country
            }
            city={photos.restSpace ? photos.restSpace.city : photos.city}
            hearts={photos.hearts}
            title={photos.title}
            description={photos.description}
          />
        ))}
      </div>
      <div>
        <Link>
          <button>Explora Restaurantes</button>
        </Link>
        <Link>
          <button to={"/explore/paises"}>Explora Cocina en Casa</button>
        </Link>
      </div>
    </div>
  );
}
