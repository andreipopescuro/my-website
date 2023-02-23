import React from "react";
import { IoLogoGithub } from "react-icons/io5";
const Project = ({
  technologies,
  title,
  websiteHref,
  githubHref,
  imgSrc,
  last,
}) => {
  return (
    <div>
      <div className="opening-bracket bracket">&#123;</div>
      <div className="proj-content">
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
        <div className="project-title-container">
          <div className="project-title">{title}</div>
          <div>
            <a href={githubHref}>
              <IoLogoGithub className="gh-icon" />
            </a>
          </div>
        </div>
        <div className="project-image-container">
          <a href={websiteHref} target="_blank" className="anchor">
            <img src={imgSrc} className="project-image" alt="Nike copy" />
          </a>
        </div>
      </div>

      <div className="enclosing-bracket bracket">&#125;,</div>
      {last && (
        <div style={{ marginLeft: "10px" }} className="square-bracket">
          &#93;
        </div>
      )}
    </div>
  );
};

export default Project;
