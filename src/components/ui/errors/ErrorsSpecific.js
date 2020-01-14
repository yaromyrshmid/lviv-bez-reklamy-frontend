import React from "react";

const ErrorsSpecific = ({ errors }) => {
  return (
    <>
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </>
  );
};

ErrorsSpecific.defaultProps = {
  errors: []
};

export default ErrorsSpecific;
