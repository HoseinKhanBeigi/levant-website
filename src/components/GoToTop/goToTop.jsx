import React from "react";
import "./goToTop.scss";
import { StaticImage } from "gatsby-plugin-image";

const GoTop = ({ showGoTop, scrollUp }) => {
  return (
    <div className={showGoTop} onClick={scrollUp}>
      <button className="goTops">
        <StaticImage src="../../../assets/images/arrow.png" alt="top chevron" />
      </button>
    </div>
  );
};
export default GoTop;
