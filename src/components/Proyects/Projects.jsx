import React from "react";
import Project from "./components/project/Project";
import projects from "../../Data/projects";

const Projects = () => {
  return (
    <div className="mb-24 min-h-screen p-4 pt-6">
      <h1 className="mb-8 text-center font-title text-5xl font-bold  text-secondary_400">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-3">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
