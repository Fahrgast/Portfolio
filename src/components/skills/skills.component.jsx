import "./skills.styles.scss";
import SkillItem from "./skill-container/skill-item.component";

import memeImageOne from "../../assets/skills/galaxy-brain-one.png";
import memeImageTwo from "../../assets/skills/galaxy-brain-two.png";
import memeImageThree from "../../assets/skills/galaxy-brain-three.png";
import memeImageFour from "../../assets/skills/galaxy-brain-four.png";

import htmlLogo from "../../assets/skills/html.png";
import cssLogo from "../../assets/skills/Css.png";
import jsLogo from "../../assets/skills/Js.png";
import reactLogo from "../../assets/skills/React.png";
import sassLogo from "../../assets/skills/Sass.png";
import bootstrapLogo from "../../assets/skills/Bootstrap.png";

const Skills = () => {
  const skills = [
    {
      imageSrc: memeImageOne,
      skills: ["Html", "Css"],
      skillLogos: [htmlLogo, cssLogo],
    },
    {
      imageSrc: memeImageTwo,
      skills: ["Javascript"],
      skillLogos: [jsLogo],
    },
    {
      imageSrc: memeImageThree,
      skills: ["React", "Sass"],
      skillLogos: [reactLogo, sassLogo],
    },
    {
      imageSrc: memeImageFour,
      skills: ["Bootstrap"],
      skillLogos: [bootstrapLogo],
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-content-container">
        {skills.map((skill, iteration) => (
          <SkillItem data={skill} key={`${skill} ${iteration}`} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
