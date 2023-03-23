import { useState, useEffect } from "react";
import "./initialText.css";
function InitialText({ setShowCircle }) {
  const [textArr, setTextArr] = useState([]);
  const [shouldUpdateColors, setShouldUpdateColors] = useState(false);
  const [textDisappear, setTextDisappear] = useState(false);
  const [indexes, setIndexes] = useState({
    from: 0,
    to: null,
  });
  let text = "document.addEventListener('DOMContentLoaded', begInpresenTation)";

  useEffect(() => {
    let i = -1;
    const interval = setInterval(() => {
      i++;
      setTextArr((prev) => [...prev, text[i]]);
      if (i === 8 || i === 25 || i === 44 || i === 63) {
        setShouldUpdateColors((prev) => !prev);
        setIndexes((prev) => ({ from: prev.to === null ? 0 : prev.to, to: i }));
      }
      if (i === text.length - 1) {
        clearInterval(interval);
        setTimeout(() => {
          setTextDisappear(true);
        }, 1500);
      }
    }, 65);
  }, []);

  useEffect(() => {
    const elements = document.getElementsByClassName("letter");
    if (indexes.to !== null) {
      let color;
      let whiteColor = "white";
      let purpleColor = "purple";
      let tealColor = "teal";
      if (indexes.to === 8) {
        color = "#20dba9";
      }
      if (indexes.to === 25 || indexes.to === 63) {
        color = "#dbb320";
      }
      if (indexes.to === 44) {
        color = "#df5316";
      }
      for (let i = indexes.from; i < indexes.to; i++) {
        if (i === 8) {
          elements[i].style.color = whiteColor;
        } else if (i === 25) {
          elements[i].style.color = purpleColor;
        } else if (i === 44) {
          elements[i].style.color = whiteColor;
        } else if (i === 62) {
          elements[i + 1].style.color = purpleColor;
          elements[i].style.color = color;
        } else if (i === 57 || i === 49) {
          elements[i].style.color = tealColor;
        } else {
          elements[i].style.color = color;
        }
      }
    }
  }, [shouldUpdateColors]);
  return (
    <div className="textWrapper">
      <div
        className={`text ${textDisappear && "animateText"} `}
        onAnimationEnd={() => setShowCircle(true)}
      >
        {textArr.map((letter, i) => (
          <span
            key={i}
            className={`${(letter === "I" || letter === "T") && "it"} letter`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default InitialText;
