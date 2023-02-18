import { useEffect } from "react";

export default function Button({ onClick, text, danger, md, lg }) {
  useEffect(() => {
    if (!md && !lg)
      throw new Error("not found size md or lg <ButtonMd md .../>");
    if (md && lg)
      throw new Error("you can't select both properties md && lg, choose one ");
  }, []);
  return (
    <>
      <button
        className={`${
          danger
            ? "bg-red-500 hover:bg-red-400"
            : "bg-primary_500 transition-all duration-300 hover:scale-110 hover:bg-primary_400"
        } ${md && " w-24"}  ${lg && "w-44"} text-md
        h-10 rounded-2xl font-bold text-white shadow-md shadow-primary_800`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
