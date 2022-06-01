import axios from "axios";
import React, { useState, useEffect } from "react";
import Article from "../components/Article";

export default function Camping() {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Productsfiltred, setProductsfiltred] = useState([]);

  useEffect(async () => {
    const response = await axios.get("http://localhost:4000/products");

    setProducts(response.data);
    const filtrage = Products.filter(
      (product) => product.categories == "camping"
    );
    setProductsfiltred(filtrage);
    setLoading(false);
  }, [Products]);

  return (
    <>
      {Loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div class="section">
          <div class="container">
            <div class="row">
              <h1>outils de camping </h1>
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
                            category="Camping"
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
      )}
    </>
  );
}
