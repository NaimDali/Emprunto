import React from "react";
import Member from "./member";

export default function Team() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h4 class="section-title">Team Members</h4>
          </div>
          <div class="row g-0 team-items">
            <Member imgsource="img/hedi.jpg" name="Mohamed Hedi Khemiri" />
            <Member imgsource="img/naim.jpg" name="Naim Dali Hassen" />
          </div>
        </div>
      </div>
    </div>
  );
}
