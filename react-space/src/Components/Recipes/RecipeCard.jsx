import { React, useState } from "react";
// Styles :
import "../../Styles/card.scss";
// Popup :
import PopUp from "./PopUp";

const RecipeCard = ({ data }) => {
  const recipe = {
    title: "Delicious Pasta",
    description:
      "Enjoy this mouthwatering pasta dish made with fresh ingredients!",
    image: "https://example.com/pasta.jpg",
    category: "Italian",
    yields: "4",
    dishType: "Lunch/Dinner",
    calories: "608.40",
    healthLabels: ["Vegetarian", "LowCarb"],
    ingredients: [
      "16 ounces Firm High Protein Tofu, 16 ounces Firm High Protein Tofu",
      "16 ounces Firm High Protein Tofu, 16 ounces Firm High Protein Tofu",
      "16 ounces Firm High Protein Tofu, 16 ounces Firm High Protein Tofu",
      "16 ounces Firm High Protein Tofu, 16 ounces Firm High Protein Tofu",
    ],
  };

  const { title, image } = data;
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div>
      <div className="card">
        <div className="card__body">
          <img src={image} className="card__image" alt={title} />
          <img src={image} className="card__tag" alt={title} />
          <h2 className="card__title">{title}</h2>
        </div>
        <button onClick={togglePopup} className="card__btn">
          View Recipe
        </button>
        {isOpen && <PopUp recipe={recipe} togglePopup={togglePopup} />}
      </div>
    </div>
  );
};

export default RecipeCard;
