import React, { useEffect, useState } from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import { connect } from "react-redux";

import AdsMarker from "../marker/AdsMarker";

import { postMarker, getMarkers } from "../../redux/actions/markerActions";

const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = props => {
  // Setting opened marker to empty on load or to markers id if any is passed
  const [openedMarker, setopenedMarker] = useState(
    props.markerId ? props.markerId : ""
  );

  // Getting markers from API
  useEffect(() => {
    props.getMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    props.closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.markers]);

  const onMapClick = e => {
    // Opening modal for new location or if info window is opened - closing it
    if (openedMarker === "") {
      const location = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      props.openModal(location);
    } else {
      // Closing all infowindows
      setopenedMarker("");
    }
  };

  // Handler that is passed to markers to open them on click
  const openMarker = id => {
    setopenedMarker(id);
  };

  // Checking if center is passed through props
  const center = props.center
    ? props.center
    : { lat: 49.841659, lng: 24.031592 };

  return (
    <GoogleMap
      defaultZoom={props.center ? 17 : 13}
      defaultCenter={center}
      onClick={onMapClick}
      options={{
        styles: [
          {
            elementType: "labels",
            featureType: "poi",
            stylers: [{ visibility: "off" }]
          }
        ]
      }}
    >
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
        {props.markers.markers.map(marker => (
          <AdsMarker
            marker={marker}
            key={marker._id}
            markerOpened={marker._id === openedMarker}
            openMarker={openMarker}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );
};

const mapStateToProps = state => ({
  markers: state.markers
});

export default withScriptjs(
  withGoogleMap(connect(mapStateToProps, { postMarker, getMarkers })(Map))
);
