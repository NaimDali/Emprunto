import { useEffect, useState } from "react";
import Comments from "../components/Comments";
import Person from "../components/Person";
import Portfolio from "../components/Portfolio";
import ContactPerson from "../components/ContactPerson";
import Barfouk from "../components/Barfouk";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [visitedUser, setVisitedUser] = useState({});
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://localhost:4000/users/${id}`);
        setVisitedUser(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <Barfouk />
      <Navbaar />
      <Person user={visitedUser} />
      <Portfolio />
      {showComments && <ContactPerson id={visitedUser.id} />}
      <Comments id={visitedUser.id} />
      <Footer />
    </div>
  );
  /*axios
    .get(process.env.API_ROUTE, { id: id })
    .then((response) => setUser(response.data));*/
  //MAKE COMMENTFIELD RENDER ONLY WHEN USER IS LOGGED IN.
}
