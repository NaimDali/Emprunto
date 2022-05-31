import React from "react";
import Domain from "./Domain";

export default function Domains() {
  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <Domain
            srccode="laptops"
            title="electronic equipment"
            sourceimg="./img/electronics.png"
          />
          <Domain
            srccode="camping"
            title="Camping items"
            sourceimg="./img/camping.png"
          />
          <Domain
            title="Sport collection"
            srccode="sport"
            sourceimg="./img/sport.png"
          />
        </div>
      </div>
    </div>
  );
}
