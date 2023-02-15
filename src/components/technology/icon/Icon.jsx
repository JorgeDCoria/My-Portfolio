import React from "react";

const Icon = ({ image, title }) => {
  return (
    <div className="flex h-24 w-24 flex-col">
      <img
        src={image}
        className="origin-top-left duration-700 hover:rotate-12"
        alt=""
      />
      <h3 className="text-center font-subtitle text-xl text-white">{title}</h3>
    </div>
  );
};

export default Icon;
