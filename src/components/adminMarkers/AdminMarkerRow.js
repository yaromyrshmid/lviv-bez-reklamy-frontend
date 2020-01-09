import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

import {
  AdminVisualDataDisplay,
  StatusDisplay,
  AddressDisplay,
  UserDisplay
} from "../ui/MarkerRowComponents";
import { HR, Button } from "../ui";
import UpdateMarkerStatusForm from "../forms/UpdateMarkerStatusForm";
import {
  postAdminComment,
  deleteMarker,
  banUser
} from "../../redux/actions/adminActions";

const MarkerRow = ({
  marker,
  user,
  postAdminComment,
  deleteMarker,
  banUser
}) => {
  // Getting current status of marker
  const currentStatus = marker.statusChange[marker.statusChange.length - 1];

  return (
    <Col lg={12}>
      <MarkerRowWrapper>
        <Row>
          <Col lg={4}>
            <StatusDisplay currentStatus={currentStatus} />
            <AddressDisplay address={marker.address} />
            <HR />
            <UpdateMarkerStatusForm
              id={marker._id}
              currentStatus={currentStatus}
            />
            <HR />
            <UserDisplay user={marker.user} banUser={banUser} />
            <HR />
            <DeleteMarkerWrapper>
              <Button
                width="100%"
                danger
                onClick={() => deleteMarker(marker._id)}
              >
                <span>Видалити</span>
              </Button>
            </DeleteMarkerWrapper>
          </Col>
          <Col lg={8}>
            <AdminVisualDataDisplay
              photo={marker.virtualPhoto}
              location={marker.location}
              id={marker._id}
              postComment={postAdminComment}
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
  height: 450px;
  background-color: var(--lightest);
  overflow: hidden;
`;

const DeleteMarkerWrapper = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
`;

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, {
  postAdminComment,
  deleteMarker,
  banUser
})(MarkerRow);
