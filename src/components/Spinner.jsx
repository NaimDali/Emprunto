import React from "react";

export default function Spinner() {
  return (
    <div
      id="spinner"
      class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div
        class="spinner-border position-relative text-primary"
        role="status"
      ></div>
      <img
        class="position-absolute top-50 start-50 translate-middle"
        src="img/icons/icon-1.png"
        alt="Icon"
      ></img>
    </div>
  );
}
