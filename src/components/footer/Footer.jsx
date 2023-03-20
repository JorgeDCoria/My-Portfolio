import React from "react";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiWhatsappFill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <div className="grid h-44 grid-cols-1 border-t-2 border-secondary_base p-4 text-center text-sm text-white lg:grid-cols-2 lg:place-content-center">
      <p className="mb-4">
        Coria Jorge D. Analista Programador Universitario- Universidad Nacional
        de Jujuy <br />
        Full Stack Developer- Bootcamp Soy Henrry <br />
      </p>
      <div>
        <p> No dudes en Contactarme</p>
        <div className="flex justify-center gap-4 text-3xl text-secondary_base">
          <RiLinkedinBoxFill />
          <RiGithubFill />
          <RiWhatsappFill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
