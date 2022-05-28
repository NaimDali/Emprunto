import axios from "axios";
import React, { useState } from "react";
import Article from "../components/Article";

export default function Laptops() {
  const [Product, setProduct] = useState({});

  const getProduct = () => {
    axios
      .get("https://localhost:3000/products/20")
      .then((res) => {
        console.log("******************************");
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="container">
      <h2> product details: </h2>
      {getProduct()}
      <ul>
        <li> id= {Product.id}</li>
        <li> name= {Product.name}</li>
        <li> username= {Product.Price}</li>
      </ul>
    </div>
  );
}
