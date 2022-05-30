import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../components/Article";

export default function Laptops() {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/products/1")
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setProduct(actualData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="container">
      <h2> product details: </h2>
      <ul>
        <li> id= {Product.id}</li>
        <li> name= {Product.name}</li>
        <li> username= {Product.price}</li>
      </ul>
    </div>
  );
}
