import { useState } from "react";

export default function FormCountry() {
  const [title, setTitle] = useState("");
  const [description, setDecription] = useState("");

  const newPhoto = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Comparte tus fotos con nosotros:</h1>
      <form onSubmit={newPhoto}>
        <label>Pais:</label>
        <select></select>
        <label>City:</label>
        <select></select>
        <label>Titulo:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDecription(event.target.value)}
        ></input>
        <label>Imagen</label>
        <input type="text"></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
