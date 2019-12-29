import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Map from "./Map";
import Modal from "../modal/Modal";
import Spinner from "../ui/Spinner/Spinner";
import AddNewMarkerForm from "../forms/AddNewMarkerForm";
import keys from "../../utils/keys";

const MapContainer = props => {
  const [showModal, setshowModal] = useState(false);
  const [clickLocation, setclickLocation] = useState({});

  const openModal = location => {
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
      {props.loading && <Spinner />}
      <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${keys.googleMap.key}&v=3.exp&libraries=geometry`}
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
  height: calc(100vh - 70px);
`;

const MapStateToProps = state => ({
  loading: state.markers.loading
});

export default connect(MapStateToProps)(MapContainer);
