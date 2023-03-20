import React from "react";
import aboutme from "../../assets/aboutme.jpg";
const About = () => {
  return (
    <div className="box-border flex min-h-[80vh] w-full flex-col items-center justify-around overflow-y-auto bg-gradient-to-t from-primary_900 via-primary_800 to-primary_900 p-4 lg:flex-row">
      <div className="flex h-40 w-full items-center justify-center rounded-lg p-4 md:min-h-[300px] md:w-3/4 lg:h-full lg:w-1/2">
        <img
          src={aboutme}
          className=" object-content w-full rounded-2xl shadow-xl shadow-primary_300 md:h-full lg:h-80  lg:w-[80%] lg:-rotate-45 "
          alt=""
        />
      </div>

      <div className="flex w-full items-center justify-center rounded-lg p-4 lg:w-1/2">
        <p className="overflow-y-auto text-justify text-sm text-white md:w-[60ch] md:text-lg ">
          Hello world! Mi nombre es Coria Jorge un apasionado por la tecnologia
          y el desarrollo de software.
          <br />
          Desde joven, sempre eh estado interesado en la informatica y en como
          funciona el software. En la Universidad, decidi seguir mi pasion y
          estudiar la carrera Analista Programador Universitario, a finales de
          la carrera tambien ingrese a un bootcamp para obtener el titulo de
          Full Stack Developer. En el proceso de mi formación aprendi
          habilidades fundamentales que necesitaba para construir soluciones de
          software, como lenguajes de programacion como React, Redux, Tailwind,
          Express, Node, Java, SpringBoot, Angular, TypeScript, C#, .Net,
          Bootstrap, bases de datos, deseño de interfaces de usuario, gestion de
          proyectos y el trabajo en equipo usando metodologias agiles. <br />
          Si estas buscando un programador apasionado, trabajador y creativo,
          creo que pordriamos ser una buena opcion. Me encantaria tener la
          oportunidad de trabajar contigo y ayudarte a construir soluciones de
          software innovadores y de alta calidad.
        </p>
      </div>
    </div>
  );
};

export default About;
