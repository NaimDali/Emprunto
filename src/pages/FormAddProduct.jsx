import React from "react";

export default function FormAddProduct() {
  return (
    <div class="container  mt-5 md-3 ">
      <div class="row g-5 ">
        <div class="col-md-2"></div>

        <div class="card col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
          <h1>ajouter les détails du produit</h1>

          <form class=" wow fadeInUp" data-wow-delay="0.3s">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Nom du produit
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
              ></input>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Prix
              </label>
              <input
                type="number"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
              ></input>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                valable
              </label>
              <input
                type="number"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                source de votre image
              </label>
              <input
                type="text"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              ></input>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
