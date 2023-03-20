import React from "react";
import { useNavigate } from "react-router";
import Button from "../button/Button";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-100">
      <h1 className="mb-4 text-6xl font-bold text-gray-900">404 - Not Found</h1>
      <p className="mb-4 text-xl text-gray-700">
        The page you are looking for does not exist.
      </p>
      <Button lg onClick={handleBack} text="Regresar" />
    </div>
  );
};

export default NotFound;
