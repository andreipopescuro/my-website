import React, { useState } from "react";
import FadeIn from "../Projects/FadeIn";
import "./about.css";
const About = () => {
  const [technologies] = useState([
    "React",
    "MongoDB",
    "CSS",
    "HTML",
    "Javascript",
    "Next.js",
    "Tailwind",
  ]);
  return (
    <FadeIn>
      <section className="aboutSection">
        <div className="about">
          <div className="spans">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className={`${tech} animateTech technology`}
                style={{
                  animationDelay: `${i * 400}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="about-text">
            <div>Hey!</div>
            <div>
              My name is
              <a
                href="https://www.linkedin.com/in/popescuandrei1/"
                target="_blank"
                className="linkedin-link"
              >
                <span className="myName">Popescu Andrei</span>
              </a>
            </div>
            <div>And I am a Frontend Developer</div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default About;
