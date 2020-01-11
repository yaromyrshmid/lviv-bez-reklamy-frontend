import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import ForgotPasswordForm from "../../forms/ForgotPasswordForm";

const ForgotPassword = () => {
  const [success, setsuccess] = useState(false);

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
                <h1>Відправити лінк для відновлення паролю</h1>
                <ForgotPasswordForm callback={setsuccess} />
              </>
            ) : (
              <>
                <h1>Посилання для відновлення паролю відправлено</h1>
                <h4>
                  На Вашу електронну адресу надіслано листа. Перейдіть за
                  посиланням з цього листа для встановлення нового паролю.
                  <br />
                  Перевірте теку "Спам", якщо листа не було отримано.
                </h4>
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

  form {
    margin: auto;
    width: 50%;
  }
`;

export default ForgotPassword;
