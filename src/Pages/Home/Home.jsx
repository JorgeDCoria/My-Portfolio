import React from "react";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";
import Technologies from "../../components/technology/Technologies";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Technologies />
    </div>
  );
};

export default Home;
