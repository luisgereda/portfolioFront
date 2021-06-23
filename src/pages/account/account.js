import { useDispatch, useSelector } from "react-redux";
import { myData } from "../../store/user/actions";
import { useEffect, useState } from "react";
import { selectPhotos } from "../../store/user/selector";
import PhotosHome from "../../components/photos/photos";
import { deletePhoto } from "../../store/user/actions";

export default function MyAccount() {
  const dispatch = useDispatch();
  const photos = useSelector(selectPhotos);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(myData());
  }, [dispatch]);

  return (
    <div>
      <div>Hola</div>
      {photos?.map((photo, index) => (
        <div>
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
  );
}
