import Navbaar from "../components/Navbaar";
import ProductCard from "../components/ProductCard";

export default function Product() {
  const product = fetch(process.env.API_ROUTE + "/products/" + id, {
    method: "get",
  });

  return (
    <>
      <Navbaar></Navbaar>
      <ProductCard product={product}></ProductCard>
    </>
  );
}
