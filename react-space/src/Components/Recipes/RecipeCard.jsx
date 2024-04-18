import React from "react";
// Styles :
import "../../Styles/card.scss";

const RecipeCard = ({ data }) => {
  const { title, description, image } = data;
  return (
    <div>
      <div className="card">
        <div className="card__body">
          <img src={image} class="card__image" alt={title} />
          <img src={image} class="card__tag" alt={title} />
          <h2 className="card__title">{title}</h2>
          <p className="card__description">
            {description.slice(0, 70) + " . . ."}
          </p>
        </div>
        <button className="card__btn">View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
