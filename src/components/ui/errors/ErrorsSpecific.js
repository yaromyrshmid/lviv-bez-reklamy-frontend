import React from "react";

const ErrorsSpecific = ({ errors }) => {
  return (
    <>
      {errors.map(error => (
        <p>{error}</p>
      ))}
    </>
  );
};

export default ErrorsSpecific;
