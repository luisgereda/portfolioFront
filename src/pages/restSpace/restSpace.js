import { useDispatch, useSelector } from "react-redux";
import { fetchRestSpace } from "../../store/restSpace/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectRestaurant } from "../../store/restSpace/selectors";
import PhotosHome from "../../components/photos/photos";
import Reviews from "../../components/restSpace/reviews";
import FormRest from "../../components/restSpace/formRes";

export default function RestSpace() {
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchRestSpace(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h2>
        {restaurant.address} {restaurant.city} {restaurant.country}{" "}
        {restaurant.phone} {restaurant.website} {restaurant.openingH}
      </h2>
      <div>
        {restaurant.categories?.map((category, index) => (
          <h3 key={index}>{category.cuisine}</h3>
        ))}
      </div>
      <div>
        {restaurant.photos?.map((photo) => (
          <PhotosHome
            key={photo.id}
            hearts={photo.hearts}
            title={photo.title}
            description={photo.description}
            imageUrl={photo.imageUrl}
          ></PhotosHome>
        ))}
      </div>
      <div>
        {restaurant.reviews?.map((review) => (
          <Reviews
            key={review.id}
            title={review.title}
            photo={review.photo}
            starts={review.stars}
            date={review.date}
            review={review.review}
          />
        ))}
      </div>
      <FormRest></FormRest>
    </div>
  );
}
