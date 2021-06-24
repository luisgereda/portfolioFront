import { useState } from "react";
import { useDispatch } from "react-redux";
import { postReview } from "../../store/restSpace/actions";

export default function FormRest() {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImage] = useState("");
  const [stars, setStars] = useState("");
  const dispatch = useDispatch();

  const newReview = (event) => {
    event.preventDefault();
    dispatch(postReview(title, review, date, imageUrl, stars));
    setTitle("");
    setReview("");
    setDate("");
    setImage("");
    setStars("");
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Comparte tu experiencia:</h1>
      <form onSubmit={newReview}>
        <label>Titulo:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>Review:</label>
        <input
          type="text"
          value={review}
          onChange={(event) => setReview(event.target.value)}
        ></input>
        <label>Fecha: </label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          placeholder="MM/YYYY"
        ></input>
        {/* <label>Foto: </label> */}
        {/* <input
          type="string"
          value={imageUrl}
          onChange={(event) => setImage(event.target.value)}
        ></input> */}
        <label>Puntuación: </label>
        <input
          type="number"
          min={0}
          max={5}
          value={stars}
          onChange={(event) => setStars(event.target.value)}
        ></input>
        <button type="submit" className="send">
          Enviar
        </button>
      </form>
    </div>
  );
}
