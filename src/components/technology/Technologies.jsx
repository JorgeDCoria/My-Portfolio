import React from "react";
import ParticlesComponent from "../particles/ParticlesComponent";
import image from "../../assets/tech.gif";
const Technologies = () => {
  return (
    <div className="relative h-[90vh] w-full">
      <ParticlesComponent />

      <div className="absolute top-0 z-10 h-full w-full">
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="h-12 p-2 font-title text-5xl text-white">
            Tecnologias
          </h1>
          <div className="flex h-full w-full items-center justify-around">
            <h1>particulas</h1>
            <img className="h-4/5 rounded-xl" src={image} alt="programming" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
