import React from "react";

export default function Product(props) {
  return (
    <div class="col-md-6">
      <div class="product-widget">
        <div class="product-img">
          <img src="./img/product07.png" alt=""></img>
        </div>
        <div class="product-body">
          <p class="product-category">{props.category}</p>
          <h3 class="product-name">
            <a href="#">{props.name}</a>
          </h3>
          <h4 class="product-price">${props.price}</h4>
        </div>
      </div>
    </div>
  );
}
