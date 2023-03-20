import React from "react";
import { RiGithubFill } from "react-icons/ri";
const BotonRepositorio = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <RiGithubFill className="text-primmary_base text-3xl" />
    </a>
  );
};

export default BotonRepositorio;
