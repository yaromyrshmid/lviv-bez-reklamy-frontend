import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Map from "./Map";
import Modal from "../ui/Modal";
import ErrorInModal from "../ui/errors/ErrorInModal";
import Spinner from "../ui/Spinner/Spinner";
import AddNewMarkerForm from "../forms/AddNewMarkerForm";

const MapContainer = props => {
  const [showModal, setshowModal] = useState(false);
  const [clickLocation, setclickLocation] = useState({});

  const openModal = location => {
    setshowModal(true);
    setclickLocation(location);
  };

  // Centering map on location if any is passed and passing id to open infoWindow
  let mapCenter = {
    location: null,
    id: null
  };
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
      {/* Showing Modal */}
      {showModal && (
        <Modal closeModal={closeModal}>
          <AddNewMarkerForm location={clickLocation} />
        </Modal>
      )}
      {/* Showing error modal */}
      {props.nomarkersfound && (
        <ErrorInModal error={props.errors.nomarkersfound} />
      )}
      {props.loading && <Spinner />}
      <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<MapWrapper />}
        mapElement={<div style={{ height: `100%`, width: "100%" }} />}
        openModal={openModal}
        closeModal={closeModal}
        clickableIcons={false}
        // Passing center prop to map component
        center={mapCenter.location}
        // Passing marker id to open its InfoWindow
        markerId={mapCenter.id}
      />
    </div>
  );
};

const MapWrapper = styled.section`
  width: 100vw;
  height: calc(100vh - 70px);
`;

const MapStateToProps = state => ({
  loading: state.markers.loading,
  nomarkersfound: state.errors.nomarkersfound
});

export default connect(MapStateToProps)(MapContainer);
