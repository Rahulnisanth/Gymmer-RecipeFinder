import React from "react";
// Micro-components :
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
// Styles :
import "../../Styles/recipes.scss";
import "../../Styles/card.scss";
// Sample-data :
import Data from "./Data";
const Recipes = () => {
  return (
    <div className="recipe-container">
      <SearchBar />
      <div className="wrapper">
        {Data.map((data) => {
          return <RecipeCard data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
