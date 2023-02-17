import React from "react";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";
import Projects from "../../components/Proyects/Projects";
import Technologies from "../../components/technology/Technologies";

const Home = () => {
  return (
    <div>
      <div id="navbar">
        <NavBar />
      </div>
      <div id="header">
        <Header />
      </div>
      <div id="about" className="scroll-mt-14">
        {" "}
        <About />
      </div>
      <div id="technologies" className="scroll-mt-14">
        <Technologies />
      </div>

      <div id="proyectos">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
