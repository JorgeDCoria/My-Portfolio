import React from "react";
import perfil from "../../assets/perfil1.png";

const Header = () => {
  return (
    <div className="relative z-0 h-screen w-full bg-header bg-cover bg-center bg-no-repeat lg:mt-16">
      <div className="z-10 h-full w-full bg-primary_800 opacity-30"></div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-around lg:flex-row">
        <div className="order-2 flex h-[400px] flex-col justify-around rounded-lg bg-primary_900 p-4 text-secondary_base md:w-[70ch] lg:order-1">
          <h1
            className={`text-center font-title text-2xl font-bold uppercase lg:text-5xl`}
          >
            Coria Jorge D. <br /> Full stack developer{" "}
          </h1>
          <p className="text-justify text-white">
            ¿Buscas un programador que pueda trabajar en cualquier lenguaje de
            programación y cualquier plataforma? Con mi amplia experiencia en
            programación y mi capacidad para aprender rápidamente, puedo
            adaptarme a cualquier proyecto y entregar resultados sobresalientes.
          </p>
        </div>
        <img
          src={perfil}
          className="order-1 h-48 w-48 rounded-3xl object-cover  md:h-96 md:w-96 lg:order-2 lg:h-[400px] lg:w-[400px]"
          alt="hola"
        />
      </div>
    </div>
  );
};

export default Header;
