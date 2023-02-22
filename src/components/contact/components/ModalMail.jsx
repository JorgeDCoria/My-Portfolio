import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import Button from "../../button/Button";
const ModalMail = ({ error, message, handleClick }) => {
  return (
    <div className="fixed inset-0 z-[60] flex h-screen w-screen items-center justify-center bg-[rgba(4,15,21,0.7)]">
      <div className="flex h-1/2 w-4/5 flex-col justify-between overflow-hidden rounded-xl bg-primary_50 md:w-1/2 lg:h-3/5 lg:w-1/3">
        <h1
          className={`${
            error ? "bg-red-500" : "bg-primary_500"
          }  flex h-16 items-center justify-center font-title  text-white md:text-2xl`}
        >
          {error ? "Error en envio de Mensaje" : "Mensaje Enviado!"}
        </h1>
        <div className="flex h-full w-full flex-col items-center justify-around font-subtitle">
          <h2
            className={`${
              error ? "text-red-500" : "text-green-500"
            } flex items-center justify-center gap-4 text-2xl font-bold md:text-2xl`}
          >
            <RiErrorWarningLine className=" text-3xl md:text-4xl" />{" "}
            {error ? "Oops !!" : "Success"}
          </h2>
          <p className=" p-4 text-center text-neutral_600 md:text-lg">
            {message}
          </p>
          <Button text="Aceptar" onClick={handleClick} lg />
        </div>
      </div>
    </div>
  );
};

export default ModalMail;
