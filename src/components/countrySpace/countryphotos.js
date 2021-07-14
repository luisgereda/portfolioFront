import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { useState } from "react";

export default function PhotosCountry(props) {
  const dateArray = props.date;
  const date = new Date(dateArray);
  const dateCreated = date.toDateString();
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="photo-card">
      <span className="tooltiptext">¡Que rico!🤤 </span>
      <div className="header-card">
        <ControlledZoom
          isZoomed={isZoomed}
          onZoomChange={handleZoomChange}
          scrollableEl={false}
        >
          <img
            className="photos-country"
            src={props.image}
            alt={props.description}
          />
        </ControlledZoom>
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
        <h3>{props.description}</h3>
        <h3>{dateCreated}</h3>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}
