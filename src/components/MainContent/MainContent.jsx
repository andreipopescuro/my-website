import React, { useEffect, useState } from "react";
import About from "./About/About";
import "./mainContent.css";
import Projects from "./Projects/Projects";
const MainContent = () => {
  const [pos, setPos] = useState("0%");
  const [progress, setProgress] = useState(150);
  const handleScroll = () => {
    // const documentHeight = document.documentElement.scrollHeight;
    const currentScroll = window.scrollY;
    setProgress(currentScroll / 50);
    setPos((prev) => `${currentScroll / 50}%`);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="container">
      <div className="content-slide">
        <About />
        <Projects />
      </div>
      <div className="bg-slide">
        <div className="progress-bar" style={{ height: `${progress}vh` }}></div>
        <div
          className="bg-img-wrapper"
          style={{ backgroundPosition: `10% ${pos}` }}
        >
          <div className="black-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
