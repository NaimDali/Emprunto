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
              title="Design Approach"
              description="Facile a tout moment"
            />
            <Fact
              imgsource="img/icons/icon-2.png"
              title="Innovative Solutions"
              description="Facile a tout moment"
            />
            <Fact
              imgsource="img/icons/icon-3.png"
              title="Design Approach"
              description="Facile a tout moment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
