import React from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";
import Projects from "../../components/Proyects/Projects";
import Technologies from "../../components/technology/Technologies";

const Home = () => {
  return (
    <div className="h-full">
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

      <div id="proyectos" className="scroll-mt-14">
        <Projects />
      </div>
      <div id="contacto" className="scroll-mt-14">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
