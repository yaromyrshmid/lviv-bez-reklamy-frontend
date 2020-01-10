import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import RegistrationForm from "../forms/RegistrationForm";
import { clearErrors } from "../../redux/actions/errorActions";

const Register = props => {
  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [props.auth, props.history]);

  useEffect(() => {
    props.clearErrors();
  });

  return (
    <Container>
      <Helmet>
        <title>Реєстрація | Львів без реклами</title>
      </Helmet>
      <Row>
        <Col>
          <RegisterWrapper>
            <h1>Реєстрація</h1>
            <RegistrationForm history={props.history} />
          </RegisterWrapper>
        </Col>
      </Row>
    </Container>
  );
};

const RegisterWrapper = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 1rem;

  h1 {
    text-align: center;
  }

  display: flex;
  flex-direction: column;
`;

const mapStateToPtops = state => ({
  auth: state.auth
});

export default connect(mapStateToPtops, { clearErrors })(withRouter(Register));
