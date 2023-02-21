import React from "react";

const InputText = ({ label, valueInput, handleChange, error }) => {
  return (
    <div className=" relative flex h-10 w-full flex-col items-center gap-2 md:flex-row ">
      <p className="w-full capitalize text-white md:w-28">{label}</p>
      <input
        type={`${label === "name" ? "text" : "email"}`}
        className="h-8 w-full rounded-lg p-2 outline-none"
        placeholder={label}
        name={label}
        value={valueInput}
        onChange={(e) => handleChange(e)}
        id=""
      />
      {error && (
        <p className="absolute top-full right-2  rounded-lg bg-red-500 pl-3 pr-3  text-xs text-white">
          <span className="inline-block align-text-top">*</span> {error}
        </p>
      )}
    </div>
  );
};

export default InputText;
