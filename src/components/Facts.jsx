import React from "react";
import Fact from "./Fact";

export default function Facts() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container pt-5">
          <div class="row g-4">
            <Fact
              imgsource="img/icons/icon-2.png"
              title="des produits variés"
              description="il existe plusieurs produits dans différents domaines"
            />
            <Fact
              imgsource="img/icons/icon-4.png"
              title="Une communication facile"
              description="Un moyen de communication facile pour se reunir avec le propriétaire du produit"
            />
            <Fact
              imgsource="img/icons/icon-3.png"
              title="approche logique"
              description="emprunter le produit a cout bas mieux de l'acheter et perdre de l'argent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
