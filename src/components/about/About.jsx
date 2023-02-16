import React from "react";
import perfil from "../../assets/perfil.jpeg";
const About = () => {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-around md:h-[90vh] lg:flex-row">
      <div className="flex h-40 w-full items-center justify-around rounded-lg bg-neutral_50 p-4 md:h-56 md:w-3/4 lg:h-[450px] lg:w-2/6 lg:flex-col ">
        <h2 className="font-subtitle text-3xl text-primary_500">¿Quien soy?</h2>
        <img
          src={perfil}
          className=" h-24 w-24 rounded-2xl object-cover shadow-xl shadow-primary_700 md:h-40 md:w-40 lg:h-80 lg:w-80"
          alt=""
        />
      </div>

      <div className="flex w-full items-center justify-center rounded-lg bg-primary_700 p-4 md:w-3/4 lg:h-[450px] lg:w-[70ch]">
        <p className="overflow-y-auto text-justify text-sm text-primary_50 md:text-lg lg:text-base ">
          Hello world! Soy Coria Jorge, un estudiante avanzado en en la carrera
          Analista Programador Universitario de la Universidad Nacional de Jujuy
          (pendiente una materia) y graduado como Full Stack Developer del
          Bootcamp Soy Henrry. <br /> En el proceso de mi formación eh realizado
          proyectos de forma individual como grupal utilizando diversos
          lenguajes y herramientas tecnologicas como Java, SpringBoot, Angular,
          TypeScript, C#, .Net, Bootstrap entre otros. Actualmente estoy en mas
          contacto con React, Redux, Tailwind, Express, Node y sequelize. <br />{" "}
          Soy una persona curiosa y con entusiasmo por aprender siempre cosas
          nuevas. Me encanta ser parte de equipos de trabajo sumamente diversos
          y que con nuestras diferentes culturas nos podamos enriquecer. Creo
          que la diversidad de historias, culturas y pensamientos hacen a los
          grandes equipos. Si todos pensáramos igual, ¿Cómo le daríamos lugar a
          la creatividad?
        </p>
      </div>
    </div>
  );
};

export default About;
