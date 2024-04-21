import React, { useEffect, useState } from "react";
import axios from "axios";
// Micro-components :
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
// Styles :
import "../../Styles/recipes.scss";
import "../../Styles/card.scss";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes")
      .then((response) => setRecipes(response.data))
      .catch((err) => console.log(err) || null);
  }, []);
  console.log(recipes);
  return (
    <div className="recipe-container">
      <SearchBar />
      <div className="wrapper">
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe._id} data={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
