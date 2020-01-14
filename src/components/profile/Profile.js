import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import ProfilePreview from "./ProfilePreview";
import Settings from "./Settings";
import { Button } from "../ui";

const Profile = () => {
  const [activeComponent, setactiveComponent] = useState("profilePreview");
  return (
    <Container>
      <Wrapper>
        <Col lg={2} xl={1}>
          <Button
            onClick={() => setactiveComponent("profilePreview")}
            margin="1rem 0 0 0"
          >
            <span>Профіль</span>
          </Button>
          <Button
            onClick={() => setactiveComponent("settings")}
            margin="1rem 0 0 0"
          >
            <span>Налаштування</span>
          </Button>
        </Col>
        <Col lg={10} xl={11}>
          <WorkingArea>
            {activeComponent === "profilePreview" && <ProfilePreview />}
            {activeComponent === "settings" && <Settings />}
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

export default Profile;
