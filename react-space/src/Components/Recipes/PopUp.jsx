import React from "react";
// Styles :
import "../../Styles/popup.scss";
// Sample-image :
import picture from "../../Assets/Images/img1.jpg";

const PopUp = ({ recipe, togglePopup }) => {
  const {
    label,
    url,
    servings,
    totalDaily,
    cuisineType,
    dishType,
    calories,
    healthLabels,
    ingredientLines,
  } = recipe;

  return (
    <div className="popup">
      <div className="popup__content">
        <div className="top-section">
          <div className="picture">
            <img src={picture} alt="none" />
          </div>
          <div className="top-contents">
            <div className="others">
              <p key="1">
                {" "}
                <strong>Yields:</strong> {servings} Servings{" "}
              </p>
              <p key="2">
                {" "}
                <strong>Calories:</strong> {Math.ceil(calories)} / Servings{" "}
              </p>
              <p key="3">
                {" "}
                <strong>Proteins:</strong>{" "}
                {Math.ceil(totalDaily.PROCNT.quantity)} / Servings{" "}
              </p>
              <p key="4">
                {" "}
                <strong>Category:</strong> {cuisineType}{" "}
              </p>
              <p key="5">
                {" "}
                <strong>Dish Type:</strong> {dishType}{" "}
              </p>
            </div>
            <div className="tags">
              {healthLabels.map((item, idx) => {
                if (idx < 3) {
                  return <span id={item}># {item}</span>;
                }
                idx++;
                return null;
              })}
            </div>
          </div>
        </div>
        <div className="main-section">
          <h2>{label}</h2>
          {/* Ingredients */}
          {ingredientLines.map((item) => {
            return <p id={item}>{item}</p>;
          })}
        </div>
        <div className="bottom">
          <a href={url}>view Instructions</a>
          <button onClick={togglePopup}>go back</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
