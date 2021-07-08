import { useDispatch, useSelector } from "react-redux";
import { myData } from "../../store/user/actions";
import { useEffect } from "react";
import { selectPhotos, selectUser } from "../../store/user/selector";
import PhotosHome from "../../components/photos/photos";
import PhotosCountry from "../../components/countrySpace/countryphotos";
import { deletePhoto } from "../../store/user/actions";
import "./account.css";

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
        <h1 className="sub-header">Hola {user.name}</h1>
      ) : (
        <div className="header-account">
          <h1 className="sub-header">Hola loggeate para entrar a tu cuenta</h1>
          <img
            src="https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625770438/flecha_wwxcrb.png"
            alt="flecha peru"
            className="flecha"
          ></img>
        </div>
      )}

      <div className="wrapperHome">
        {photos?.map((photo, index) => (
          <div>
            <PhotosCountry
              key={index}
              image={photo.imageUrl}
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
