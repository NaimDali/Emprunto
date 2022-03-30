import React from "react";

export default function Fact(props) {
  return (
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
      <div class="fact-item text-center bg-light h-100 p-5 pt-0">
        <div class="fact-icon">
          <img src={props.imgsource} alt="Icon"></img>
        </div>
        <h3 class="mb-3">{props.title}</h3>
        <p class="mb-0">{props.description}</p>
      </div>
    </div>
  );
}
