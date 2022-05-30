import "./App.css";
import Home from "./pages/Home";
import Logged from "./pages/Logged";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Product from "./components/Product";
import Laptops from "./pages/Laptops";
import SearchPage from "./pages/Search";
import Camping from "./pages/Camping";
import FormAddProduct from "./pages/FormAddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" name="Empruntout Page" element={<Logged />} />
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/signup" name="sign up Page" element={<SignUp />} />
        <Route exact path="/about" name="home page" element={<Home />} />
        <Route path="/profile/:id" name="user profile" element={<Profile />} />
        <Route path="/produit/:id" name="page produit" element={<Product />} />
        <Route
          path="/recherche"
          name="recherche produit"
          element={<SearchPage />}
        />
        <Route path="/laptops" name="laptops page" element={<Laptops />} />
        <Route path="/Camping" name="Camping page" element={<Camping />} />
        <Route
          path="/ajouterproduitform"
          name="formulaire ajouter produit"
          element={<FormAddProduct />}
        />
      </Routes>
    </Router>
  );
}

export default App;
