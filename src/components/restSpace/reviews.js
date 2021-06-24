import "./review.css";

export default function Reviews(props) {
  return (
    <div className="review">
      <h2>{props.name}</h2>
      <div className="content">
        <h1>{props.title}</h1>
        <h2>{props.review}</h2>
        {/* <img src={props.photo} alt={props.review} /> */}
      </div>
      <h2>{props.stars}</h2>
      <h2>Date of visit: {props.date}</h2>
    </div>
  );
}
