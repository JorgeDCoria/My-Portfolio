import React from "react";
import Project from "./components/project/Project";
//images
import food from "../../assets/projects/food/landing.PNG";

const Projects = () => {
  return (
    <div className="h-screen p-4">
      <h1 className="text-center font-title text-5xl   text-primary_500">
        Proyectos
      </h1>
      <div className="flex justify-center">
        <Project title={"Food"} img={food} />
      </div>
    </div>
  );
};

export default Projects;
