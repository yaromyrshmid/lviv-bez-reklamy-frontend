import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const RegisterSuccess = () => {
  return (
    <Container>
      <Helmet>
        <title>Реєстрація успішна | Львів без реклами</title>
      </Helmet>
      <Row>
        <Col>
          <RegisterWrapper>
            <h1>Реєстрація успішна</h1>
            <h4>
              На Вашу електронну адресу надіслано листа. Перейдіть за посиланням
              з цього листа для підтвердження електронної адреси та входу.
              <br />
              Перевірте теку "Спам", якщо листа не було отримано.
            </h4>
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

  h4 {
    text-align: center;
  }

  display: flex;
  flex-direction: column;
`;

export default RegisterSuccess;
