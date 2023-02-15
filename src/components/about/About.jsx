import React from "react";
import perfil from "../../assets/perfil.jpeg";
const About = () => {
  return (
    <div className="flex h-[90vh] w-full items-center justify-around">
      <div className="flex h-[450px] flex-col items-center justify-around rounded-lg bg-neutral-200 p-4 ">
        <h2 className="font-subtitle text-3xl text-primary_500">¿Quien soy?</h2>
        <img
          src={perfil}
          className="h-80 w-80 rounded-2xl border-2 border-primary_700 object-cover"
          alt=""
        />
      </div>

      <div className="flex h-[450px] w-[70ch] items-center justify-center rounded-lg bg-primary_700 p-4">
        <p className="text-justify text-primary_50">
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
