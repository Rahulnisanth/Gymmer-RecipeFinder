import React from "react";
import Footer from "../Footer/Footer";
// Styles :
import "../../Styles/hero.scss";
// Micro-components :
import { Hero } from "./Micro-components/control";
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
