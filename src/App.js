import "./App.css";
import Home from "./pages/Home";
import Logged from "./pages/Logged";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Laptops from "./pages/Laptops";
import Camping from "./pages/Camping";
import FormAddProduct from "./pages/FormAddProduct";
import Sport from "./pages/Sport";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" name="Empruntout Page" element={<Logged />} />
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/signup" name="sign up Page" element={<SignUp />} />
        <Route exact path="/about" name="home page" element={<Home />} />
        <Route
          path="/profile/:id"
          name="user profile"
          element={<Profile />}
        ></Route>

        <Route path="/laptops" name="laptops page" element={<Laptops />} />

        <Route
          path="/produitadd"
          name="ajouter produit"
          element={<FormAddProduct />}
        />

        <Route path="/camping" name="Camping page" element={<Camping />} />
        <Route path="/sport" name="sport page" element={<Sport />} />
      </Routes>
    </Router>
  );
}

export default App;
