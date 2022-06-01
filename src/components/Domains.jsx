import React from "react";
import Domain from "./Domain";

export default function Domains() {
  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <Domain
            srccode="laptops"
            title="Equipment électronique"
            sourceimg="./img/electronics.png"
          />
          <Domain
            srccode="camping"
            title="Outils de camping"
            sourceimg="./img/camping.png"
          />
          <Domain
            title="Collection sport"
            srccode="sport"
            sourceimg="./img/sport.jpg"
          />
        </div>
      </div>
    </div>
  );
}
