import React from "react";

export default function Member(props) {
  return (
    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
      <div class="team-item position-relative">
        <div class="position-relative">
          <img class="img-fluid" src={props.imgsource} alt=""></img>
          <div class="team-social text-center">
            <a class="btn btn-square" href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="btn btn-square" href="">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="btn btn-square" href="">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div class="bg-light text-center p-4">
          <h3 class="mt-2">{props.name}</h3>
          <span class="text-primary">software engineer</span>
        </div>
      </div>
    </div>
  );
}
