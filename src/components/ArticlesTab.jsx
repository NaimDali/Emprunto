import React from "react";

import Article from "./Article";

export default function ArticlesTab() {
  


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
                    <Article
                      sourceimg="./img/product01.png"
                      Category="category"
                      name="pc"
                      price="$990.00"
                    />
                    <Article
                      sourceimg="./img/product02.png"
                      Category="category"
                      name="pc"
                      price="$990.00"
                    />
                    <Article
                      sourceimg="./img/product03.png"
                      price="$990.00"
                      Category="category"
                      name="pc"
                    />
                    <Article
                      sourceimg="./img/product04.png"
                      price="$980.00"
                      Category="category"
                      name="pc"
                    />
                  </div>
                  <div id="slick-nav-1" class="productsslicknav"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
