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
            sourceimg="./img/shop01.png"
          />
          <Domain
            srccode="cameras"
            title="Cameras Collection"
            sourceimg="./img/shop02.png"
          />
          <Domain
            title="Accessories Collection"
            srccode="accessories"
            sourceimg="./img/shop03.png"
          />
        </div>
      </div>
    </div>
  );
}
