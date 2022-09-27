import "./project-item.styles.scss";

const ProjectItem = ({ data }) => {
  const handleClick = (destination) => {
    window.open(destination).focus();
  };

  return (
    <div className="project-item-container">
      <img src={data.imageSrc} alt="" />
      <div className="project-buttons">
        <input
          type="button"
          onClick={() => handleClick(data.siteUrl)}
          value="Live Site"
        ></input>
        <input
          type="button"
          onClick={() => handleClick(data.repository)}
          value="Source Code"
        ></input>
      </div>
      <p className="project-description">{data.description}</p>
    </div>
  );
};

export default ProjectItem;
