Empruntout est une plateforme web qui offre l'option d'emprunter des objets a proximité.
Via l'inscription a notre site, le propriétaire d'un objet remplit une description detaillée de l'objet mis en disposition en fixant le prix et le montant de caution.
Quant au locataire, il cherche l'objet souhaité et choisisera l'offre qui lui convient en posant une demande de réservation en fixant la date de remise.
En cas d'acceptation, nous procèderons a organiser la rencontre dont il y aura livraison de l'objet et le paiement
![ET](https://user-images.githubusercontent.com/57017057/159036065-897e04a6-74ed-45dc-b9fa-8e9178eb77a2.png)

##### How to fetch data from back API:

- We call fetch with the url we're sending the request to, within a useEffect and then update the state of the thing we're fetching with the new data.

### Example

- Here we fetch on load of the page.
  useEffect(() => {
  fetch("http://localhost:4000/categories", {
  method: "GET",
  }).then((res) => setCategories(res.data));
  });
- Here we fetch on a certain event.
  const categoryClickHandler = (event) => {
  fetch("http://localhost:4000/products/categories", {
  method: "GET",
  body: { name: event.target.value },
  }).then((res) => setProducts(res.data));
  };
