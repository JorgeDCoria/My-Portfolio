import React from "react";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
    </div>
  );
};

export default Home;
