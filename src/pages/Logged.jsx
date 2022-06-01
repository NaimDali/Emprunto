import React from "react";
import Spinner from "../components/Spinner";
import Barfouk from "../components/Barfouk";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";
import Domains from "../components/Domains";
import ArticlesTab from "../components/ArticlesTab";

export default function Home() {
  return (
    <div>
      <Spinner />
      <Barfouk />
      <Navbaar />
      <Domains />
      <ArticlesTab />
      <Footer />
    </div>
  );
}
