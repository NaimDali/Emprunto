import React from "react";

export default function Service(props) {
  return (
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
      <div class="service-item d-flex position-relative text-center h-100">
        <img class="bg-img" src={props.imgsource} alt=""></img>
        <div class="service-text p-5">
          <img class="mb-4" src={props.iconsource} alt="Icon"></img>
          <h3 class="mb-3">{props.title}</h3>
          <p class="mb-4">{props.description}</p>
          <a class="btn" href="">
            <i class="fa fa-plus text-primary me-3"></i>Read More
          </a>
        </div>
      </div>
    </div>
  );
}
