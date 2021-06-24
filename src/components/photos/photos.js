import "./photos.css";

export default function PhotosHome(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <img
            src={props.imageUrl}
            alt={props.title}
            className="card-img-top"
          />
          <div className="card-header">
            <h1 className="card-title">{props.rest}</h1>
            <h3 className="card-subtitle mb-3 text-primary">{props.country}</h3>
            <h3 className="card-subtitle">{props.city}</h3>
          </div>
          {/* <h2>{props.hearts}</h2> */}
          <div className="content">
            <h5>{props.title}</h5>
            <span className="card-text">{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
