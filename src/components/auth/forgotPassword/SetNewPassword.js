import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Button } from "../../ui";
import SetNewPasswordForm from "../../forms/SetNewPasswordForm";
import { clearErrors } from "../../../redux/actions/errorActions";
import { Link } from "react-router-dom";

const SetNewPassword = props => {
  const [success, setsuccess] = useState(false);

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
        <title>Відновлення паролю | Львів без реклами</title>
      </Helmet>
      <Row>
        <Col>
          <Wrapper>
            {!success ? (
              <>
                <h1>Встановіть новий пароль</h1>
                <SetNewPasswordForm callback={setsuccess} />
              </>
            ) : (
              <>
                <h1>Пароль змінено</h1>
                <Link to="/login">
                  <Button>
                    <span>Вхід</span>
                  </Button>
                </Link>
              </>
            )}
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

const Wrapper = styled.div`
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

export default connect(mapStateToPtops, { clearErrors })(SetNewPassword);
