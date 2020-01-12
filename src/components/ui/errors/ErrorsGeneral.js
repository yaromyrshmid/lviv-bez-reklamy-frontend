import React from "react";
import { connect } from "react-redux";

const ErrorsGeneral = ({ errors }) => {
  return (
    <>
      <p>{errors.server}</p>
    </>
  );
};

const mapStateToPtops = state => ({
  errors: state.errors
});

export default connect(mapStateToPtops)(ErrorsGeneral);
