import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Footer from "./components/Footer/Footer";
import Products from "./views/Products";
import ModalCart from "./components/ModalCart/ModalCart";
import Details from "./views/Details";
import About from "./views/About";

function App() {
  return (
    <div className=" flex flex-col min-h-[100vh]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ModalCart />
      <Footer />
    </div>
  );
}

export default App;
