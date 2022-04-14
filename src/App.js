import "./App.css";
import Home from "./pages/Home";
import Logged from "./pages/Logged";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" name="Empruntout Page" element={<Home />} />
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/home" name="home page" element={<Logged />} />
        <Route path="/profile/:id" name="user profile" element={<Profile />} />
        <Route path="/produit/:id" name="page produit" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
