import "./App.css";
import Home from "./pages/Home";
import Logged from "./pages/Logged";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" name="Empruntout Page" element={<Home />} />
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/signup" name="sign up Page" element={<SignUp />} />
        <Route exact path="/home" name="home page" element={<Logged />} />
      </Routes>
    </Router>
  );
}

export default App;
