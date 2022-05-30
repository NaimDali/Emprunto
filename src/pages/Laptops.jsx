import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../components/Article";

export default function Laptops() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/products/20")
      .then((res) => {
        console.log("******************************");
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div class="container">
      <h2> product details: </h2>
      <ul>
        <li> id= {Product.id}</li>
        <li> name= {Product.name}</li>
        <li> username= {Product.Price}</li>
      </ul>
    </div>
  );
}
