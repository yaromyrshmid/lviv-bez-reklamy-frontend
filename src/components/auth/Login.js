import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

import LoginGoogle from "./LoginGoogle";
import LoginForm from "../forms/LoginForm";
import LoginFacebook from "./LoginFacebook";

const Register = props => {
  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [props.auth, props.history]);
  return (
    <Container>
      <h1 className="display-4 text-center">Вхід у Львів без реклами</h1>
      <LoginGoogle />
      <LoginFacebook />
      <LoginForm />
    </Container>
  );
};

const mapStateToPtops = state => ({
  auth: state.auth
});

export default connect(mapStateToPtops)(withRouter(Register));
