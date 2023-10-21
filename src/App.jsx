import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Footer from "./components/Footer/Footer";
import Products from "./views/Products";

function App() {
  return (
    <div className=" flex flex-col min-h-[100vh]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
