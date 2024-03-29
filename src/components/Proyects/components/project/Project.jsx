import React, { useState } from "react";
import ModalProject from "../modalProject/ModalProject";

const Project = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="group relative h-[70vh] animate-shadowSecondary flex-col items-center overflow-hidden rounded-lg  border-none bg-white hover:animate-shadowPrimary">
      <div className="h-1/6 p-4 text-center font-title text-3xl font-semibold text-neutral-500">
        {project.title}
      </div>
      <div className="flex h-5/6 items-center justify-center">
        <img
          className="h-[70%] w-[95%] rounded-lg object-cover"
          src={project.image}
          alt={project.title}
        />
      </div>
      {/*  al hacer hover se muestra lo siguiente */}
      <div className="absolute -left-full -bottom-full h-full w-full duration-1000 group-hover:left-0 group-hover:bottom-0">
        <div className="relative h-full w-full border border-red-600 ">
          <svg
            className="absolute -top-28 -left-24 z-40 hidden h-[160%] w-[160%] animate-spinOne rounded-full border border-green-500 duration-1000 lg:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2000 1500"
            width="1em"
            height="1em"
          >
            <path fill="#030816" d="M0 0h2000v1500H0z" />
            <defs>
              <radialGradient id="c" gradientUnits="objectBoundingBox">
                <stop offset={0} stopColor="#030816" />
                <stop offset={1} stopColor="#4169e1" />
              </radialGradient>
              <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1={0}
                y1={750}
                x2={1550}
                y2={750}
              >
                <stop offset={0} stopColor="#18399a" />
                <stop offset={1} stopColor="#030816" />
              </linearGradient>
              <path
                id="b"
                fill="url(#a)"
                d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6-24.1 96-57.4 189.4-99.3 278.6-41.9 89.2-92.4 174.1-150.3 253.3-58 79.2-123.4 152.6-195.1 219-71.7 66.4-149.6 125.8-232.2 177.2-82.7 51.4-170.1 94.7-260.7 129.1-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6 93.6-20.2 185-49.5 272.5-87.2 87.6-37.7 171.3-83.8 249.6-137.3 78.4-53.5 151.5-114.5 217.9-181.7 66.5-67.2 126.4-140.7 178.6-218.9 52.3-78.3 96.9-161.4 133-247.9 36.1-86.5 63.8-176.2 82.6-267.6 18.8-91.4 28.6-184.4 29.6-277.4.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 .7 0 1.3-.1 2l.1.1z"
              />
              <g id="d">
                <use href="#b" transform="rotate(60) scale(.12)" />
                <use href="#b" transform="rotate(10) scale(.2)" />
                <use href="#b" transform="rotate(40) scale(.25)" />
                <use href="#b" transform="rotate(-20) scale(.3)" />
                <use href="#b" transform="rotate(-30) scale(.4)" />
                <use href="#b" transform="rotate(20) scale(.5)" />
                <use href="#b" transform="rotate(60) scale(.6)" />
                <use href="#b" transform="rotate(10) scale(.7)" />
                <use href="#b" transform="rotate(-40) scale(.835)" />
                <use href="#b" transform="rotate(40) scale(.9)" />
                <use href="#b" transform="rotate(25) scale(1.05)" />
                <use href="#b" transform="rotate(8) scale(1.2)" />
                <use href="#b" transform="rotate(-60) scale(1.333)" />
                <use href="#b" transform="rotate(-30) scale(1.45)" />
                <use href="#b" transform="rotate(10) scale(1.6)" />
              </g>
            </defs>
            <g transform="translate(1060 690)">
              <circle fill="url(#c)" r={3000} />
              <g opacity={0.5} fill="url(#c)">
                <circle r={2000} />
                <circle r={1800} />
                <circle r={1700} />
                <circle r={1651} />
                <circle r={1450} />
                <circle r={1250} />
                <circle r={1175} />
                <circle r={900} />
                <circle r={750} />
                <circle r={500} />
                <circle r={380} />
                <circle r={250} />
              </g>
              <g transform="rotate(-68.4 0 0)">
                <use href="#d" transform="rotate(10)" />
                <use href="#d" transform="rotate(120)" />
                <use href="#d" transform="rotate(240)" />
              </g>
              <circle fill="none" r={3000} />
            </g>
          </svg>

          <div className="absolute top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-around bg-primary_400 lg:bg-transparent">
            <p className="p-2 text-center text-white md:text-2xl lg:text-xl">
              {project.description}
            </p>
            <button
              onClick={handleShowModal}
              className="w-[90%] rounded-lg bg-primary_base p-2 text-white duration-500 hover:bg-primary_900"
            >
              Mas Info
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalProject
          handleClickClose={handleShowModal}
          data={project.data}
          url={project.url}
          repository={project.repository}
        />
      )}
    </div>
  );
};

export default Project;
