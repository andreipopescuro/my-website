import { useState, useEffect } from "react";
import "./App.css";
import InitialText from "./components/InitialText/InitialText";
import MainContent from "./components/MainContent/MainContent";
function App() {
  const [showCircle, setShowCircle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  console.log("I'm sorry, but at the moment the website is not responsive. ");
  return (
    <div className="App">
      {!showContent && (
        <div className="headerWithAnimations">
          {!showContent && <InitialText setShowCircle={setShowCircle} />}
        </div>
      )}
      {!showContent && (
        <div
          className={`circleBackground ${showCircle && "animateCircle"}`}
          onAnimationEnd={() => setShowContent(true)}
        ></div>
      )}
      {showContent && <MainContent />}
    </div>
  );
}

export default App;
