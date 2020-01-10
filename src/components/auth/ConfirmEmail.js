import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { connect } from "react-redux";

import { confirmEmail } from "../../redux/actions/authActions";

const ConfirmEmail = props => {
  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    }
  }, [props.auth, props.history]);

  useEffect(() => {
    props.confirmEmail(props.match.params.emailConfirmationToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Email підтверджено | Львів без реклами</title>
      </Helmet>
      <Row>
        <Col>
          <RegisterWrapper>
            {props.errors ? (
              <>
                <h4>{props.errors.user} </h4>
                <h4>{props.errors.email} </h4>
              </>
            ) : (
              <h1>Дякуємо! Електронна адреса підтверджена</h1>
            )}
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
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToPtops, { confirmEmail })(
  withRouter(ConfirmEmail)
);
