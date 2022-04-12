import { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import CommentField from "../components/CommentField";
import Comments from "../components/Comments";

export default function Profile({ id }) {
  const [user, setUser] = useState({
    id: 1,
    name: { first: "Hedi", last: "Khemiri" },
    location: { city: "Soukra", state: "Ariana" },
    phone: "95206781",
    picture: "",
  });
  /*axios
    .get(process.env.API_ROUTE, { id: id })
    .then((response) => setUser(response.data));*/
  //MAKE COMMENTFIELD RENDER ONLY WHEN USER IS LOGGED IN.
  return (
    <>
      <UserCard user={user} />
      <CommentField id={id} />
      <br />
      <Comments id={id} />
    </>
  );
}
