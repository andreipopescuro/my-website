import React, { useEffect, useState, lazy, Suspense } from "react";
import About from "./About/About";
import "./mainContent.css";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
const LazyBg = lazy(() => import("./BgComponent"));

const MainContent = () => {
  const [pos, setPos] = useState("0%");
  const [progress, setProgress] = useState(0);
  const handleScroll = () => {
    // const documentHeight = document.documentElement.scrollHeight;
    const currentScroll = window.scrollY;
    setProgress(currentScroll / 75);
    setPos((prev) => `${currentScroll / 75}%`);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="containerr">
      <div className="content-slide">
        <About />
        <Projects />
        <Contact />
      </div>
      <Suspense>
        <LazyBg pos={pos} progress={progress} />
      </Suspense>
    </div>
  );
};

export default MainContent;
