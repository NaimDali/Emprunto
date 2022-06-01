import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../components/Article";

export default function Portfolio() {
  const [Products, setProducts] = useState([]);
  const [Productsfiltred, setProductsfiltred] = useState([]);

  useEffect(async () => {
    const response = await axios.get("http://localhost:4000/products");

    setProducts(response.data);
    const filtrage = Products.filter((product) => product.ownerId == "3");
    setProductsfiltred(filtrage);
  }, []);

  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <h1> Portfolio </h1>
          <div class="col-md-12">
            <div class="row">
              <div class="products-tabs">
                <div id="tab1" class="tab-pane active">
                  <div class="products-slick row">
                    {Productsfiltred.map((Product) => (
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
