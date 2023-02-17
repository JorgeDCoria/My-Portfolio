import React from "react";
import Project from "./components/project/Project";
//images
import food from "../../assets/projects/food/landing.PNG";
const description = ` Desarrollo de una SPA utilizando React para el Front End y Redux como state management. Estilos con CSS sin uso de librerías externas. 
La SPA consume datos de una API a través de un Back End desarrollado en Node.JS utilizando Express`;
const Projects = () => {
  return (
    <div className="h-screen p-4">
      <h1 className="text-center font-title text-5xl   text-primary_500">
        Proyectos
      </h1>
      <div className="flex justify-center">
        <Project title={"Food"} img={food} description={description} />
      </div>
    </div>
  );
};

export default Projects;
