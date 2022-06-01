import { useEffect, useState } from "react";
import Person from "../components/Person";
import Portfolio from "../components/Portfolio";
import Barfouk from "../components/Barfouk";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [visitedUser, setVisitedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/users/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setVisitedUser(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  useEffect(() => {
    if (user.id != visitedUser.id) setShowComments(true);
    else setShowComments(false);
  }, [user.id, visitedUser.id]);

  return (
    <div>
      <Barfouk />
      <Navbaar />
      {loading ? <h1>Loading...</h1> : <Person user={visitedUser} />}
      <button type="button" class="navbar-toggler me-40">
        <a
          href="/produitadd"
          class="btn btn-primary l-30 py-2 px-4 d-none d-lg-block"
        >
          Ajouter un produit
        </a>
      </button>

      <Portfolio />

      <Footer />
    </div>
  );
  /*axios
    .get(process.env.API_ROUTE, { id: id })
    .then((response) => setUser(response.data));*/
  //MAKE COMMENTFIELD RENDER ONLY WHEN USER IS LOGGED IN.
}
