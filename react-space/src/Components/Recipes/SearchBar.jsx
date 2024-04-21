import React from "react";
// Styles :
import "../../Styles/recipes.scss";
// Icons :
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = ({ onChangeHandler }) => {
  return (
    <>
      <div className="previous-search-section">
        <h2>
          Mock<span>down</span> Recipes
        </h2>
        <div className="search-bar">
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="Search for the recipes here..."
          ></input>
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
