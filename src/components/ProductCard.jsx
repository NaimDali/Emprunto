import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <>
      <div className={styles["card"]} onClick="">
        <img
          src={product.thumbnail}
          className={styles["card_thumbnail"]}
          alt={`${product.name}'s thumbnail.`}
        ></img>
        <h1 className={styles["card_header"]}>{product.name}</h1>
        <sub className={styles["card_tags"]}>
          {product.categories.map((category) => category.name + " ")}
        </sub>
        {product.availability ? (
          <h4 style={"color: green"}>Available</h4>
        ) : (
          <h4 style={"color :red"}>Not Available</h4>
        )}
      </div>
    </>
  );
}
