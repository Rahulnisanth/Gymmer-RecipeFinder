import React from "react";
// Micro-components :
import { Culinary, Hero, Quote } from "./Micro-components/control";
const Home = () => {
  return (
    <div>
      <Hero />
      <Culinary />
      <Quote />
    </div>
  );
};

export default Home;
