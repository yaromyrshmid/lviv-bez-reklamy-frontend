import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

import {
  VisualDataDisplay,
  StatusDisplay,
  AddressDisplay,
  CollectSilver
} from "../ui/MarkerRowComponents";
import { HR } from "../ui";
import { postComment } from "../../redux/actions/markerActions";

const MarkerRow = ({ marker, user, postComment, collectSilver }) => {
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
              <CollectSilver
                markerId={marker._id}
                silverAllocated={marker.silverAllocated}
                silverCollected={marker.silverCollected}
              />
            </GeneralDataDisplay>
          </Col>
          <Col lg={8}>
            <VisualDataDisplay
              photo={marker.virtualPhoto}
              location={marker.location}
              id={marker._id}
              postComment={postComment}
              user={user}
              comments={marker.comments}
              statusChange={marker.statusChange}
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
