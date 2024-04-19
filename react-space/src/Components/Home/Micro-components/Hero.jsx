/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// Styles :
import "../../../Styles/hero.scss";
import img1 from "../../../Assets/Images/img1.jpg";

const Hero = () => {
  return (
    <div className="overlay">
      <div className="contents">
        <h1>
          About Foody<span>Freaks</span>
          <br /> Recipes
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button className="__button">Explore Recipes</button>
      </div>
      <div className="image__section">
        <div className="image">
          <img src={img1}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
