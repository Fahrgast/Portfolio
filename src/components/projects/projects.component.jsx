import "./projects.styles.scss";
import ProjectItem from "./project-item/project-item.component";

import projectImageOne from "../../assets/projects/Screenshot_space.png";
import projectImageTwo from "../../assets/projects/Screenshot_joblisting.png";
import projectImageThree from "../../assets/projects/Screenshot_bookmark.png";
import projectImageFour from "../../assets/projects/Screenshot_loopstudios.png";

import seeAllBubble from "../../assets/projects/see-all-bubble-blue.png";

const Projects = () => {
  const projects = [
    {
      imageSrc: projectImageOne,
      siteUrl: "https://fahrgast.github.io/spacetourism/",
      repository: "https://github.com/Fahrgast/spacetourism",
      title: "Space Exploration Challenge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa tempore non saepe ad sequi eius quis in quisquam cum at unde animi nam, labore sed debitis velit dolore aliquid!",
    },
    {
      imageSrc: projectImageTwo,
      siteUrl: "https://fahrgast.github.io/Joblisting-Challenge/",
      repository: "https://github.com/Fahrgast/Joblisting-Challenge",
      title: "Joblisting Platform Challenge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa tempore non saepe ad sequi eius quis in quisquam cum at unde animi nam, labore sed debitis velit dolore aliquid!",
    },
    {
      imageSrc: projectImageThree,
      siteUrl: "https://fahrgast.github.io/Bookmark/",
      repository: "https://github.com/Fahrgast/Bookmark",
      title: "Bookmark Landing Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa tempore non saepe ad sequi eius quis in quisquam cum at unde animi nam, labore sed debitis velit dolore aliquid!",
    },
    {
      imageSrc: projectImageFour,
      siteUrl: "https://fahrgast.github.io/Loopstudios/",
      repository: "https://github.com/Fahrgast/Loopstudios",
      title: "Loopstudious Landing Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa tempore non saepe ad sequi eius quis in quisquam cum at unde animi nam, labore sed debitis velit dolore aliquid!",
    },
  ];

  var counter = 100;
  const seeAllBubblePath = seeAllBubble.seeAll;

  /* TODO Fix "See all Projects" Bubble */

  return (
    <div className="projects-container">
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
          className="bubs"
          target="_blank"
          rel="noreferrer noopener"
        >
          See all Projects
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 121.000000 54.000000"
          preserveAspectRatio="xMidYMid meet"
          className="bubs"
        >
          <g transform="translate(-22.75582,-97.986109)">
            <path d={seeAllBubblePath} />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Projects;
