import axios from "axios";
import { useEffect, useState } from "react";

export default function AjoutProduit() {
  const [formState, setFormState] = useState({
    name: "",
    price: 0,
    availability: false,
    categories: [],
  });
  const [categoriesIds, setCategoriesIds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/categories")
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
    <>
      <form>
        <label for="name">Nom du produit:</label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={onNameChange}
        ></input>
        <label for="price">Le prix:</label>
        <input
          type="number"
          id="price"
          value={formState.price}
          onChange={onPriceChange}
        ></input>
        <label for="availabilty">Disponibilité:</label>
        <input
          type="checkbox"
          id="availabilty"
          value={formState.availability}
          onChange={onAvailabiltyChange}
        ></input>

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
      </form>
    </>
  );
}
