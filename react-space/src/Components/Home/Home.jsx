import React from "react";
// Styles :
import "../../Styles/hero.scss";
// Micro-components :
import { Culinary, Hero, Quote } from "./Micro-components/control";
const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Culinary />
      <Quote />
    </div>
  );
};

export default Home;
