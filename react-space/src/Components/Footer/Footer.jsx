import React from "react";
// Styles :
import "../../Styles/footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="__left">
        <h2>FoodyFreaks.</h2>
        <span className="spanner">&copy; 2024 Semester Project.</span>
      </div>
      <div className="__right">
        <span className="spanner">Developed by</span>
        <a className="__author" href="https://www.linktr.ee/Rahulnisanth">
          Rahulnisanth
        </a>
      </div>
    </div>
  );
};

export default Footer;
