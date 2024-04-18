import React from "react";
// Styles :
import "../../Styles/recipes.scss";
// Icons :
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const PreviousSearch = () => {
  const searches = [
    "pizza",
    "burger",
    "fries",
    "pepsi",
    "coco-cola",
    "briyani",
    "ice-cream",
    "cookies",
    "juice",
  ];
  return (
    <>
      <div className="previous-search-section">
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {searches.map((item) => {
            return (
              <div className="search-items" key={item}>
                {item}
              </div>
            );
          })}
        </div>
        <div className="search-bar">
          <input
            type="text"
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

export default PreviousSearch;
