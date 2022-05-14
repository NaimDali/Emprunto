import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import style from "../styles/Search.module.css";
export default function Search() {
  const [categories, setCategories] = useState();
  const [selectedCategories, setSelectedCategories] = useState();
  const [products, setProducts] = useState();
  useEffect(async () => {
    const response = await fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
    console.log(categories);
  }, []);
  const categoryClickHandler = async (event) => {
    setSelectedCategories([event.target.value, ...selectedCategories]);
    const response = await fetch("http://localhost:4000/products/categories", {
      method: "POST",
      body: { ids: selectedCategories },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  return (
    <div className={style["search_menu"]}>
      <div className={style["categories_section"]}>
        {categories &&
          categories.map((category) => {
            return (
              <button
                value={category.id}
                onClick={categoryClickHandler}
                className={
                  selectedCategories && selectedCategories.includes(category.id)
                    ? "active-btn"
                    : ""
                }
              >
                {category.name} {category.numberOfProducts}
              </button>
            );
          })}
      </div>
      <div className={style["products_section"]}>
        {products ? (
          products.map((product) => {
            <ProductCard product={product}></ProductCard>;
          })
        ) : (
          <h1>Please select a category.</h1>
        )}
      </div>
    </div>
  );
}
