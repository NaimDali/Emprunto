import axios from "axios";
import { useState } from "react";

export default function GestionProfile() {
  const [file, setFile] = useState();
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("avatar", file, file.name);
    console.log(axios.post("http://localhost:4000/users/upload", formData, {headers: {
      
    }}));
  };
  return (
    <>
      <input type="file" onChange={onFileChange} name="avatar" />
      <button onClick={onFileUpload}>Upload!</button>
    </>
  );
}
