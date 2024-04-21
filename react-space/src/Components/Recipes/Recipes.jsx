import React, { useState } from "react";
// Micro-components :
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
// Styles :
import "../../Styles/recipes.scss";
import "../../Styles/card.scss";

const Recipes = ({ recipes }) => {
  const [searchQuery, setSearchQuery] = useState("");

  //Search-bar optimization:
  const onSearchFunction = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchQuery(searchString);
  };

  const filterRecipes = recipes.filter((recipe) => {
    return recipe.label.toLocaleLowerCase().includes(searchQuery);
  });
  console.log(recipes);
  return (
    <div className="recipe-container">
      <SearchBar onChangeHandler={onSearchFunction} />
      <div className="wrapper">
        {filterRecipes.map((recipe) => {
          return <RecipeCard key={recipe._id} data={recipe} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
