import React, { useRef, useState } from "react";
import InputText from "./InputText";
import { toast } from "react-toastify";
// assuming top-level await for brevity
import emailjs from "@emailjs/browser";
import ModalMail from "./ModalMail";

const validar = (input) => {
  const ExpRegLetrasEspacio = "^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
  const ExpRegEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const error = {};
  if (input.name === "") {
    error.name = "empty field";
  } else if (input.name.match(ExpRegLetrasEspacio) === null) {
    error.name = "The name must not contain symbols or be empty";
  }

  if (input.email === "") {
    error.mail = "empty field";
  } else if (input.email.match(ExpRegEmail) === null) {
    error.mail = "Émail Invalid";
  }

  if (input.message === "") {
    error.message = "empty field";
  }

  return error;
};

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  //controla si surge un error al enviar el msj
  const [errorEmail, setErrorEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const form = useRef();
  const handleShowModal = () => {
    setShowModal(!showModal);
    errorEmail && setErrorEmail(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setError(validar({ ...input, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      ![input.name, input.message, input.email].includes("") &&
      Object.getOwnPropertyNames(error).length === 0
    ) {
      emailjs
        .sendForm(
          process.env.REACT_APP_YOUR_SERVICE_ID,
          process.env.REACT_APP_YOUR_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_YOUR_PUBLIC_KEY
        )
        .then((result) => {
          setInput({ name: "", email: "", message: "" });
          handleShowModal();
        })

        .catch((e) => {
          console.log(e.message);
          setErrorEmail(true);
          handleShowModal();
        });
    } else {
      toast.error("Complete los campos para enviar el mensaje", {
        theme: "colored",
      });
    }
  };
  return (
    <div className="relative flex w-full items-center justify-center ">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex w-full flex-col gap-8 rounded-xl bg-primary_base p-8 shadow-project shadow-primary_900 md:w-5/6"
        action="
    "
      >
        <InputText
          label="name"
          value={input.name}
          handleChange={handleChange}
          error={error.name}
        />
        <InputText
          label="email"
          value={input.email}
          handleChange={handleChange}
          error={error.mail}
        />
        <div className="relative mb-2 flex flex-col gap-2 md:flex-row">
          {" "}
          <p className="w-28 capitalize text-white">Message</p>
          <textarea
            className="w-full rounded-lg p-2"
            name="message"
            id=""
            rows="10"
            value={input.message}
            onChange={(e) => handleChange(e)}
          ></textarea>
          {error.message && (
            <p className="absolute top-full right-2  rounded-lg bg-red-500 pl-3 pr-3  text-xs text-white">
              <span className="inline-block align-text-top">*</span>{" "}
              {error.message}
            </p>
          )}
        </div>

        <input
          type="submit"
          value="Enviar"
          className="w-full cursor-pointer rounded-lg bg-primary_500 p-2 text-white transition-all duration-500 hover:scale-110 hover:bg-primary_400"
        />
      </form>
      {showModal && (
        <ModalMail
          error={errorEmail}
          message={`${
            errorEmail
              ? "Ah ocurrido un error inesperado, Intente mas tarde por favor"
              : "Su mensaje ha sido enviado con exito. En las proximas horas me estare comunicando con ud, saludos !!"
          }`}
          handleClick={handleShowModal}
        />
      )}
    </div>
  );
};

export default Form;
