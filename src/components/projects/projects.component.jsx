import "./projects.styles.scss";
import ProjectItem from "./project-item/project-item.component";

import projectImageOne from "../../assets/projects/Screenshot_space.png";
import projectImageTwo from "../../assets/projects/Screenshot_joblisting.png";
import projectImageThree from "../../assets/projects/Screenshot_bookmark.png";

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
  ];

  return (
    <div className="projects-container">
      <h2>Featured Projects</h2>
      <div className="project-container">
        {projects.map((project, iteration) => (
          <ProjectItem data={project} key={iteration} />
        ))}
      </div>
      <button>Load more all Projects Or all</button>
    </div>
  );
};

export default Projects;
