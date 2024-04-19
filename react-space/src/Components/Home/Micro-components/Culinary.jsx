import React from "react";
// Styles :
import "../../../Styles/culinary.scss";
import img3 from "../../../Assets/Images/img3.jpg";
const Culinary = () => {
  return (
    <div className="culinary">
      <div className="contents">
        <h1>
          Important <br />
          <span>Culinary</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting.Lorem
          Ipsum is simply dummy text of the printing and typesetting
        </p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
      </div>
      <div className="image__section">
        <div className="image">
          <img src={img3} alt="none"></img>
        </div>
      </div>
    </div>
  );
};

export default Culinary;
