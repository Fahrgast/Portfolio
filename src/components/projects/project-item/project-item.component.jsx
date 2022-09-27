import "./project-item.styles.scss";

import linkBubble from "../../../assets/shared/navbar/navlink-bubble-green-2.png";

const ProjectItem = ({ data }) => {
  const handleClick = (destination) => {
    window.open(destination).focus();
  };

  return (
    <div className="project-item-container">
      <h3 className="project-title">{data.title}</h3>
      <img src={data.imageSrc} alt="" className="project-image" />
      <p className="project-description">{data.description}</p>
      <div className="project-buttons">
        <div className="site-button link-button">
          <img
            src={linkBubble}
            onClick={() => handleClick(data.siteUrl)}
            className="project-button-bubble"
            alt="live site"
          />
          <a
            href={data.siteUrl}
            className="button-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live Site
          </a>
        </div>
        <div className="code-button link-button">
          <img
            src={linkBubble}
            onClick={() => handleClick(data.siteUrl)}
            className="project-button-bubble code-bubble"
            alt="source code"
          />
          <a
            href={data.repository}
            className="button-link code-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
