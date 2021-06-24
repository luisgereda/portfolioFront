export default function PhotosCountry(props) {
  // const date = {props.date}

  return (
    <div className="card">
      <div className="card-body">
        <img
          src={props.image}
          alt={props.description}
          className="card-img-top"
        />
        <div className="card-header">
          {/* <h1>{props.hearts}</h1> */}
          <h1 className="card-title text-primary">{props.city}</h1>
          <h1>{props.title}</h1>
        </div>
        <div className="card-body">
          <h2>{props.description}</h2>
          {/* <h2>{props.date}</h2> */}
          <h2>{props.name}</h2>
        </div>
      </div>
    </div>
  );
}
