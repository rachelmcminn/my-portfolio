import React from "react";
import spadeBlue from "../../assets/img/spade-blue.png";

export const Home = () => {
  return (
    <div id="home">
      <img src={spadeBlue} alt="Spade Blue" />
      <div className="page-title">hi, i'm rachel</div>
      <div className="page-subtitle">
        software engineer & creative technologist
      </div>

      <div className="home-text">
        I'm a problem solver at heart and a lifelong observer of human nature. I
        strive to create online spaces that are well designed, accessible and
        enjoyable to experience.
      </div>
    </div>
  );
};
