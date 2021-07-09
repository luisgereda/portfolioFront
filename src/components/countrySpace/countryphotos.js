export default function PhotosCountry(props) {
  const dateArray = props.date;
  const date = new Date(dateArray);
  const dateCreated = date.toDateString();

  return (
    <div className="photo-card">
      <span className="tooltiptext">¡Que rico!🤤 </span>
      <div className="header-card">
        <img
          className="photos-country"
          src={props.image}
          alt={props.description}
        />
      </div>
      <div className="body-card">
        {/* <h1>{props.hearts}</h1> */}
        <h2>
          {props.rest ? (
            <div>
              {props.rest} <br />
            </div>
          ) : (
            ""
          )}
          {props.country && (
            <div>
              {props.country} <br />
            </div>
          )}
        </h2>
        <h3>
          {props.city} <br /> {props.title}
        </h3>
      </div>
      <div className="footer-card">
        <h2>{props.description}</h2>
        <h2>{dateCreated}</h2>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}
