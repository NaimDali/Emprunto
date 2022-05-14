import style from "../styles/ProductAdd.module.css";

export default function ProductAdd() {
  const nullForm = {
    name: "",
    quantity: 0,
    price: 0,
    location: "",
    images: null,
  };
  const [formState, setFormState] = useState(new FormData());
  const [message, setMessage] = useState("");
  const onInputChange = (event) => {
    if (event.target.id == "images") {
      if (!event.target.files?.length) {
        return;
      }

      Array.from(event.target.files).forEach((file) => {
        setFormState(formState.images.append(event.target.id, file));
        return;
      });
    }

    setFormState((prev) => {
      prev[event.target.id] = event.target.value;
      return prev;
    });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    fetch("htto://localhost:4000/product", {
      method: "POST",
      body: formState,
    })
      .then(setFormState(nullForm))
      .then(setMessage("Produit enregistré."))
      .catch((err) =>
        setMessage("Une erreur s'est produite. veuillez réessayer.")
      );
  };

  return (
    <>
      {message}
      <form onSubmit={onFormSubmit} className={style["form"]}>
        <label for="name">Nom du produit:</label>
        <input
          id="name"
          type="text"
          onChange={onInputChange}
          value={formState.name}
        ></input>
        <label for="quantity">Quantité:</label>
        <input
          id="quantity"
          type="text"
          onChange={onInputChange}
          value={formState.quantity}
        ></input>
        <label for="price">Prix:</label>
        <input
          id="price"
          type="number"
          onChange={onInputChange}
          value={formState.price}
        ></input>
        <label for="location">Emplacement:</label>
        <input
          id="location"
          type="text"
          onChange={onInputChange}
          value={formState.location}
        ></input>
        <button type="button" onClick={onClickHandler}>
          Images du produit:
        </button>
        <input
          multiple={false}
          name={"images"}
          onChange={onInputChange}
          ref={fileInputRef}
          style={{ display: "none" }}
          type="file"
        />
        <label for="categories">Categories:</label>
        <input id="categories" type="checkbox"></input>
      </form>
    </>
  );
}
