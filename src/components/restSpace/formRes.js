import { useState } from "react";

export default function FormRest() {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [stars, setStars] = useState("");

  const newReview = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Comparte tus fotos con nosotros:</h1>
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
          type="text"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>
        <label>Foto: </label>
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        ></input>
        <label>Puntuación: </label>
        <input
          type="text"
          value={stars}
          onChange={(event) => setStars(event.target.value)}
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
