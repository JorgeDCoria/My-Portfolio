import React from "react";

const Item = ({ title, children, section }) => {
  return (
    <>
      {title === "Descargar_Cv" ? (
        <a href={section} download="">
          <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 text-xl transition-all duration-300 hover:scale-110 hover:bg-primary_300 hover:text-white">
            {children} <span>{title}</span>
          </div>
        </a>
      ) : (
        <a href={section}>
          <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 text-xl transition-all duration-300 hover:scale-110 hover:bg-primary_300 hover:text-white">
            {children} <span>{title}</span>
          </div>
        </a>
      )}
    </>
  );
};

export default Item;
