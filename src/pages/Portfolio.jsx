import React from "react";
import { PageHeader, Projects } from "../components";
import projectData from "./projectsData.json";

export const Portfolio = () => {
  return (
    <div className="Portfolio">
      <PageHeader description="View my Work" title="Portfolio" />
      <div className="Wrapper">
        {projectData?.map((project, id) => (
          <Projects
            id={project.id}
            title={project.title}
            image={project.image}
            technologies={project.technologies}
            description={project.description}
            github={project.github}
            deployed={project.deployed}
            color={project.bgcolor}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};
