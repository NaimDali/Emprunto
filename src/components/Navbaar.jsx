import React from "react";

export default function Navbaar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
          <h1 class="text-primary m-0">
            <img class="me-3" src="img/icons/ET.png" alt="Icon"></img>
            Empruntout
          </h1>
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" class="nav-item nav-link active">
              Home
            </a>
            <a href="/about" class="nav-item nav-link">
              About
            </a>
          </div>
          <a href="/Login" class="btn btn-primary py-2 px-4 d-none d-lg-block">
            Login
          </a>
          <a
            href="/signup"
            class="btn btn-primary m-2 py-2 px-4 d-none d-lg-block"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
}
