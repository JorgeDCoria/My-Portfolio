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
          <a
            href="https://www.linkedin.com/in/jorge-coria-9b6593246/"
            target="_blank"
            rel="noreferrer"
            className="duration-500 hover:scale-150"
          >
            <RiLinkedinBoxFill />
          </a>
          <a
            href="https://github.com/JorgeDCoria"
            className="duration-500 hover:scale-150"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=3884611503"
            className="duration-500 hover:scale-150"
            target="_blank"
            rel="noreferrer"
          >
            <RiWhatsappFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
