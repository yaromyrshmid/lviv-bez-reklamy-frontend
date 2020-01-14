import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import Controls from "../Controls";
import ProfilePreview from "./ProfilePreview";

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Col lg={2} xl={1}>
          <Controls />
        </Col>
        <Col lg={10} xl={11}>
          <WorkingArea>
            <ProfilePreview />
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
