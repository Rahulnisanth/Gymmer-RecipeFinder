import { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes")
      .then((response) => setRecipes(response.data))
      .catch((err) => console.log(err) || null);
  }, []);

  return (
    <div>
      <h1>Recipe-List</h1>
      <ul>
        {recipes.map((recipe) => {
          return <li key={recipe._id}>{recipe.label}</li>;
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
