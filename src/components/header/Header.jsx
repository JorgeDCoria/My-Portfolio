import React from "react";
import perfil from "../../assets/perfil.jpeg";

const Header = () => {
  return (
    <div className="relative z-0 h-screen w-full bg-header bg-cover bg-center bg-no-repeat">
      <div className="z-10 h-full w-full bg-primary_800 opacity-30"></div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-around lg:flex-row">
        <div className="order-2 flex h-[400px] flex-col justify-around rounded-lg bg-primary_900  p-4  text-white md:w-[70ch] lg:order-1">
          <h1 className="  font-title text-2xl font-bold uppercase md:text-center lg:text-5xl">
            Coria Jorge D. <br /> Full stack developer{" "}
          </h1>
          <p className="text-justify">
            "Una de las cosas más fascinantes de los programadores es que no
            puedes saber si están trabajando o no sólo con mirarlos. A menudo
            están sentados aparentemente tomando café, chismorreando o mirando a
            las nubes. Sin embargo, es posible que estén poniendo en orden todas
            las ideas individuales y sin relación que pululan por su mente"
          </p>
        </div>
        <img
          src={perfil}
          className="order-1 h-48 w-48 rounded-full object-cover shadow-2xl shadow-primary_500 md:h-80 md:w-80 lg:order-2 lg:h-[400px] lg:w-[400px]"
          alt="hola"
        />
      </div>
    </div>
  );
};

export default Header;
