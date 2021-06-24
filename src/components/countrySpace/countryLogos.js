import "./logos.css";

export default function Logos(props) {
  return (
    <div className="logos">
      <img src={props.logo} alt={props.name} />
    </div>
  );
}
