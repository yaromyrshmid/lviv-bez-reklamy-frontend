import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { HR, Button } from "../ui";
import LoginGoogle from "./LoginGoogle";
import LoginForm from "../forms/LoginForm";
import { clearErrors } from "../../redux/actions/errorActions";
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
            <HR />
            <Link to="/register">
              <Button>
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

  h1 {
    text-align: center;
  }

  a {
    margin: 1rem auto;
  }

  display: flex;
  flex-direction: column;
`;

const mapStateToPtops = state => ({
  auth: state.auth
});

export default connect(mapStateToPtops, { clearErrors })(withRouter(Login));
