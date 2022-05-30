import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
export default function Search() {
  const [categories, setCategories] = useState([{}]);
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:4000/categories", {
      method: "GET",
    }).then((res) => setCategories(res.data));
  });
  const categoryClickHandler = (event) => {
    fetch("http://localhost:4000/products/categories", {
      method: "GET",
      body: { name: event.target.value },
    }).then((res) => setProducts(res.data));
  };
  return (
    <>
      {categories.map((category) => {
        return (
          <button value={category.id} onClick={categoryClickHandler}>
            {category.name} {category.numberOfProducts}
          </button>
        );
      })}
      {products
        ? products.map((product) => {
            <ProductCard product={product}></ProductCard>;
          })
        : "Please select a category."}
    </>
  );
}
