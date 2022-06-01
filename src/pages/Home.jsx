import React, { useContext } from "react";
import Spinner from "../components/Spinner";
import Barfouk from "../components/Barfouk";
import Navbaar from "../components/Navbaar";
import Homepic from "../components/Homepic";
import Facts from "../components/Facts";
import About from "../components/About";
import Team from "../components/Team";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import AuthenticationContext from "../context/AuthenticationContext";

export default function Home() {
  //const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {
        //user && <h1>Hello {user.email}</h1>
      }
      <Spinner />
      <Barfouk />
      <Navbaar />
      <Homepic />
      <Facts />
      <About />
      <Team />
      <Contactus />
      <Footer />
    </div>
  );
}
