import React from "react";

const Icon = ({ image, title }) => {
  return (
    <div className="flex h-16 w-16 flex-col md:h-24 md:w-24">
      <img
        src={image}
        className="origin-top-left duration-700 hover:rotate-12"
        alt=""
      />
      <h3 className="text-center font-subtitle text-base text-white md:text-xl">
        {title}
      </h3>
    </div>
  );
};

export default Icon;
