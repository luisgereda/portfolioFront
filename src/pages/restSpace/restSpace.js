import { useDispatch, useSelector } from "react-redux";
import { fetchRestSpace } from "../../store/restSpace/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectRestaurant } from "../../store/restSpace/selectors";
import PhotosHome from "../../components/photos/photos";
import Reviews from "../../components/restSpace/reviews";
import FormRest from "../../components/restSpace/formRes";
import { myData } from "../../store/user/actions";
import FormRestPhoto from "../../components/restSpace/formResPhoto";
import "./restSpace.css";

export default function RestSpace() {
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchRestSpace(id));
    dispatch(myData());
  }, [dispatch, id]);

  return (
    <div className="container">
      <h1 className="space">{restaurant.name}</h1>
      <h2 className="space">
        {restaurant.address} {restaurant.city} {restaurant.country}{" "}
        {restaurant.phone} {restaurant.website} {restaurant.openingH}
      </h2>
      <div>
        {restaurant.categories?.map((category, index) => (
          <h3 key={index}>{category.cuisine}</h3>
        ))}
      </div>
      <div className="photos">
        <div className="row">
          {restaurant.photos?.map((photo) => (
            <div className="col-md-6 col-lg-6">
              <PhotosHome
                key={photo.id}
                hearts={photo.hearts}
                title={photo.title}
                description={photo.description}
                imageUrl={photo.imageUrl}
                rest={restaurant.name}
              ></PhotosHome>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 style={{ marginTop: 15 }} className="space">
          {restaurant.reviews ? "" : "Lo que dicen nuestros chacales:"}
        </h1>
        {restaurant.reviews?.map((review) => (
          <Reviews
            key={review.id}
            title={review.title}
            photo={review.photo}
            starts={review.stars}
            date={review.date}
            review={review.review}
            name={review.user?.name}
          />
        ))}
      </div>
      <div className="forms">
        <FormRest></FormRest>
        <FormRestPhoto />
      </div>
    </div>
  );
}
