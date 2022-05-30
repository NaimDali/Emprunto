import React, { useEffect, useState } from "react";
import Article from "../components/Article";

export default function Laptops() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")

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
          <h1>Best Prices </h1>
          <div class="col-md-12">
            <div class="row">
              <div class="products-tabs">
                <div id="tab1" class="tab-pane active">
                  <div class="products-slick row">
                    {Products.map((Product) => (
                      <div key={Product.id}>
                        <Article
                          sourceimg={Product.sourceimg}
                          name={Product.name}
                          price={Product.Price}
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
