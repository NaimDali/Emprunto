import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FormAddProduct() {
  const [formState, setFormState] = useState({
    name: "",
    price: 0,
    availability: false,
    categories: [],
  });
  const [categoriesIds, setCategoriesIds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => setCategoriesIds(response.data));
  });

  const onNameChange = (event) => {
    setFormState((prev) => {
      return { name: event.target.value, ...prev };
    });
  };
  const onAvailabiltyChange = (event) => {
    setFormState((prev) => {
      return { availabilty: event.target.value, ...prev };
    });
  };
  const onPriceChange = (event) => {
    setFormState((prev) => {
      return { price: event.target.value, ...prev };
    });
  };
  const onCategorieChange = (event) => {
    if (event.target.value == true)
      setFormState((prev) => {
        let result = prev.categories.concat([
          categoriesIds.find((element) => element == event.target.id),
        ]);
        return { categories: result, ...prev };
      });
    else {
      setFormState((prev) => {
        let result = prev.categories.filter(
          (element) =>
            [element] ==
            categoriesIds.find((element) => element == event.target.id)
        );
        return { categories: result, ...prev };
      });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const response = axios.post("http://localhost:4000/products", formState);
  };

  return (
    <div class="container  mt-5 md-3 ">
      <div class="row g-5 ">
        <div class="col-md-2"></div>

        <div class="card col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
          <h1>ajouter les détails du produit</h1>

          <form class=" wow fadeInUp" data-wow-delay="0.3s">
            <div class="mb-3">
              <label for="name" class="form-label">
                Nom du produit
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={formState.name}
                onChange={onNameChange}
              ></input>
            </div>

            <div class="mb-3">
              <label for="price" class="form-label">
                Prix
              </label>
              <input
                type="number"
                class="form-control"
                id="price"
                value={formState.price}
                onChange={onPriceChange}
              ></input>
            </div>

            <div class="mb-3">
              <label for="availability" class="form-label m-2">
                Disponibilité
              </label>
              <input
                type="checkbox"
                id="availabilty"
                value={formState.availability}
                onChange={onAvailabiltyChange}
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
            <div class="mb-3">
              {categoriesIds.map((category) => (
                <>
                  <label for="categories">{category.name}</label>
                  <input
                    type="checkbox"
                    id={category.name}
                    value={formState.categories.includes(category.id)}
                    onChange={onCategorieChange}
                  ></input>
                </>
              ))}
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
