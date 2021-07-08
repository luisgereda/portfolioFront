export default function Logos(props) {
  return (
    <div>
      <img className="logo-photo" src={props.logo} alt={props.name} />
    </div>
  );
}
