import React from "react";

export default function Domain(props) {
  return (
    <div class="col-md-4 col-xs-6">
      <div class="shop">
        <div class="shop-img">
          <img src={props.sourceimg} alt=""></img>
        </div>
        <div class="shop-body">
          <h3>{props.title}</h3>
          <a href={props.srccode} class="cta-btn">
            Shop now <i class="fa fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
