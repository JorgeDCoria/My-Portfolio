import React from "react";
import Button from "../../../button/Button";
import Carousel from "../carousel/Carousel";

// const handleClick = () => {};

const ModalProject = ({ handleClickClose, data, url }) => {
  return (
    <div className="w-scree fixed inset-0 z-[60] flex h-screen items-center justify-center bg-[rgba(4,15,21,0.7)]">
      <div className="relative h-4/5 w-4/5">
        <div className="absolute top-2 right-2 z-[70]">
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
        <Carousel data={data} />
        {url !== "" && (
          <div className="absolute bottom-2 flex w-full justify-center p-6 text-white">
            {/* <Button danger text={"Cancelar"} lg onClick={handleClickClose} /> */}

            <a href={url} target="_blank" rel="noreferrer">
              <Button lg text={"Ir al Sitio"} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalProject;
