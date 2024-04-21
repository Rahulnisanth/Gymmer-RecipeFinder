import React from "react";
import Footer from "../Footer/Footer";
// Styles :
import "../../Styles/hero.scss";
// Micro-components :
import { Culinary, Hero } from "./Micro-components/control";
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Hero />
        <Culinary />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
