import "./project-item.styles.scss";

import { useEffect } from "react";

import makeBubbleFluid from "../../bubble/bubble";
import bubblePath from "../../../assets/shared/background/paths/bubble-paths.json";

const ProjectItem = ({ data, index }) => {
  const bubbleButtonPath = bubblePath.navlinkBubble;
  useEffect(() => {
    makeBubbleFluid(index, 15, 0.003, 0, [
      `project-button-bubble-${index}`,
      `button-link-${index}`,
    ]);
    makeBubbleFluid(index + 1, 15, 0.003, 0, [
      `project-button-bubble-${index + 1}`,
      `button-link-${index + 1}`,
    ]);
  });

  return (
    <div className="project-item-container">
      <h3 className="project-title">{data.title}</h3>
      <img src={data.imageSrc} alt="" className="project-image" />
      <p className="project-description">{data.description}</p>
      <div className="project-techs">
        {data.tech.map((technology) => (
          <p className="technology" key={technology}>{`${technology}`}</p>
        ))}
      </div>
      <div className="project-buttons">
        <div className="site-button link-button">
          <a
            href={data.siteUrl}
            className="button-link"
            id={`button-link-${index}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 121.000000 54.000000"
            preserveAspectRatio="xMidYMid meet"
            className={"project-button-bubble site-bubble"}
            id={`project-button-bubble-${index}`}
          >
            <g transform="translate(0.000000,54.000000) scale(0.100000,-0.100000)">
              <path id={`bubble-path-${index}`} d={bubbleButtonPath} />
            </g>
          </svg>
        </div>
        <div className="code-button link-button">
          <a
            href={data.repository}
            className="button-link code-link"
            id={`button-link-${index + 1}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Code
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 121.000000 54.000000"
            preserveAspectRatio="xMidYMid meet"
            className="project-button-bubble code-bubble"
            id={`project-button-bubble-${index + 1}`}
          >
            <g transform="translate(0.000000,54.000000) scale(0.100000,-0.100000)">
              <path id={`bubble-path-${index + 1}`} d={bubbleButtonPath} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
