import { useState } from "react";
import { useDispatch } from "react-redux";
import { postPhotoRest } from "../../store/restSpace/actions";
import axios from "axios";

export default function FormRestPhoto() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();

  async function newPhoto(event) {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "soqj5w68");
    data.append("cloud_name", "dyzzo8hq1");
    try {
      const response2 = await axios.post(
        "https://api.cloudinary.com/v1_1/dyzzo8hq1/image/upload",
        data
      );
      // console.log(response2.data.url);
      setImageUrl(response2.data.url);
    } catch (e) {
      console.log(e);
    }
  }

  const submit = (event) => {
    event.preventDefault();
    dispatch(postPhotoRest(title, description, imageUrl));
    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>Comparte tus fotos:</h1>
      <form onSubmit={submit}>
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
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <label>Foto: </label>
        <input type="file" onChange={newPhoto}></input>
        <button type="submit" className="send">
          Enviar
        </button>
      </form>
    </div>
  );
}
