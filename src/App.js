import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
