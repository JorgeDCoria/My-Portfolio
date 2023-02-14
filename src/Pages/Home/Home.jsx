import React from "react";
import NavBar from "../../components/navBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 className="font-title text-6xl font-bold  text-secondary_600 ">
        Hello world! este es un texto de prueba para visualizar la fuente victor
        mono
      </h1>
      <h2
        className="font-subtitle
      "
      >
        soy un subtitle
      </h2>
      y yo soy un parrafo normal y corriente pero el mas groso
    </div>
  );
};

export default Home;
