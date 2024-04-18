import React from "react";
// Micro-components :
import PreviousSearch from "./PreviousSearch";
// Styles :
import "../../Styles/recipes.scss";
const Recipes = () => {
  return (
    <div className="recipe-container">
      <PreviousSearch />
    </div>
  );
};

export default Recipes;
