import React from "react";
import Domain from "./Domain";

export default function Domains() {
  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <Domain
            srccode="laptops"
            title="Laptop Collection"
            sourceimg="./img/electronics.png"
          />
          <Domain
            srccode="Camping"
            title="Camping items"
            sourceimg="./img/camping.png"
          />
          <Domain
            title="Sport collection"
            srccode="accessories"
            sourceimg="./img/sport.png"
          />
        </div>
      </div>
    </div>
  );
}
