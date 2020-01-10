import React, { useEffect } from "react";
import { InfoWindow } from "react-google-maps";
import styled from "styled-components";
import { connect } from "react-redux";

import { Button, Spinner } from "../ui";
import { HistoryDisplay } from "../ui/MarkerRowComponents";
import UpdateMarkerStatus from "../forms/UpdateMarkerStatusForm";
import { getMarkerPhoto } from "../../redux/actions/markerActions";
import { deleteMarker } from "../../redux/actions/adminActions";

const MarkerInfo = ({ marker, deleteMarker, auth, getMarkerPhoto }) => {
  const address = marker.address;
  const displayedAdress =
    address &&
    `${address.streetName ? address.streetName + ", " : ""}${
      address.streetNumber ? address.streetNumber + ", " : ""
    }${address.neighborhood ? address.neighborhood : ""}`;

  useEffect(() => {
    if (!marker.virtualPhoto) {
      getMarkerPhoto(marker._id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfoWindow>
      <InfoWrapper>
        <h6>{displayedAdress}</h6>
        <ImageContainer>
          {marker.virtualPhoto ? (
            <img src={marker.virtualPhoto} alt="ad" />
          ) : (
            <Spinner />
          )}
        </ImageContainer>
        <HistoryDisplay statusChange={marker.statusChange} />
        {auth.user.role === "admin" && (
          <AdminControls>
            <UpdateMarkerStatus
              id={marker._id}
              currentStatus={
                marker.statusChange[marker.statusChange.length - 1].to
              }
            />
            <DeleteButtonWrapper>
              <Button
                margin="1rem 0 0 0"
                width="8rem"
                danger
                onClick={() => deleteMarker(marker._id)}
              >
                <span>Видалити</span>
              </Button>
            </DeleteButtonWrapper>
          </AdminControls>
        )}
      </InfoWrapper>
    </InfoWindow>
  );
};

const InfoWrapper = styled.div`
  max-width: 400px;

  img {
    width: 100%;
  }
`;

const AdminControls = styled.div`
  margin-top: -1rem;
`;

const DeleteButtonWrapper = styled.div`
  padding-left: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  min-height: 225px;
`;

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteMarker, getMarkerPhoto })(
  MarkerInfo
);
