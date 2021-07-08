import StarRatingComponent from "react-star-rating-component";

export default function Reviews(props) {
  return (
    <div className="review">
      <h1>{props.title}</h1>
      <div className="content">
        <h2>{props.review}</h2>
      </div>
      <StarRatingComponent name={"Stars"} value={props.stars} />
      <h2>{props.name}</h2>
      <h2>Date of visit: {props.date}</h2>
    </div>
  );
}
