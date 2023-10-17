import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";

function App() {
  return(
<>
<NavBar /> 
<Routes>
<Route path="/" element={<Home/>} />


</Routes>

</>



  ) 
}

export default App;
