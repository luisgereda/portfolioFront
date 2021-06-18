export default function Logos(props) {
  return (
    <button>
      <img src={props.logo} alt={props.name} />
    </button>
  );
}
