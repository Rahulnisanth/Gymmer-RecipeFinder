import React from "react";
// Loader :
import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <PacmanLoader
          color={"#ff0056"}
          loading={2000}
          size={75}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
