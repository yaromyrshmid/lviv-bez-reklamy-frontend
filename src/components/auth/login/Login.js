import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { HR, Button } from "../../ui";
import LoginGoogle from "./LoginGoogle";
import LoginForm from "../../forms/LoginForm";
import { clearErrors } from "../../../redux/actions/errorActions";
// import LoginFacebook from "./LoginFacebook";

const Login = props => {
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
        <title>Вхід | Львів без реклами</title>
      </Helmet>
      <Row>
        <Col>
          <LoginWrapper>
            <h1>Вхід у Львів без реклами</h1>
            <LoginGoogle />
            <HR />
            {/* <LoginFacebook /> */}
            <LoginForm />
            <Link to="/forgotpassword" className="secondary">
              <p>Якщо пароль забуто</p>
            </Link>
            <HR />
            <Link to="/register">
              <Button margin="1rem auto">
                <span>Реєстрація</span>
              </Button>
            </Link>
          </LoginWrapper>
        </Col>
      </Row>
    </Container>
  );
};

const LoginWrapper = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 1rem;

  .secondary {
    margin: auto;
    margin-top: 0.5rem;

    p {
      margin-bottom: 0rem;
      color: var(--main);
    }
  }

  h1 {
    text-align: center;
  }

  display: flex;
  flex-direction: column;
`;

const mapStateToPtops = state => ({
  auth: state.auth
});

export default connect(mapStateToPtops, { clearErrors })(withRouter(Login));
