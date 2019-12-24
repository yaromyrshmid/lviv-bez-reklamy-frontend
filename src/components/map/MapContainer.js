import React, { useState } from "react";
import styled from "styled-components";

import Map from "./Map";
import Modal from "../modal/Modal";
import AddNewMarkerForm from "../forms/AddNewMarkerForm";

const MapContainer = props => {
  const [showModal, setshowModal] = useState(false);
  const [clickLocation, setclickLocation] = useState({});

  const openModal = location => {
    console.log("modal has location: ", location);
    setshowModal(true);
    setclickLocation(location);
  };

  // Centering map on location if any is passed
  let mapCenter = null;
  if (props.match) {
    if (props.match.params.location) {
      mapCenter = JSON.parse(props.match.params.location);
    }
  }

  const closeModal = () => {
    setshowModal(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {showModal && (
        <Modal closeModal={closeModal}>
          <AddNewMarkerForm location={clickLocation} closeModal={closeModal} />
        </Modal>
      )}
      <Map
        isMarkerShown
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCoDbaLk0etEXW3l3FR1Ke7IxJFiP96M1s&v=3.exp&libraries=geometry"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<MapWrapper />}
        mapElement={<div style={{ height: `100%`, width: "100%" }} />}
        openModal={openModal}
        closeModal={closeModal}
        clickableIcons={false}
        // Passing center prop to map component
        center={mapCenter}
      />
    </div>
  );
};

const MapWrapper = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
`;

export default MapContainer;
