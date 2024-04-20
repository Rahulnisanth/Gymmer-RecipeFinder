import React from "react";
// Styles :
import "../../Styles/popup.scss";
import picture from "../../Assets/Images/img2.jpg";

const PopUp = ({ recipe, togglePopup }) => {
  const {
    // image,
    title,
    category,
    yields,
    dishType,
    calories,
    healthLabels,
    ingredients,
  } = recipe;

  return (
    <div className="popup">
      <div className="popup__content">
        <div className="top-section">
          <div className="picture">
            <img src={picture} alt="none" />
          </div>
          <div className="top-contents">
            <h2>{title}</h2>
            <div className="others">
              <p>
                {" "}
                <strong>Yields:</strong> {yields} Servings{" "}
              </p>
              <p>
                {" "}
                <strong>Calories:</strong> {calories} / Servings{" "}
              </p>
              <p>
                {" "}
                <strong>Category:</strong> {category}{" "}
              </p>
              <p>
                {" "}
                <strong>Dish Type:</strong> {dishType}{" "}
              </p>
            </div>
            <div className="tags">
              {healthLabels.map((item) => {
                return <span id={item}>#{item}</span>;
              })}
            </div>
          </div>
        </div>
        <div className="main-section">
          {ingredients.map((item) => {
            return <p id={item}>{item}</p>;
          })}
        </div>
        <div className="bottom">
          <a href="#!">view Instructions</a>
          <button onClick={togglePopup}>go back</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
