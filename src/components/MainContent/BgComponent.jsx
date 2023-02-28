import React from "react";

const BgComponent = ({ pos, progress }) => {
  return (
    <div className="bg-slide">
      <div className="progress-bar" style={{ height: `${progress}vh` }}></div>
      <div
        className="bg-img-wrapper"
        style={{ backgroundPosition: `10% ${pos}` }}
      >
        <div className="black-shadow"></div>
      </div>
    </div>
  );
};

export default BgComponent;
