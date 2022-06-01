import { axios } from "axios";
import React, { useState, useEffect } from "react";

import Article from "./Article";

export default function ArticlesTab() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setProducts(actualData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <h1> les outils valables</h1>
          <div class="col-md-12">
            <div class="row">
              <div class="products-tabs">
                <div id="tab1" class="tab-pane active">
                  <div class="products-slick row">
                    {Products.slice(-9).map((Product) => (
                      <Article
                        key={Product.id}
                        sourceimg={Product.sourceimg}
                        name={Product.name}
                        price={Product.price}
                        category={Product.category}
                      />
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
