import { useEffect } from "react";

export default function Search() {
  const [categories, setCategories] = useState([{}]);
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    response = fetch(process.env.API_ROUTE + "/categories", { method: "GET" });
    setCategories(response.data);
  });
  const categoryClickHandler = (event) => {
    response = fetch(process.env.API_ROUTE + "/products/categories", {
      method: "GET",
      body: { name: event.target.value },
    });
    setProducts(response.data);
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
