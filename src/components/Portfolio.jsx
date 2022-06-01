import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../components/Article";

export default function Portfolio({ id }) {
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:4000/users/products/${id}`,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    setProducts(response.data);
    setLoading(false);
  }, [Products]);

  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div class="section">
          <div class="container">
            <div class="row">
              <h1> Portfolio </h1>
              <div class="col-md-12">
                <div class="row">
                  <div class="products-tabs">
                    <div id="tab1" class="tab-pane active">
                      <div class="products-slick row">
                        {Products.map((Product) => (
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
      )}
    </>
  );
}
