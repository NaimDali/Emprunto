import React, { useState, useEffect } from "react";
import Article from "../components/Article";

export default function Camping() {
  const [Products, setProducts] = useState([]);
  const [Productsfiltred, setProductsfiltred] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setProducts(actualData);
        const filtrage = Products.filter((product) =>
          product.Categories.includes("camping")
        );
        setProductsfiltred(filtrage);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <h1>Camping </h1>
          <div class="col-md-12">
            <div class="row">
              <div class="products-tabs">
                <div id="tab1" class="tab-pane active">
                  <div class="products-slick row">
                    {Products.map((Product) => (
                      <div key={Productsfiltred.id}>
                        <Article
                          sourceimg={Productsfiltred.sourceimg}
                          name={Productsfiltred.name}
                          price={Productsfiltred.Price}
                          category="category"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
