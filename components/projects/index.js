import React from "react";
import ProjectLeaningRight from "./projectLeaningRight";
import ProjectLeaningLeft from "./projectLeaningLeft";
import projects from "../../constants/projects";

const index = () => {
  return (
    <div>
      {projects.map((project, index) => {
        return index % 2 === 0 ? (
          <ProjectLeaningRight project={project} />
        ) : (
          <ProjectLeaningLeft project={project} />
        );
      })}
    </div>
  );
};

export default index;
