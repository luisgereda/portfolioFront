import { useDispatch, useSelector } from "react-redux";
import { myData } from "../../store/user/actions";
import { useEffect } from "react";
import { selectPhotos, selectUser } from "../../store/user/selector";
import PhotosHome from "../../components/photos/photos";
import { deletePhoto } from "../../store/user/actions";

export default function MyAccount() {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(myData());
  }, [dispatch]);

  return (
    <div className="container">
      {user.name ? (
        <h1 style={{ color: "red" }}>Hola {user.name}</h1>
      ) : (
        <h1 style={{ color: "red" }}>Hola loggeate para entrar a tu cuenta</h1>
      )}

      <div className="row">
        {photos?.map((photo, index) => (
          <div className="col-md-6 col-lg-4">
            <PhotosHome
              key={index}
              imageUrl={photo.imageUrl}
              title={photo.title}
              rest={!photo.restSpace ? "" : photo.restSpace.name}
              country={
                photo.countrySpace
                  ? photo.countrySpace?.name
                  : photo.resSpace?.country
              }
              city={photo.restSpace ? photo.restSpace.city : photo.city}
              description={photo.description}
              hearts={photo.hearts}
            />
            <button onClick={() => dispatch(deletePhoto(photo.id))}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
