import React from "react";

const Item = ({ title, children }) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 text-xl text-white transition-all hover:bg-primary_300 hover:text-primary_700">
      {children} <span>{title}</span>
    </div>
  );
};

export default Item;
