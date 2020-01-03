import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

import {
  VisualDataDisplay,
  StatusDisplay,
  AddressDisplay,
  HistoryDisplay
} from "../ui/MarkerRowComponents";
import { HR } from "../ui";
import { postComment } from "../../redux/actions/markerActions";

const MarkerRow = ({ marker, user, postComment }) => {
  // Getting current status of marker
  const currentStatus = marker.statusChange[marker.statusChange.length - 1];

  return (
    <Col lg={12}>
      <MarkerRowWrapper>
        <Row>
          <Col lg={4}>
            <GeneralDataDisplay>
              <StatusDisplay currentStatus={currentStatus} />
              <AddressDisplay address={marker.address} />
              <HR />
              <HistoryDisplay statusChange={marker.statusChange} />
            </GeneralDataDisplay>
          </Col>
          <Col lg={8}>
            <VisualDataDisplay
              photo={marker.photo}
              location={marker.location}
              id={marker._id}
              postComment={postComment}
              user={user}
              comments={marker.comments}
            />
          </Col>
        </Row>
      </MarkerRowWrapper>
    </Col>
  );
};

const MarkerRowWrapper = styled.div`
  margin-top: 1rem;
  max-height: 900px;
  background-color: var(--lightest);
  overflow: hidden;

  @media (min-width: 992px) {
    height: 450px;
  }
`;

const GeneralDataDisplay = styled.div`
  max-height: 900px;
`;

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { postComment })(MarkerRow);
