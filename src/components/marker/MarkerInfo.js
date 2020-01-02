import React from "react";
import { InfoWindow } from "react-google-maps";
import styled from "styled-components";
import { connect } from "react-redux";

import { Button } from "../ui";
import { HistoryDisplay } from "../ui/MarkerRowComponents";
import UpdateMarkerStatus from "../forms/UpdateMarkerStatusForm";
import { deleteMarker } from "../../redux/actions/adminActions";

const MarkerInfo = ({ marker, deleteMarker, auth }) => {
  const address = marker.address;
  const displayedAdress =
    address &&
    `${address.streetName ? address.streetName + ", " : ""}${
      address.streetNumber ? address.streetNumber + ", " : ""
    }${address.neighborhood ? address.neighborhood : ""}`;

  return (
    <InfoWindow>
      <InfoWrapper>
        <div className="titleWrapper">
          <h6>{displayedAdress}</h6>
        </div>
        <img src={"http://localhost:5000" + marker.photo} alt="ad" />
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
  .titleWrapper {
    padding: 0 1rem;
  }

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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteMarker })(MarkerInfo);
