export default function Reviews(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.review}</h2>
      <img src={props.photo} alt={props.review} />
      <h2>{props.stars}</h2>
      <h2>Date of visit: {props.date}</h2>
    </div>
  );
}
