import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FormAddProduct() {
  const [formState, setFormState] = useState({
    name: "",
    price: 0,
    availability: false,
    categories: "",
    sourceimg: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  const onCategoryChange = (event) => {
    if (event.target.id == "electronics")
      setFormState((prev) => {
        return { categories: "electronics", ...prev };
      });
    if (event.target.id == "camping")
      setFormState((prev) => {
        return { categories: "camping", ...prev };
      });
    if (event.target.id == "sport")
      setFormState((prev) => {
        return { categories: "sport", ...prev };
      });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:4000/products",
      formState
    );
    window.location.href = "/";
  };

  return (
    <div class="container  mt-5 md-3 ">
      <div class="row g-5 ">
        <div class="col-md-2"></div>

        <div class="card col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
          <h1>ajouter les détails du produit</h1>

          <form
            class=" wow fadeInUp"
            data-wow-delay="0.3s"
            onSubmit={submitHandler}
          >
            <div class="mb-3">
              <label for="name" class="form-label">
                Nom du produit
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                onChange={onChange}
                value={formState.name}
              ></input>
            </div>

            <div class="mb-3">
              <label for="category" class="form-label">
                Categorie du produit
              </label>
              <div class="mb-3">
                <label for="electronics" class="form-label m-2">
                  Electronique
                </label>
                <input
                  type="checkbox"
                  id="electronics"
                  value={formState.categories == "electronics" ? true : false}
                  onChange={onCategoryChange}
                ></input>
              </div>
              <div class="mb-3">
                <label for="camping" class="form-label m-2">
                  Camping
                </label>
                <input
                  type="checkbox"
                  id="camping"
                  value={formState.categories == "camping" ? true : false}
                  onChange={onCategoryChange}
                ></input>
              </div>
              <div class="mb-3">
                <label for="sport" class="form-label m-2">
                  Sport
                </label>
                <input
                  type="checkbox"
                  id="sport"
                  value={formState.categories == "sport" ? true : false}
                  onChange={onCategoryChange}
                ></input>
              </div>
            </div>

            <div class="mb-3">
              <label for="price" class="form-label">
                Prix
              </label>
              <input
                type="number"
                class="form-control"
                id="price"
                name="price"
                value={formState.price}
                onChange={onChange}
              ></input>
            </div>

            <div class="mb-3">
              <label for="availability" class="form-label m-2">
                Disponibilité
              </label>
              <input
                type="checkbox"
                id="availabilty"
                name="availabilty"
                value={formState.availability}
                onChange={onChange}
              ></input>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                source de votre image
              </label>
              <input
                type="text"
                class="form-control"
                name="sourceimg"
                id="email"
                value={formState.sourceimg}
                onChange={onChange}
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
