import React from "react";
import Project from "./components/project/Project";
import projects from "../../Data/projects";

const Projects = () => {
  return (
    <div className="h-screen p-4">
      <h1 className="text-center font-title text-5xl   text-primary_500">
        Proyectos
      </h1>
      <div className="flex justify-center">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
