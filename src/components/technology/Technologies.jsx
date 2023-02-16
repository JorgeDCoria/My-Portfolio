import React from "react";
import ParticlesComponent from "../particles/ParticlesComponent";
import Icon from "./icon/Icon";

//imagenes
import image from "../../assets/tech.gif";
import express from "../../assets/express.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.png";
import nodejs from "../../assets/nodejs.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import scrum from "../../assets/scrum.png";
import js from "../../assets/js.png";
import sequelize from "../../assets/sequelize.png";
import tailwind from "../../assets/tailwind.png";

const Technologies = () => {
  const technologies = [
    { img: react, title: "React" },
    { img: redux, title: "Redux" },
    { img: js, title: "Javascript" },
    { img: nodejs, title: "NodeJs" },
    { img: tailwind, title: "Tailwind" },
    { img: express, title: "Express" },
    { img: sequelize, title: "Sequelize" },
    { img: git, title: "Git" },
    { img: figma, title: "Figma" },
    { img: scrum, title: "Scrum" },
  ];
  return (
    <div className="relative h-[90vh] w-full ">
      <ParticlesComponent />

      <div className="absolute top-0 z-10  h-full w-full  ">
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="h-1/6 p-2 font-title text-5xl text-white">
            Tecnologias
          </h1>
          <div className=" flex h-5/6 w-full items-center justify-around ">
            <div className="flex h-full w-full flex-wrap items-center justify-center gap-8 lg:w-1/2 ">
              {technologies.map((tech) => (
                <Icon key={tech.title} image={tech.img} title={tech.title} />
              ))}
            </div>

            <img
              className="hidden h-5/6 rounded-xl lg:block"
              src={image}
              alt="programming"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
