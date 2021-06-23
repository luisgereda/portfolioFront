import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPhoto } from "../../store/restSpace/actions";

export default function FormRestPhoto() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImage] = useState("");

  const dispatch = useDispatch();

  const newPhoto = (event) => {
    event.preventDefault();
    dispatch(postPhoto(title, description, imageUrl));
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <div>
      <h1>Comparte tus photos con nosotros:</h1>
      <form onSubmit={newPhoto}>
        <label>Titulo:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label>Review:</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <label>Foto: </label>
        <input
          type="string"
          value={imageUrl}
          onChange={(event) => setImage(event.target.value)}
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
