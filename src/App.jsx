import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return(
<>
<NavBar /> 
<Routes>
<Route path="/" element={<Home/>} />
</Routes>
<Footer/>
</>



  ) 
}

export default App;
