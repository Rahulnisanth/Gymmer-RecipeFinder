import React from "react";
// Micro-components :
import PreviousSearch from "./PreviousSearch";
import RecipeCard from "./RecipeCard";
// Styles :
import "../../Styles/recipes.scss";
import "../../Styles/card.scss";
// Sample-data :
import Data from "./Data";
const Recipes = () => {
  return (
    <div className="recipe-container">
      <PreviousSearch />
      <div className="wrapper">
        {Data.map((data) => {
          return <RecipeCard data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
