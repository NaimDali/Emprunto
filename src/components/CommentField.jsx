import axios from "axios";
import { useState } from "react";

export default function CommentField({ id }) {
  const [comment, setComment] = useState({
    content: "",
    written_at: null,
    written_by: null, //USE SESSION TO FETCH CURRENT LOGGED IN USER
    profile_id: id,
  });
  const [message, setMessage] = useState("");
  const timedMessage = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(""), 5000);
  };
  const commentChange = (event) => {
    setComment((prev) => {
      return {
        content: event.target.value,
        written_at: null,
        written_by: prev.written_by,
        profile_id: prev.profile_id,
      };
    });
  };
  const commentSubmit = async (event) => {
    setComment((prev) => {
      prev["written_at"] = new Date();
      return prev;
    });
    const response = await axios
      .post(process.env.API_ROUTE + "/comments", comment)
      .catch((err) => timedMessage("Une erreur s'est prévenue."))
      .finally(() => timedMessage("Commentaire bien sauvegardé!"));

    event.preventDefault();
  };

  return (
    <>
      <label>Ecrire un commentaire pour cet utilisateur.</label>
      <input
        type="text"
        onChange={commentChange}
        value={comment.content}
      ></input>
      <button type="submit" onClick={commentSubmit}>
        Commenter.
      </button>
      {message && <h1>{message}</h1>}
    </>
  );
}
