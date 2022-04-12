import React from "react";
import Spinner from "../components/Spinner";
import Barfouk from "../components/Barfouk";
import Navbaar from "../components/Navbaar";
import Homepic from "../components/Homepic";
import Facts from "../components/Facts";
import About from "../components/About";
import Services from "../components/Services";
import Trustus from "../components/Trustus";
import Team from "../components/Team";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Spinner />
      <Barfouk />
      <Navbaar />
      <Homepic />
      <Facts />
      <About />
      <Services />
      <Trustus />
      <Team />
      <Contactus />
      <Footer />
    </div>
  );
}
