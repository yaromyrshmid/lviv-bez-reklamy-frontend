import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { HR } from "../../ui";
import Controls from "../Controls";
import ChangePassword from "./ChangePassword";

const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <Col lg={2} xl={1}>
          <Controls />
        </Col>
        <Col lg={10} xl={11}>
          <WorkingArea>
            <h1>Налаштування</h1>
            <ChangePassword />
            <HR />
          </WorkingArea>
        </Col>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled(Row)`
  margin-top: 1rem;
`;

const WorkingArea = styled.div`
  margin: 1rem 0 0 3rem;
`;

export default Settings;
