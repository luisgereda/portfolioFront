import { useDispatch, useSelector } from "react-redux";
import { myData } from "../../store/user/actions";
import { useEffect, useState } from "react";
import {
  selectPhotos,
  selectUser,
  selecFav,
  selectToken,
} from "../../store/user/selector";
import PhotosCountry from "../../components/countrySpace/countryphotos";
import { deletePhoto } from "../../store/user/actions";
import Favoritos from "../../components/favoritos/favoritos";
import "./account.css";

export default function MyAccount() {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const user = useSelector(selectUser);
  const favorites = useSelector(selecFav);
  const token = useSelector(selectToken);
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch(myData());
  }, [dispatch]);

  return (
    <div className="container">
      {user.name ? (
        <div className="entry">
          <h1 className="sub-header">Hola {user.name}</h1>

          <button onClick={(e) => setShow(!show)}>
            {!show ? "ver photos" : "ver favoritos"}{" "}
          </button>
        </div>
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
      {show ? (
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
                date={photo.createdAt}
              />
              <button onClick={() => dispatch(deletePhoto(photo.id))}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="wrapperHome">
          {favorites?.map((fav) => {
            return (
              <Favoritos
                key={fav.id}
                id={fav.id}
                logo={fav.logo}
                name={fav.name}
                address={fav.address}
                city={fav.city}
                country={fav.country}
                phone={fav.phone}
                openingH={fav.openingH}
                website={fav.website}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
