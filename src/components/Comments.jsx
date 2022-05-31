import axios from "axios";
import { useEffect, useState } from "react";

export default function Comments({ id }) {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000" + "/comments", { id: id })
      .catch((err) =>
        setMessage("Erreur au cours du chargement des commentaires.")
      )
      .finally((response) => {
        setComments(response.data);
        !comments && setMessage("Aucun commentaires pour le moment.");
      });
  });
  return (
    <>
      {message}
      {comments.map((comment) => {
        <>
          <h1>{comment.written_by}</h1>
          <p>{comment.content}</p>
          <sub>{comment.written_at}</sub>
        </>;
      })}
    </>
  );
}
