import "./projects.styles.scss";
import ProjectItem from "./project-item/project-item.component";

import projectImageOne from "../../assets/projects/Screenshot_space.png";
import projectImageTwo from "../../assets/projects/Screenshot_joblisting.png";
import projectImageThree from "../../assets/projects/Screenshot_bookmark.png";
import projectImageFour from "../../assets/projects/Screenshot_loopstudios.png";

import seeAllPath from "../../assets/shared/background/paths/bubble-paths.json";

import { useEffect } from "react";

import makeBubbleFluid from "../bubble/bubble";

const Projects = () => {
  const bubbleButtonPath = seeAllPath.navlinkBubble;

  const projects = [
    {
      imageSrc: projectImageOne,
      siteUrl: "https://fahrgast.github.io/spacetourism/",
      repository: "https://github.com/Fahrgast/spacetourism",
      title: "Space Exploration",
      description:
        "A multi-page website about space tourism. Learn about our universe, the exciting secrets it holds and how we are trying to explore it. Find out the amazing technology of space exploration",
      tech: ["Javascript", "React", "Sass"],
    },
    {
      imageSrc: projectImageTwo,
      siteUrl: "https://fahrgast.github.io/Joblisting-Challenge/",
      repository: "https://github.com/Fahrgast/Joblisting-Challenge",
      title: "Joblisting Platform",
      description:
        "A single page job listing website. Users can filter existing Jobs by clicking on the specific categories. Jobs load dynamically and are initialized off a json file.",
      tech: ["Javascript", "React", "CSS"],
    },
    {
      imageSrc: projectImageThree,
      siteUrl: "https://fahrgast.github.io/Bookmark/",
      repository: "https://github.com/Fahrgast/Bookmark",
      title: "Bookmark",
      description: "A simple landing page with different style elements",
      tech: ["Javascript", "Sass"],
    },
    {
      imageSrc: projectImageFour,
      siteUrl: "https://fahrgast.github.io/Loopstudios/",
      repository: "https://github.com/Fahrgast/Loopstudios",
      title: "Loopstudios",
      description: "A simple landing page with different style elements",
      tech: ["HTML", "CSS"],
    },
  ];

  var counter = 100;

  useEffect(() => {
    makeBubbleFluid(1337, 15, 0.003, 0, ["see-all-link", "see-all-bubble"]);
  });

  return (
    <div className="projects-container" id="projects-container">
      <h2>Featured Projects</h2>
      <div className="project-container">
        {projects.map((project, iteration) => {
          counter = counter + 2;
          return <ProjectItem data={project} index={counter} key={iteration} />;
        })}
      </div>
      <div className="see-all-button">
        <a
          href="https://github.com/Fahrgast"
          className="see-all-link"
          target="_blank"
          rel="noreferrer noopener"
          id="see-all-link"
        >
          See all Projects
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 121.000000 54.000000"
          preserveAspectRatio="xMidYMid meet"
          className="see-all-bubble"
          id="see-all-bubble"
        >
          <g transform="translate(0.000000,54.000000) scale(0.100000,-0.100000)">
            <path id="bubble-path-1337" d={bubbleButtonPath} />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Projects;
