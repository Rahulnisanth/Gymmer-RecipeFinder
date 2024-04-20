import React from "react";
// Styles :
import "../../Styles/hero.scss";
// Micro-components :
import { Culinary, Hero } from "./Micro-components/control";
const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Culinary />
    </div>
  );
};

export default Home;
