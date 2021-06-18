export default function PhotosHome(props) {
  return (
    <button>
      <img src={props.imageUrl} alt={props.title} />
      <div>
        <h1>{props.rest}</h1>
        <h1>{props.country}</h1>
        <h1>{props.city}</h1>
      </div>
      <h2>{props.hearts}</h2>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </button>
  );
}
