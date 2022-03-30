import React from "react";
import Spinner from "../components/Spinner";
import Barfouk from "../components/Barfouk";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";
import Domains from "../components/Domains";
import ArticlesTab from "../components/ArticlesTab";
import HotDeal from "../components/HotDeal";
import Boutique from "../components/Boutique";

export default function Home() {
  return (
    <div>
      <Spinner />
      <Barfouk />
      <Navbaar />
      <Domains />
      <ArticlesTab />
      <HotDeal />
      <Boutique />
      <Footer />
    </div>
  );
}
