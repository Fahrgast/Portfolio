import "./skill-item.styles.scss";

const SkillItem = ({ data }) => {
  return (
    <div className="skill-item-container">
      <img className="meme-image" src={data.imageSrc} alt="" />
      <div className="skill-item-content-container">
        {data.skills.map((skill, iteration) => (
          <div className="skill-item-content" key={skill}>
            <h3 className="skill-name">{skill}</h3>
            <img
              className="skill-logo"
              src={data.skillLogos[iteration]}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
