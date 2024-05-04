/* eslint-disable no-unused-vars */
import { React, useState } from "react";
// Styles :
import "../../Styles/card.scss";
// Popup :
import PopUp from "./PopUp";
// Sample-image :
import picture from "../../Assets/Images/img3.jpg";

const RecipeCard = ({ data }) => {
  const {
    label,
    image,
    servings,
    url,
    healthLabels,
    ingredientLines,
    calories,
    totalDaily,
    mealType,
  } = data;

  // Popup-handler :
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <div className="card">
        <div className="card__body">
          <img src={picture} className="card__image" alt={label} />
        </div>
        <button onClick={togglePopup} className="card__btn">
          View Recipe
        </button>
        {isOpen && <PopUp recipe={data} togglePopup={togglePopup} />}
      </div>
    </div>
  );
};

export default RecipeCard;
