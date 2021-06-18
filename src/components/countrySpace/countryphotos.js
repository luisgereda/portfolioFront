export default function PhotosCountry(props) {
  // const date = {props.date}

  return (
    <div>
      <img src={props.image} alt={props.description} />
      <h1>{props.hearts}</h1>
      <h1>{props.city}</h1>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.date}</h2>
      <h2>{props.name}</h2>
    </div>
  );
}
