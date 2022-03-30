import React from "react";
import Service from "./Service";

export default function Services() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h4 class="section-title">Our Services</h4>
            <h1 class="display-5 mb-4">
              We Focused On Modern Architecture And Interior Design
            </h1>
          </div>
          <div class="row g-4">
            <Service
              iconsource="img/icons/icon-5.png"
              imgsource="img/service-1.jpg"
              title="Architecture"
              description="Rent your needs"
            />
            <Service
              iconsource="img/icons/icon-5.png"
              imgsource="img/service-1.jpg"
              title="Architecture"
              description="Rent your needs"
            />
            <Service
              iconsource="img/icons/icon-5.png"
              imgsource="img/service-1.jpg"
              title="Architecture"
              description="Rent your needs"
            />
            <Service
              iconsource="img/icons/icon-5.png"
              imgsource="img/service-1.jpg"
              title="Architecture"
              description="Rent your needs"
            />
            <Service
              iconsource="img/icons/icon-5.png"
              imgsource="img/service-1.jpg"
              title="Architecture"
              description="Rent your needs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
