import React from "react";

export default function Article(props) {
  return (
    <div class="col-md-6 col-lg-4">
      <div class="product">
        <div class="product-img">
          <img src="./img/product01.png" alt=""></img>
          <div class="product-label">
            <span class="sale">{props.pourcentage}</span>
            <span class="new">NEW</span>
          </div>
        </div>
        <div class="product-body">
          <p class="product-category">Category</p>
          <h3 class="product-name">
            <a href="#">product name goes here</a>
          </h3>
          <h4 class="product-price">
            {props.newprice}
            <del class="product-old-price">{props.oldprice}</del>
          </h4>

          <div class="product-btns">
            <button class="quick-view">
              <i class="fa fa-eye"></i>
              <span class="tooltipp">quick view</span>
            </button>
          </div>
        </div>
        <div class="add-to-cart">
          <button class="add-to-cart-btn">
            <i class="fa fa-shopping-cart"></i> add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
