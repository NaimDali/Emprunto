import { useState } from "react";
import Comments from "../components/Comments";
import Person from "../components/Person";
import Portfolio from "../components/Portfolio";
import ContactPerson from "../components/ContactPerson";
import Spinner from "../components/Spinner";
import Barfouk from "../components/Barfouk";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";

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
    <div>
      <Spinner />
      <Barfouk />
      <Navbaar />
      <Person user={user} />
      <Portfolio />
      <ContactPerson id={id} />
      <Comments id={id} />
      <Footer />
    </div>
  );
}
