// Components :
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import Recipes from "./Components/Recipes/Recipes";
import Footer from "./Components/Footer/Footer";
// Routers :
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles :
import "./Styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
