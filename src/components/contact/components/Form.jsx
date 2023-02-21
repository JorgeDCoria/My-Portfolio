import React, { useState } from "react";
import InputText from "./InputText";
import { toast } from "react-toastify";

const validar = (input) => {
  const ExpRegLetrasEspacio = "^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
  const ExpRegEmail = `/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/`;
  const error = {};
  if (input.name === "") {
    error.name = "empty field";
  } else if (input.name.match(ExpRegLetrasEspacio) === null) {
    error.name = "The name must not contain symbols or be empty";
  }

  if (input.mail === "") {
    error.mail = "empty field";
  } else if (input.mail.match(ExpRegEmail) === null) {
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
    mail: "",
    message: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setError(validar({ ...input, [name]: value }));
  };
  return (
    <div className="flex w-full items-center justify-center   lg:w-1/2">
      <form
        className="flex w-full flex-col gap-8 rounded-xl bg-primary_700  p-8 shadow-project shadow-primary_900 md:w-5/6"
        action="
    "
      >
        <InputText
          label="name"
          valueInput={input.name}
          handleChange={handleChange}
          error={error.name}
        />
        <InputText
          label="mail"
          value={input.mail}
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
    </div>
  );
};

export default Form;
