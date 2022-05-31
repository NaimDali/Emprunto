import React from "react";

export default function Article(props) {
  return (
    <div class="col-md-6 col-lg-4">
      <div class="product">
        <div class="product-img">
          <img src={props.sourceimg} alt=""></img>
        </div>
        <div class="product-body">
          <p class="product-category">{props.category}</p>
          <h3 class="product-name">
            <div>{props.name}</div>
          </h3>
          <h4 class="product-price">$ {props.price}</h4>
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
