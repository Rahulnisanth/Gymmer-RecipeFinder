import { useState, useEffect } from "react";
import axios from "axios";
// Components :
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Components/Home/Home";
import Recipes from "./Components/Recipes/Recipes";
import Loader from "./Components/Loader";
// Routers :
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styles :
import "./Styles/index.scss";

function App() {
  // Data fetching from node-server:
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes")
      .then((response) => {
        setRecipes(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data => ", err);
        setLoading(false);
      });
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {loading ? (
          <Route path="/recipes" element={<Loader />} />
        ) : (
          <Route path="/recipes" element={<Recipes recipes={recipes} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
