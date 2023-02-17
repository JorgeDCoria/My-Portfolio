import React from "react";
import Button from "../../../button/Button";
const handleClick = () => {};

const ModalProject = ({ handleClickClose }) => {
  return (
    <div className="w-scree fixed inset-0 z-[60] flex h-screen items-center justify-center bg-neutral-400">
      <div className="relative h-3/4 w-3/4 bg-primary_200">
        <div className="absolute top-2 right-2">
          <button onClick={handleClickClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-7 w-7 cursor-pointer rounded-full bg-red-500 text-white transition-all hover:h-8 hover:w-8"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className="flex w-full justify-around p-6 text-white">
          {/* <Button danger text={"Cancelar"} lg onClick={handleClickClose} /> */}

          <Button lg onClick={handleClick} text={"Ir al Sitio"} />
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
